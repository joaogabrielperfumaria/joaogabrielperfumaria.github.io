"""
Gera js/desapegos.json a partir das planilhas de desapegos (Designer e Nicho).

Uso: python3 -I scripts/import-desapegos.py "Designer Venda.xlsx" "Nicho Venda.xlsx"

Só biblioteca padrão. A categoria vem da célula A1 de cada planilha; as
colunas esperadas são Marca | Perfume | Concentração | Volume(ml) | Preço |
Por | (Cliente). Linhas com "Cliente" preenchido estão vendidas/reservadas
e ficam de fora. O preço publicado é o "Por", arredondado ao real.
"""
import html
import json
import re
import sys
import unicodedata
import zipfile
from datetime import datetime, timezone
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "js" / "desapegos.json"


def read_rows(path):
    z = zipfile.ZipFile(path)
    shared = []
    if "xl/sharedStrings.xml" in z.namelist():
        xml = z.read("xl/sharedStrings.xml").decode()
        for si in re.findall(r"<si>(.*?)</si>", xml, re.S):
            shared.append(html.unescape("".join(re.findall(r"<t[^>]*>(.*?)</t>", si, re.S))))
    sheet = z.read("xl/worksheets/sheet1.xml").decode()
    rows = []
    for row in re.findall(r"<row[^>]*>(.*?)</row>", sheet, re.S):
        cells = {}
        for col, attrs, inner in re.findall(r'<c r="([A-Z]+)\d+"([^>]*?)(?:/>|>(.*?)</c>)', row, re.S):
            m = re.search(r"<v>(.*?)</v>", inner or "")
            if not m:
                m = re.search(r"<t[^>]*>(.*?)</t>", inner or "", re.S)
            if not m:
                continue
            value = m.group(1)
            if 't="s"' in attrs:
                value = shared[int(value)]
            cells[col] = html.unescape(value).strip()
        if cells:
            rows.append(cells)
    return rows


def slugify(text):
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")


def parse(path):
    rows = read_rows(path)
    category = rows[0].get("A", "").strip().lower()
    if category not in ("designer", "nicho"):
        sys.exit(f"{path}: célula A1 deveria ser 'Designer' ou 'Nicho', veio '{category}'.")
    items = []
    for r in rows[2:]:
        if not r.get("A") or not r.get("B") or not r.get("F"):
            continue
        if r.get("G"):
            continue  # já tem cliente
        volume = re.sub(r"\D", "", r.get("D", ""))
        conc = r.get("C", "")
        item = {
            "id": slugify(f"{category} {r['A']} {r['B']} {conc} {volume}"),
            "category": category,
            "brand": r["A"],
            "name": r["B"],
        }
        if conc:
            item["concentration"] = conc
        if volume:
            item["volume"] = f"{volume}ml"
        item["price"] = int(float(r["F"]) + 0.5)
        items.append(item)
    return items


def main(paths):
    if not paths:
        sys.exit(__doc__)
    items = [i for p in paths for i in parse(p)]
    ids = [i["id"] for i in items]
    dup = {x for x in ids if ids.count(x) > 1}
    if dup:
        sys.exit(f"IDs duplicados: {sorted(dup)}")
    lines = ",\n".join("    " + json.dumps(i, ensure_ascii=False) for i in items)
    updated = datetime.now(timezone.utc).isoformat(timespec="seconds")
    OUT.write_text(f'{{\n  "updatedAt": "{updated}",\n  "items": [\n{lines}\n  ]\n}}\n', encoding="utf-8")
    by = {}
    for i in items:
        by[i["category"]] = by.get(i["category"], 0) + 1
    print(f"Gravado {OUT.name}: {len(items)} itens {by}")


if __name__ == "__main__":
    main(sys.argv[1:])
