/**
 * Enriquecimento editorial das fragrâncias: imagem, família olfativa,
 * pirâmide e perfumista.
 *
 * A planilha é a fonte de preço e disponibilidade; este arquivo é a fonte
 * do perfil olfativo. Todos os dados foram apurados nos sites oficiais das
 * marcas — nada aqui é inventado. Quando a marca divulga apenas uma lista
 * de notas, sem separar em saída/coração/fundo (caso da Initio), usamos
 * `mainNotes` em vez de forjar uma pirâmide.
 *
 * A chave de cada item é o slug de "marca + nome" gerado por `slugify()`
 * em data.js. Para adicionar um perfume novo: rode o site, abra o console
 * e veja o aviso com o slug esperado.
 */
export const FRAGRANCES = {
  "boadicea-the-victorious-rose-sapphire": {
    image: "assets/perfumes/rose-sapphire.webp",
    family: "Floral Especiado",
    source: "boadiceaperfume.com",
    notes: {
      top: ["Cardamomo", "Cúrcuma", "Gerânio", "Açafrão"],
      heart: ["Rosa Turca", "Helicriso", "Neroli", "Hedione"],
      base: ["Benjoim", "Cedro", "Labdanum", "Mirra", "Cypriol", "Patchouli", "Almíscares"],
    },
  },

  "boadicea-the-victorious-knight-of-love": {
    image: "assets/perfumes/knight-of-love.webp",
    family: "Amadeirado",
    perfumer: "Christian Provenzano",
    source: "boadiceaperfume.com",
    notes: {
      top: ["Cardamomo", "Zimbro", "Pimenta Rosa", "Frutas Vermelhas", "Bergamota"],
      heart: ["Cashmeran", "Magnólia", "Violeta", "Rosa Damascena"],
      base: ["Âmbar", "Couro", "Musgo", "Tabaco", "Baunilha", "Sândalo", "Benjoim"],
    },
  },

  "boadicea-the-victorious-amber-sapphire": {
    image: "assets/perfumes/amber-sapphire.webp",
    family: "Ambarado",
    source: "boadiceaperfume.com",
    notes: {
      top: ["Bergamota", "Cassis", "Canela", "Madeira Cítrica", "Rum"],
      heart: ["Rosa", "Jasmim Indiano", "Magnólia", "Lentisco"],
      base: ["Cedro", "Cashmeran", "Oud do Camboja", "Fava Tonka", "Baunilha"],
    },
  },

  "cirque-du-soleil-l-eau-parfum": {
    image: "assets/perfumes/leau-de-parfum.webp",
    family: "Floral Frutado Gourmand",
    perfumer: "Alexis Grugeon",
    source: "parfumcirquedusoleil.com",
    notes: {
      top: ["Algodão-doce", "Maçã Vermelha", "Bergamota"],
      heart: ["Pipoca", "Manteiga", "Frésia", "Pétalas de Íris"],
      base: ["Caramelo", "Fava de Baunilha", "Âmbar", "Sândalo"],
    },
  },

  "gritti-chantilly": {
    image: "assets/perfumes/chantilly.webp",
    family: "Gourmand Frutado",
    perfumer: "Luca Gritti",
    source: "grittifragrances.com",
    notes: {
      top: ["Melão", "Morango", "Bergamota"],
      heart: ["Maçã", "Coco", "Flor de Cassis"],
      base: ["Baunilha", "Notas Pudradas", "Almíscar"],
    },
  },

  "gritti-mango-aoud": {
    image: "assets/perfumes/mango-aoud.webp",
    family: "Frutado Amadeirado",
    perfumer: "Luca Gritti",
    source: "grittifragrances.com",
    notes: {
      top: ["Manga", "Goiaba", "Neroli"],
      heart: ["Leite de Coco", "Osmanthus", "Ylang-Ylang"],
      base: ["Oud", "Âmbar", "Baunilha"],
    },
  },

  "histoires-de-parfums-1740": {
    image: "assets/perfumes/1740.webp",
    family: "Amadeirado Especiado · Couro",
    source: "histoiresdeparfums.com",
    notes: {
      top: ["Bergamota", "Davana"],
      heart: ["Patchouli", "Coentro", "Cardamomo"],
      base: ["Cedro", "Bétula", "Labdanum", "Couro", "Baunilha", "Elemi", "Imortelle"],
    },
  },

  "initio-oud-for-greatness-neo": {
    image: "assets/perfumes/oud-for-greatness-neo.webp",
    family: "Amadeirado Aromático",
    source: "initioparfums.com",
    // A Initio divulga as notas sem separar em pirâmide.
    mainNotes: ["Oud", "Bergamota", "Lavanda Orpur®", "Açafrão", "Bálsamo de Abeto", "Almíscar"],
  },

  "initio-wild-rush": {
    image: "assets/perfumes/wild-rush.webp",
    family: "Fougère Aromático",
    source: "initioparfums.com",
    mainNotes: ["Bergamota", "Lavanda", "Baunilha", "Caramelo", "Frutas Vermelhas", "Sândalo", "Patchouli"],
  },

  "mizensir-for-your-love": {
    image: "assets/perfumes/for-your-love.webp",
    family: "Almiscarado Frutado",
    perfumer: "Alberto Morillas",
    source: "mizensirparfums.com",
    notes: {
      top: ["Framboesa", "Exaltone® (almíscar)"],
      heart: ["Cachalox® (acorde âmbar-amadeirado)"],
      base: ["Essência de Benjoim", "Coração de Patchouli"],
    },
  },

  "mizensir-tonic-water": {
    image: "assets/perfumes/tonic-water.webp",
    family: "Fresco Marinho",
    source: "mizensirparfums.com",
    notes: {
      top: ["Calone", "Essência de Pimenta de Sichuan", "Essência de Cardamomo"],
      heart: ["Ambrox", "Cetalox", "Cachalox"],
      base: ["Resinoide de Incenso", "Cypriol", "Absoluto de Baunilha", "Norlimbanol"],
    },
  },

  "omanluxury-dejan": {
    image: "assets/perfumes/dejan.webp",
    family: "Amadeirado",
    perfumer: "Dominique Ropion",
    source: "omanluxury.store",
    notes: {
      top: ["Acorde de Água de Rosas de Jabal Akhdar"],
      heart: ["Cypriol", "Cisto", "Labdanum"],
      base: ["Almíscar", "Âmbar", "Oud"],
    },
  },

  "parfums-d-elmar-zaya": {
    image: "assets/perfumes/zaya.webp",
    family: "Ambarado Gourmand",
    perfumer: "Christian Carbonnel",
    source: "parfumsdelmar.com",
    notes: {
      top: ["Bergamota", "Conhaque", "Mel", "Maçã", "Noz-moscada"],
      heart: ["Canela", "Absoluto de Carvalho", "Âmbar", "Absoluto de Fava Tonka", "Tâmara"],
      base: ["Baunilha", "Praliné", "Benjoim Siam", "Sândalo"],
    },
  },

  "ramon-monegal-matador": {
    image: "assets/perfumes/matador.webp",
    family: "Couro",
    source: "ramonmonegal.com",
    notes: {
      top: ["Cominho", "Pera", "Olíbano"],
      heart: ["Rosa", "Maracujá", "Magnólia", "Jasmim"],
      base: ["Couro", "Coco", "Sândalo", "Almíscar"],
    },
  },

  "sospiro-farsa": {
    image: "assets/perfumes/farsa.webp",
    family: "Amadeirado Oriental",
    perfumer: "Anne-Louise Gautier",
    source: "sospirointernational.com",
    notes: {
      top: ["Açafrão", "Pimenta Rosa", "Rum", "Cassis"],
      heart: ["Âmbar", "Cedro", "Cacau", "Gerânio"],
      base: ["Patchouli", "Oud", "Âmbar Cinzento", "Almíscar"],
    },
  },

  "unique-e-luxury-chocolate-makes-me-happy": {
    image: "assets/perfumes/chocolate-makes-me-happy.webp",
    family: "Gourmand Cítrico",
    source: "uniqueeluxury.com",
    notes: {
      top: ["Cacau", "Chocolate Amargo", "Lavanda", "Tangerina", "Toranja"],
      heart: ["Gengibre", "Benjoim", "Canela", "Labdanum", "Olíbano"],
      base: ["Cacau", "Caramelo", "Âmbar", "Vetiver", "Sândalo", "Almíscar"],
    },
  },

  "bortnikoff-amber-cologne": {
    image: "assets/perfumes/amber-cologne.webp",
    perfumer: "Dmitry Bortnikoff",
    source: "bortnikoff.com",
    notes: {
      top: ["Bergamota", "Limão", "Toranja Branca e Rosa", "Laranja Doce", "Cardamomo", "Frangipani"],
      heart: ["Jasmim Sambac", "Cedro da Virgínia", "Sândalo"],
      base: ["Âmbar Cinzento", "Oud do Sri Lanka", "Oud Bouya", "Baunilha"],
    },
  },

  "bortnikoff-cologne-de-feu": {
    image: "assets/perfumes/cologne-de-feu.webp",
    perfumer: "Dmitry Bortnikoff",
    source: "bortnikoff.com",
    notes: {
      top: ["Laranja Amarga", "Bigarade", "Laranja Sanguínea", "Litsea Cubeba", "Tangerina", "Limão", "Petitgrain"],
      heart: ["Framboesa", "Chá", "Jasmim", "Sorbet de Pêssego"],
      base: ["Cedro", "Sândalo", "Guaiaco", "Crocodile Wood", "Musgo de Carvalho"],
    },
  },

  "bortnikoff-oud-cologne": {
    image: "assets/perfumes/oud-cologne.webp",
    perfumer: "Dmitry Bortnikoff",
    source: "bortnikoff.com",
    notes: {
      top: ["Bergamota", "Toranja Branca", "Laranja Amarga", "Zimbro", "Pimenta Rosa"],
      heart: ["Agulhas de Pinheiro", "Gerânio", "Rosa", "Noz-moscada"],
      base: ["Âmbar Cinzento Branco", "Benjoim do Sião", "Oud Selvagem da Tailândia", "Fava Tonka", "Vetiver"],
    },
  },

  "byredo-black-saffron-absolu": {
    image: "assets/perfumes/black-saffron-absolu.webp",
    family: "Amadeirado · Couro",
    source: "byredo.com",
    notes: {
      top: ["Cassis", "Pimenta", "Açafrão"],
      heart: ["Framboesa", "Absoluto de Rosa", "Orquídea Violeta", "Absoluto de Osmanthus"],
      base: ["Incenso", "Patchouli", "Agarwood", "Couro Negro"],
    },
  },

  "electimuss-black-caviar": {
    image: "assets/perfumes/black-caviar.webp",
    family: "Aromático",
    perfumer: "Marco Genovese",
    source: "electimuss.com",
    notes: {
      top: ["Caviar", "Agarwood", "Cedro"],
      heart: ["Lavanda", "Sálvia", "Alecrim"],
      base: ["Vetiver", "Patchouli", "Musgo de Carvalho"],
    },
  },

  "electimuss-imperium": {
    image: "assets/perfumes/imperium.webp",
    family: "Cítrico Aromático",
    perfumer: "Sofia Bardelli e Marco Genovese",
    source: "electimuss.com",
    notes: {
      top: ["Bergamota", "Coentro"],
      heart: ["Rosa", "Lírio", "Açafrão", "Jasmim", "Neroli", "Tuberosa"],
      base: ["Âmbar", "Almíscar", "Baunilha de Madagascar", "Guaiaco", "Oud", "Patchouli"],
    },
  },

  "houbigant-bois-mystique": {
    image: "assets/perfumes/bois-mystique.webp",
    family: "Amadeirado",
    source: "houbigant-parfum.com",
    notes: {
      top: ["Bergamota", "Davana", "Gengibre"],
      heart: ["Papiro", "Incenso"],
      base: ["Âmbar", "Notas Amadeiradas"],
    },
  },

  "hugo-boss-the-collection-elegant-vetiver": {
    image: "assets/perfumes/elegant-vetiver.webp",
    family: "Amadeirado",
    perfumer: "Sophie Labbé",
    source: "fragrantica.com",
    notes: {
      top: ["Pistache", "Zimbro"],
      heart: ["Vetiver do Haiti", "Óleo de Vetiver de Java"],
      base: ["Cashmeran", "Labdanum"],
    },
  },

  "initio-lift-me-up": {
    image: "assets/perfumes/lift-me-up.webp",
    family: "Floral Ambarado",
    source: "initioparfums.com",
    mainNotes: ["Ylang-Ylang", "Bergamota", "Magnólia", "Almíscar", "Fava Tonka Torrada", "Baunilha"],
  },

  "louis-vuitton-pur-oud": {
    image: "assets/perfumes/pur-oud.webp",
    perfumer: "Jacques Cavallier Belletrud",
    source: "louisvuitton.com",
    mainNotes: ["Oud de Assam", "Ambrettolide", "Helvetolide"],
  },

  "m-micallef-desirtoxic": {
    image: "assets/perfumes/desirtoxic.webp",
    family: "Amadeirado Especiado",
    source: "parfumsmicallef.com",
    notes: {
      top: ["Bergamota", "Cardamomo"],
      heart: ["Canela", "Cassis", "Cannabis"],
      base: ["Patchouli", "Musgo", "Benjoim", "Almíscar"],
    },
  },

  "m-micallef-desirtoxic-l-intense": {
    image: "assets/perfumes/desirtoxic-intense.webp",
    family: "Amadeirado Especiado",
    source: "parfumsmicallef.com",
    notes: {
      top: ["Bergamota", "Açafrão", "Cardamomo", "Limão"],
      heart: ["Menta", "Canela", "Fava Tonka", "Cassis"],
      base: ["Âmbar Cinzento", "Almíscar", "Musgo", "Patchouli", "Benjoim"],
    },
  },

  "memo-paris-palais-bourbon": {
    image: "assets/perfumes/palais-bourbon.webp",
    family: "Especiado Amadeirado",
    perfumer: "Gaël Montero",
    source: "memoparis.com",
    notes: {
      top: ["Pimenta-do-reino", "Cardamomo", "Casca de Canela", "Incenso", "Gerânio"],
      heart: ["Bálsamo do Peru", "Benjoim", "Cisto", "Fava Tonka", "Baunilha"],
      base: ["Sândalo Spicatum", "Patchouli", "Guaiaco", "Vetiver"],
    },
  },

  "mind-games-kingside": {
    image: "assets/perfumes/kingside.webp",
    family: "Ambarado Amadeirado",
    perfumer: "David Apel",
    source: "mindgamesfragrance.com",
    notes: {
      top: ["Pistache Cremoso", "Cardamomo", "Raspas de Toranja"],
      heart: ["Flor de Avelã", "Rum Âmbar", "Pétalas de Peônia"],
      base: ["Fava Tonka", "Leite de Amêndoas", "Bálsamo do Peru"],
    },
  },

  "mind-games-prodigy": {
    image: "assets/perfumes/prodigy.webp",
    family: "Floral Amadeirado",
    perfumer: "Nathalie Benareau",
    source: "mindgamesfragrance.com",
    notes: {
      top: ["Absoluto de Rosa", "Cardamomo", "Bergamota"],
      heart: ["Patchouli", "Café Latte", "Flor de Longoza"],
      base: ["Sândalo", "Baunilha", "Madeiras Loiras"],
    },
  },

  "parfums-d-elmar-elixir-d-amour": {
    image: "assets/perfumes/elixir-damour.webp",
    family: "Oriental",
    source: "parfumsdelmar.com",
    notes: {
      top: ["Açafrão", "Folhas de Figo Verde", "Pimenta Rosa", "Bergamota"],
      heart: ["Framboesa", "Absoluto de Rosa Búlgara", "Guaiaco", "Lírio-do-vale", "Jasmim d'Água"],
      base: ["Baunilha", "Âmbar", "Amyris", "Caramelo Queimado", "Oud", "Labdanum", "Patchouli", "Almíscar", "Absoluto de Cisto"],
    },
  },

  "parfums-d-elmar-dalika": {
    image: "assets/perfumes/dalika.webp",
    family: "Gourmand Oriental",
    source: "parfumsdelmar.com",
    notes: {
      top: ["Pêssego", "Fava Tonka", "Nozes", "Caramelo"],
      heart: ["Praliné", "Baunilha do Haiti", "Patchouli da Indonésia", "Amêndoa"],
      base: ["Sândalo Australiano", "Vetiver de Java", "Almíscar", "Cacau", "Chocolate Amargo", "Rum"],
    },
  },

  "rosendo-mateu-10": {
    image: "assets/perfumes/rosendo-mateu-10.webp",
    family: "Almiscarado",
    source: "rosendomateu.com",
    notes: {
      top: ["Aldeídos", "Notas Florais"],
      heart: ["Almíscares Modernos", "Acorde Âmbar-Amadeirado"],
      base: ["Baunilha", "Âmbar", "Notas Amadeiradas"],
    },
  },

  "sora-dora-gladiator": {
    image: "assets/perfumes/gladiator.webp",
    family: "Fougère",
    source: "soradora.com",
    notes: {
      top: ["Toranja", "Abacaxi", "Bergamota Italiana", "Bigarade"],
      heart: ["Gerânio do Egito", "Hortelã-pimenta", "Âmbar Cinzento"],
      base: ["Patchouli da Indonésia", "Vetiver do Haiti"],
    },
  },

  "tomavicci-silk-caviar": {
    image: "assets/perfumes/silk-caviar.webp",
    source: "tomavicci.com",
    notes: {
      top: ["Bergamota Italiana", "Cardamomo Verde", "Canela do Ceilão", "Gengibre", "Zimbro", "Cipreste Mediterrâneo"],
      heart: ["Absoluto de Jasmim Sambac", "Neroli Tunisiano", "Absoluto de Rosa Turca", "Pimenta-do-reino"],
      base: ["Cedro Envelhecido", "Sândalo", "Vetiver do Haiti", "Labdanum", "Resina de Estoraque", "Musgo de Carvalho", "Almíscar", "Âmbar"],
    },
  },
};

// A planilha passou a grafar "Histoires des Parfums"; mantém o vínculo com o 1740.
FRAGRANCES["histoires-des-parfums-1740"] = FRAGRANCES["histoires-de-parfums-1740"];
