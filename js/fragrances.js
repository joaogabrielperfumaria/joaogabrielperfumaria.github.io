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

  "boadicea-the-victorious-azrak": {
    image: "assets/perfumes/azrak.webp",
    source: "boadiceaperfume.com",
    notes: {
      top: ["Limão", "Abacaxi", "Bergamota", "Cassis", "Cardamomo", "Canela"],
      heart: ["Violeta", "Rosa", "Especiarias", "Lírio-do-vale", "Folha de Violeta", "Jasmim"],
      base: ["Âmbar", "Almíscar", "Sândalo", "Notas Amadeiradas", "Oud", "Cedro"],
    },
  },

  "boadicea-the-victorious-bravery": {
    image: "assets/perfumes/bravery.webp",
    source: "boadiceaperfume.com",
    notes: {
      top: ["Pimenta-do-reino", "Açafrão", "Lavanda"],
      heart: ["Jasmim", "Lírio", "Rosa", "Flor de Laranjeira"],
      base: ["Âmbar", "Almíscar", "Baunilha", "Sândalo", "Musgo de Carvalho"],
    },
  },

  "boadicea-the-victorious-defender": {
    image: "assets/perfumes/defender.webp",
    source: "boadiceaperfume.com",
    notes: {
      top: ["Gengibre", "Toranja", "Mel", "Conhaque", "Alcaçuz", "Frutas Vermelhas"],
      heart: ["Flor de Laranjeira", "Resina de Mirra", "Jasmim Noturno", "Feno"],
      base: ["Almíscares", "Couro", "Âmbar Vermelho", "Bálsamo do Peru", "Benjoim", "Fava Tonka", "Labdanum"],
    },
  },

  "boadicea-the-victorious-glorious": {
    image: "assets/perfumes/glorious.webp",
    source: "boadiceaperfume.com",
    notes: {
      top: ["Abacaxi", "Framboesa", "Maçã", "Cardamomo", "Cassis"],
      heart: ["Jasmim", "Noz-moscada", "Rosa", "Elemi"],
      base: ["Âmbar", "Cedro", "Almíscar", "Patchouli", "Sândalo", "Guaiaco", "Musgo", "Baunilha"],
    },
  },

  "boadicea-the-victorious-rebellious": {
    image: "assets/perfumes/rebellious.webp",
    source: "boadiceaperfume.com",
    notes: {
      top: ["Bergamota", "Canela", "Açafrão"],
      heart: ["Violeta", "Labdanum", "Rosa"],
      base: ["Patchouli", "Sândalo", "Camurça", "Almíscar"],
    },
  },

  "boadicea-the-victorious-royal-sapphires-collection": {
    image: "assets/perfumes/royal-sapphires-set.webp",
    source: "boadiceaperfume.com",
    contents: ["Blue Sapphire", "Oud Sapphire", "Green Sapphire", "Aqua Sapphire"],
  },

  "boadicea-the-victorious-the-amber-gift-set": {
    image: "assets/perfumes/ambery-set.webp",
    source: "boadiceaperfume.com",
    contents: ["Nemer", "Hasu", "Defender", "Blue Sapphire"],
  },

  "boadicea-the-victorious-the-leather-gift-set": {
    image: "assets/perfumes/leather-set.webp",
    source: "boadiceaperfume.com",
    contents: ["Monarch", "Opal", "Oud Sapphire", "Complex"],
  },

  "boadicea-the-victorious-the-woody-gift-set": {
    image: "assets/perfumes/woody-set.webp",
    source: "boadiceaperfume.com",
    contents: ["Imperial", "Angelic", "Tobacco Sapphire", "Green Sapphire"],
  },

  "byredo-blanche-absolu": {
    image: "assets/perfumes/blanche-absolu.webp",
    source: "byredo.com",
    notes: {
      top: ["Aldeídos", "Pimenta-do-reino", "Neroli"],
      heart: ["Absoluto de Rosa", "Violeta", "Jasmim"],
      base: ["Cashmeran", "Almíscares", "Ambroxan", "Madeira de Cashmere"],
    },
  },

  "christian-provenzano-ambre-d-or": {
    image: "assets/perfumes/ambre-d-or.webp",
    perfumer: "Christian Provenzano",
    source: "fragrantica.com",
    notes: {
      top: ["Caipirinha", "Limão", "Maçã", "Tangerina", "Pimenta Rosa", "Sálvia"],
      heart: ["Lentisco", "Lírio", "Jasmim", "Rosa"],
      base: ["Âmbar", "Almíscar", "Sândalo", "Patchouli", "Vetiver", "Baunilha"],
    },
  },

  "christian-provenzano-colosseum": {
    image: "assets/perfumes/colosseum.webp",
    perfumer: "Christian Provenzano",
    source: "fragrantica.com",
    notes: {
      top: ["Limão", "Laranja", "Zimbro", "Pimenta Rosa", "Toranja", "Lavanda", "Cipreste"],
      heart: ["Folha de Violeta", "Couro", "Coentro", "Tomilho", "Jasmim"],
      base: ["Almíscar", "Benjoim", "Musgo", "Vetiver", "Âmbar", "Cypriol"],
    },
  },

  "christian-provenzano-cuir-elite": {
    image: "assets/perfumes/cuir-elite.webp",
    perfumer: "Christian Provenzano",
    source: "fragrantica.com",
    notes: {
      top: ["Conhaque", "Coentro", "Cardamomo", "Açafrão", "Tomilho"],
      heart: ["Ameixa", "Cedro", "Violeta", "Rosa", "Íris", "Davana"],
      base: ["Couro", "Baunilha", "Vetiver", "Âmbar", "Cypriol", "Sândalo", "Almíscar"],
    },
  },

  "christian-provenzano-inspirato": {
    image: "assets/perfumes/inspirato.webp",
    perfumer: "Christian Provenzano",
    source: "fragrantica.com",
    notes: {
      top: ["Lavanda", "Bergamota", "Coentro", "Cardamomo", "Canela", "Pimenta Rosa"],
      heart: ["Almíscar Cashmere", "Notas Aquáticas", "Íris", "Jasmim"],
      base: ["Musgo de Carvalho", "Almíscar", "Sândalo", "Âmbar", "Fava Tonka", "Labdanum", "Madeira Branca"],
    },
  },

  "christian-provenzano-mangostino": {
    image: "assets/perfumes/mangostino.webp",
    family: "Oriental Amadeirado",
    perfumer: "Christian Provenzano",
    source: "fragrantica.com",
    notes: {
      top: ["Framboesa", "Mangostão", "Abacaxi", "Pimenta"],
      heart: ["Manga", "Rosa Marroquina", "Gerânio"],
      base: ["Oud", "Oud do Camboja", "Couro", "Guaiaco", "Âmbar Cinzento", "Patchouli", "Baunilha", "Almíscar"],
    },
  },

  "christian-provenzano-massimo": {
    image: "assets/perfumes/massimo.webp",
    perfumer: "Christian Provenzano",
    source: "fragrantica.com",
    notes: {
      top: ["Bergamota", "Cardamomo", "Canela", "Gengibre"],
      heart: ["Pimenta Rosa", "Couro", "Pimenta-do-reino", "Pimenta-da-jamaica"],
      base: ["Sândalo", "Almíscar", "Âmbar", "Cedro", "Labdanum", "Olíbano", "Vetiver", "Estoraque", "Fava Tonka", "Benjoim"],
    },
  },

  "christian-provenzano-onda-de-mar": {
    image: "assets/perfumes/onda-de-mar.webp",
    perfumer: "Christian Provenzano",
    source: "fragrantica.com",
    notes: {
      top: ["Alga Marinha", "Abacaxi", "Laranja Amarga", "Lavanda", "Toranja"],
      heart: ["Notas Marinhas", "Hedione", "Rosa", "Davana"],
      base: ["Almíscar", "Sândalo", "Musgo", "Âmbar Cristal", "Açúcar Caramelizado"],
    },
  },

  "christian-provenzano-patchouli-noir": {
    image: "assets/perfumes/patchouli-noir.webp",
    perfumer: "Christian Provenzano",
    source: "fragrantica.com",
    notes: {
      top: ["Frutas Vermelhas", "Pimenta Rosa", "Bergamota"],
      heart: ["Osmanthus", "Íris", "Rosa Turca", "Jasmim Sambac"],
      base: ["Patchouli", "Labdanum"],
    },
  },

  "christian-provenzano-rocca": {
    image: "assets/perfumes/rocca.webp",
    perfumer: "Christian Provenzano",
    source: "fragrantica.com",
    notes: {
      top: ["Framboesa", "Açafrão", "Laranja"],
      heart: ["Caramelo", "Peônia", "Rosa de Maio"],
      base: ["Âmbar", "Almíscar", "Baunilha", "Musgo"],
    },
  },

  "christian-provenzano-spezia": {
    image: "assets/perfumes/spezia.webp",
    perfumer: "Christian Provenzano",
    source: "fragrantica.com",
    notes: {
      top: ["Pimenta Rosa", "Pimenta Branca", "Bergamota", "Angélica", "Cipreste"],
      heart: ["Manteiga", "Íris", "Noz-moscada", "Neroli", "Cravo", "Jasmim Egípcio"],
      base: ["Madeiras Loiras", "Âmbar", "Almíscar", "Musgo", "Cedro", "Patchouli", "Vetiver"],
    },
  },

  "creed-erolfa": {
    image: "assets/perfumes/erolfa.webp",
    family: "Fougère Aromático · Marinho",
    source: "creedboutique.com",
    notes: {
      top: ["Limão", "Lima", "Tangerina", "Manjericão", "Bergamota", "Gengibre"],
      heart: ["Acorde de Violeta", "Notas Florais Frescas", "Lavanda", "Coentro", "Melancia", "Pepino", "Jasmim Indiano"],
      base: ["Sândalo", "Almíscar", "Madeiras Secas"],
    },
  },

  "creed-fragaria": {
    image: "assets/perfumes/fragaria.webp",
    family: "Floral Frutado",
    source: "creedfragrances.co.uk",
    notes: {
      top: ["Bergamota", "Pimenta Timur", "Pimenta Rosa", "Tangerina"],
      heart: ["Morango", "Manteiga de Íris", "Acorde de Violeta"],
      base: ["Patchouli", "Bálsamo de Abeto", "Acorde de Praliné Rosa", "Vetiver", "Cedro"],
    },
  },

  "creed-love-in-black": {
    image: "assets/perfumes/love-in-black.webp",
    family: "Floral · Violeta · Gourmand",
    source: "creedboutique.com",
    notes: {
      top: ["Folhas de Violeta", "Framboesa", "Cranberry"],
      heart: ["Rosa", "Acorde de Violeta", "Manteiga de Íris", "Jasmim"],
      base: ["Cedro", "Almíscar", "Notas de Couro"],
    },
  },

  "creed-original-santal": {
    image: "assets/perfumes/original-santal.webp",
    family: "Fougère Aromático · Ambarado",
    source: "creedboutique.com",
    notes: {
      top: ["Gengibre", "Zimbro", "Bergamota", "Alecrim", "Coentro", "Tangerina"],
      heart: ["Lavanda", "Gerânio", "Flor de Laranjeira", "Sândalo"],
      base: ["Musgo de Carvalho", "Almíscar", "Fava Tonka", "Cedro"],
    },
  },

  "creed-royal-princess-oud": {
    image: "assets/perfumes/royal-princess-oud.webp",
    family: "Floral Ambarado",
    source: "creedboutique.com",
    notes: {
      top: ["Acorde de Framboesa", "Bergamota", "Cardamomo"],
      heart: ["Rosa Damascena", "Angélica", "Acorde de Pétalas de Jasmim"],
      base: ["Oud", "Patchouli", "Íris", "Labdanum"],
    },
  },

  "jacques-zolty-severo": {
    image: "assets/perfumes/severo.webp",
    family: "Oriental Especiado",
    source: "fragrantica.com",
    notes: {
      top: ["Coca-Cola", "Rum", "Limão"],
      heart: ["Pimenta-do-reino", "Davana", "Bétula"],
      base: ["Baunilha", "Almíscar Branco", "Âmbar"],
    },
  },

  "mes-bisous-out-of-reach": {
    image: "assets/perfumes/out-of-reach.webp",
    family: "Amadeirado Aquático",
    perfumer: "Özge Erdoğmuş Altınel",
    source: "fragrantica.com",
    notes: {
      top: ["Gelato de Pera", "Limão", "Lima", "Gengibre", "Tangerina", "Pimenta Rosa"],
      heart: ["Notas Aquáticas", "Acorde de Gelo", "Sal Marinho", "Frésia"],
      base: ["Absoluto de Baunilha", "Almíscar", "Madeira de Cashmere", "Sândalo", "Musgo", "Âmbar"],
    },
  },

  "mind-games-blockade": {
    image: "assets/perfumes/blockade.webp",
    perfumer: "Christelle Laprade",
    source: "mindgamesfragrance.com",
    notes: {
      top: ["Casca de Manga", "Pimenta Rosa", "Folha de Tomate", "Bergamota"],
      heart: ["Lavanda", "Flor de Manga", "Cíclame", "Anis-estrelado"],
      base: ["Couro Aveludado", "Patchouli", "Ambrostar", "Oud"],
    },
  },

  "mind-games-checkmate": {
    image: "assets/perfumes/checkmate.webp",
    family: "Chipre",
    perfumer: "David Apel",
    source: "mindgamesfragrance.com",
    notes: {
      top: ["Davana", "Champanhe", "Groselha Vermelha"],
      heart: ["Rosa de Maio", "Rosa Búlgara", "Magnólia", "Rosa Centifolia"],
      base: ["Tabaco Bourbon", "Folhas de Patchouli", "Musgo de Árvore"],
    },
  },

  "mind-games-french-defense": {
    image: "assets/perfumes/french-defense.webp",
    family: "Frutado",
    perfumer: "Christelle Laprade",
    source: "mindgamesfragrance.com",
    notes: {
      top: ["Cereja", "Folhas de Violeta", "Camomila"],
      heart: ["Gerânio de Madagascar", "Absoluto de Rosa", "Mimosa"],
      base: ["Âmbar", "Cedro", "Madeira Loira"],
    },
  },

  "mind-games-grand-master": {
    image: "assets/perfumes/grand-master.webp",
    family: "Ambarado",
    perfumer: "Alexandra Carlin",
    source: "mindgamesfragrance.com",
    notes: {
      top: ["Cassis", "Água de Rosas", "Peônia"],
      heart: ["Rosa Centifolia", "Café Kona", "Violeta Selvagem"],
      base: ["Mirra", "Incenso", "Panettone", "Ébano"],
    },
  },

  "mind-games-the-forward": {
    image: "assets/perfumes/the-forward.webp",
    family: "Floral Gourmand",
    perfumer: "Nathalie Benareau",
    source: "mindgamesfragrance.com",
    notes: {
      top: ["Limão", "Tangerina de Madagascar", "Pomelo"],
      heart: ["Jasmim Sambac", "Fava Tonka", "Acorde Salgado"],
      base: ["Baunilha de Madagascar", "Sândalo", "Cashmeran"],
    },
  },

  "moresque-oro": {
    image: "assets/perfumes/oro.webp",
    family: "Oriental",
    source: "fragrantica.com",
    notes: {
      top: ["Estragão", "Artemísia", "Angélica"],
      heart: ["Estoraque", "Lírio Casablanca", "Frangipani"],
      base: ["Labdanum", "Incenso", "Mirra", "Almíscar Branco", "Ambreta"],
    },
  },

  "moresque-oroluna": {
    image: "assets/perfumes/oroluna.webp",
    family: "Oriental Amadeirado",
    perfumer: "Andrea Casotti",
    source: "moresqueparfumshop.com",
    notes: {
      top: ["Cardamomo", "Pimenta Rosa", "Toranja"],
      heart: ["Rosa Turca", "Gerânio", "Cedro", "Patchouli"],
      base: ["Incenso", "Oud", "Sândalo", "Musgo de Carvalho", "Labdanum", "Almíscares"],
    },
  },

  "ramon-monegal-flamenco": {
    image: "assets/perfumes/flamenco.webp",
    source: "monegalperfumes.com",
    notes: {
      top: ["Framboesa", "Violeta", "Íris"],
      heart: ["Jasmim", "Pau-rosa", "Rosa Vermelha"],
      base: ["Almíscar", "Amberwood", "Cedro"],
    },
  },

  "bdk-parfums-oud-abramad": {
    image: "assets/perfumes/oud-abramad.webp",
    source: "bdkparfums.com",
    notes: {
      top: ["Açafrão", "Gengibre"],
      heart: ["Rosa da Turquia", "Cominho"],
      base: ["Oud", "Guaiaco", "Cisto", "Incenso", "Patchouli", "Castóreo", "Orcanox"],
    },
  },

  "bdk-parfums-tubereuse-imperiale": {
    image: "assets/perfumes/tubereuse-imperiale.webp",
    source: "bdkparfums.com",
    notes: {
      top: ["Pimenta-rosa", "Gerânio do Egito"],
      heart: ["Tuberosa da Índia", "Ylang-Ylang de Comores", "Jasmim Sambac", "Íris", "Jasmim do Egito"],
      base: ["Cashmeran", "Sândalo", "Incenso da Somália", "Baunilha de Madagascar", "Patchouli de Singapura", "Benjoim de Sumatra", "Cipreste"],
    },
  },

  "bdk-parfums-vanille-caviar": {
    image: "assets/perfumes/vanille-caviar.webp",
    source: "bdkparfums.com",
    notes: {
      top: ["Broto de Cassis", "Cardamomo", "Cálamo"],
      heart: ["Caviar de Baunilha", "Fava de Cacau", "Osmanthus"],
      base: ["Baunilha de Madagascar", "Bálsamo do Peru", "Labdanum"],
    },
  },

  "bdk-parfums-vanille-leather": {
    image: "assets/perfumes/vanille-leather.webp",
    source: "bdkparfums.com",
    notes: {
      top: ["Pimenta-rosa", "Acorde de Violeta"],
      heart: ["Absoluto de Tuberosa da Índia", "Absoluto de Jasmim do Egito", "Absoluto de Flor de Laranjeira"],
      base: ["Baunilha de Madagascar", "Patchouli da Indonésia", "Carvalho", "Acorde de Couro", "Íris", "Benjoim"],
    },
  },

  "bortnikoff-cuir-de-cerise": {
    image: "assets/perfumes/cuir-de-cerise.webp",
    source: "bortnikoff.com",
    notes: {
      top: ["Cereja Ácida", "Açafrão"],
      heart: ["Couro", "Azeitona", "Osmanthus", "Damasco"],
      base: ["Oud", "Nagarmotha"],
    },
  },

  "bortnikoff-sambac-rouge": {
    image: "assets/perfumes/sambac-rouge.webp",
    source: "bortnikoff.com",
    notes: {
      top: ["Cereja", "Pimenta-rosa", "Gengibre"],
      heart: ["Jasmim Sambac", "Âmbar"],
      base: ["Almíscar", "Framboesa", "Sândalo"],
    },
  },

  "casamorati-bouquet-ideale": {
    image: "assets/perfumes/bouquet-ideale.webp",
    source: "xerjoff.com",
    notes: {
      top: ["Canela", "Noz-moscada"],
      heart: ["Cedro", "Guaiaco"],
      base: ["Cumarina", "Almíscar", "Flores de Tabaco", "Baunilha"],
    },
  },

  "casamorati-fiero": {
    image: "assets/perfumes/fiero.webp",
    source: "xerjoff.com",
    notes: {
      top: ["Limão da Calábria", "Capim-limão", "Bergamota", "Laranja Sanguínea"],
      heart: ["Hortelã", "Neroli"],
      base: ["Cumarina", "Sândalo de Mysore", "Patchouli", "Vetiver"],
    },
  },

  "casamorati-tempio-d-acqua": {
    image: "assets/perfumes/tempio-d-acqua.webp",
    source: "xerjoff.com",
    notes: {
      top: ["Bergamota", "Pêssego", "Tangerina"],
      heart: ["Óleo de Cisto", "Funcho", "Mahonial"],
      base: ["Baunilha", "Mirra", "Ambroxan"],
    },
  },

  "d-orsay-dandy-or-not-g-a": {
    image: "assets/perfumes/dandy-or-not-ga.webp",
    family: "Amadeirado",
    perfumer: "Sidonie Lancesseur",
    source: "dorsay.com",
    notes: {
      top: ["Cardamomo", "Toranja"],
      heart: ["Chá Preto", "Flor de Laranjeira"],
      base: ["Acorde de Couro", "Patchouli"],
    },
  },

  "dior-balade-sauvage": {
    image: "assets/perfumes/balade-sauvage.webp",
    family: "Amadeirado Cítrico",
    source: "fragrantica.com",
    notes: {
      top: ["Bergamota", "Notas Ozônicas", "Petitgrain"],
      heart: ["Figueira", "Figo", "Notas Solares", "Flor de Laranjeira", "Hedione", "Notas Marinhas", "Rosa", "Pêssego"],
      base: ["Seixos", "Amberwood", "Labdanum", "Baunilha"],
    },
  },

  "dior-purple-oud": {
    image: "assets/perfumes/purple-oud.webp",
    family: "Oriental Amadeirado",
    source: "fragrantica.com",
    mainNotes: ["Laranja", "Oud", "Pimenta Rosa", "Açafrão"],
  },

  "dior-santal-noir": {
    image: "assets/perfumes/santal-noir.webp",
  },

  "hind-al-oud-oud-zayed": {
    image: "assets/perfumes/oud-zayed.webp",
    family: "Ambarado Amadeirado",
    source: "fragrantica.com",
    mainNotes: ["Cashmeran", "Âmbar", "Oud"],
  },

  "lorenzo-pazzaglia-coffeee-passion": {
    image: "assets/perfumes/coffeee-passion.webp",
    family: "Gourmand",
    perfumer: "Lorenzo Pazzaglia",
    source: "fragrantica.com",
    notes: {
      top: ["Coco", "Damasco", "Avelã", "Canela"],
      heart: ["Café", "Leite de Coco", "Caramelo", "Chocolate", "Fava Tonka", "Heliotrópio"],
      base: ["Açúcar", "Cedro", "Baunilha", "Benjoim", "Almíscar Branco"],
    },
  },

  "lorenzo-pazzaglia-pink-milk": {
    image: "assets/perfumes/pink-milk.webp",
    family: "Floral Gourmand",
    perfumer: "Lorenzo Pazzaglia",
    source: "fragrantica.com",
    notes: {
      top: ["Rosa", "Toranja Rosa", "Pimenta Rosa", "Bergamota", "Laranja Doce", "Limão", "Canela"],
      heart: ["Rosa Damascena", "Rosa de Grasse", "Lichia", "Peônia", "Framboesa", "Coco", "Heliotrópio", "Amêndoa Doce", "Biscoito"],
      base: ["Leite", "Baunilha", "Sorvete", "Fior di Latte", "Almíscar Branco", "Frutas Vermelhas", "Açúcar", "Sândalo", "Fava Tonka", "Cumarina", "Vetiver"],
    },
  },

  "lorenzo-pazzaglia-summer-hammer": {
    image: "assets/perfumes/summer-hammer.webp",
    family: "Frutado Tropical",
    perfumer: "Lorenzo Pazzaglia",
    source: "fragrantica.com",
    notes: {
      top: ["Manga", "Abacaxi", "Coco", "Bergamota", "Rum Branco"],
      heart: ["Leite de Coco", "Flores Brancas", "Notas Marinhas"],
      base: ["Almíscar", "Sândalo", "Âmbar", "Vetiver"],
    },
  },

  "miller-harris-scherzo": {
    image: "assets/perfumes/scherzo.webp",
    family: "Floral · Âmbar",
    perfumer: "Mathieu Nardin",
    source: "millerharris.com",
    notes: {
      top: ["Tangerina", "Davana"],
      heart: ["Olíbano", "Narciso", "Pittosporum", "Rosa Escura", "Peônia"],
      base: ["Patchouli", "Baunilha", "Oud", "Nota Doce"],
    },
  },

  "nasomatto-baraonda": {
    image: "assets/perfumes/baraonda.webp",
    family: "Amadeirado",
    perfumer: "Alessandro Gualtieri",
    source: "fragrantica.com",
    mainNotes: ["Uísque", "Notas Amadeiradas", "Ambrette", "Rosa", "Ambroxan", "Almíscar"],
  },

  "nasomatto-black-afgano": {
    image: "assets/perfumes/black-afgano.webp",
    family: "Ambarado Amadeirado",
    perfumer: "Alessandro Gualtieri",
    source: "fragrantica.com",
    notes: {
      top: ["Cannabis", "Notas Verdes", "Davana", "Açafrão", "Tomilho"],
      heart: ["Resinas", "Notas Amadeiradas", "Tabaco", "Café", "Canela", "Framboesa", "Violeta"],
      base: ["Oud", "Incenso", "Âmbar", "Notas Animálicas", "Guaiaco", "Almíscar", "Cedro", "Fava Tonka", "Bálsamo de Gurjun", "Ambroxan", "Baunilha"],
    },
  },

  "nasomatto-blamage": {
    image: "assets/perfumes/blamage.webp",
    family: "Couro",
    perfumer: "Alessandro Gualtieri",
    source: "fragrantica.com",
    mainNotes: ["Bétula", "Almíscar", "Madeiras Brancas", "Couro"],
  },

  "nasomatto-duro": {
    image: "assets/perfumes/duro.webp",
    family: "Amadeirado Couro",
    perfumer: "Alessandro Gualtieri",
    source: "fragrantica.com",
    mainNotes: ["Notas Amadeiradas", "Couro", "Especiarias"],
  },

  "nasomatto-nudiflorum": {
    image: "assets/perfumes/nudiflorum.webp",
    family: "Animálico Frutado",
    perfumer: "Alessandro Gualtieri",
    source: "fragrantica.com",
    notes: {
      top: ["Ruibarbo"],
      heart: ["Framboesa", "Salicilato de Amila", "Rosa"],
      base: ["Couro", "Notas Animálicas", "Musgo de Carvalho", "Cedro"],
    },
  },

  "nasomatto-pardon": {
    image: "assets/perfumes/pardon.webp",
    source: "nasomatto.com",
  },

  "nasomatto-sadonaso": {
    image: "assets/perfumes/sadonaso.webp",
    family: "Almiscarado",
    perfumer: "Alessandro Gualtieri",
    source: "fragrantica.com",
    notes: {
      top: ["Café"],
      heart: ["Almíscar", "Tabaco", "Sândalo"],
      base: ["Baunilha", "Notas Animálicas", "Âmbar", "Fava Tonka"],
    },
  },

  "orto-parisi-boccanera": {
    image: "assets/perfumes/boccanera.webp",
    family: "Especiado Gourmand",
    perfumer: "Alessandro Gualtieri",
    source: "fragrantica.com",
    notes: {
      top: ["Pimenta Chili", "Pimenta Preta", "Fava de Cacau", "Gengibre"],
      heart: ["Jasmim"],
      base: ["Chocolate", "Almíscar", "Couro", "Notas Animálicas", "Patchouli", "Cedro", "Baunilha", "Açúcar"],
    },
  },

  "orto-parisi-brutus": {
    image: "assets/perfumes/brutus.webp",
    family: "Amadeirado Chipre",
    perfumer: "Alessandro Gualtieri",
    source: "fragrantica.com",
    notes: {
      top: ["Bergamota", "Tangerina"],
      heart: ["Lavanda", "Gerânio", "Rosa"],
      base: ["Patchouli", "Cedro", "Almíscar", "Musgo de Carvalho", "Âmbar", "Labdanum"],
    },
  },

  "orto-parisi-megamare": {
    image: "assets/perfumes/megamare.webp",
    source: "ortoparisi.com",
  },

  "orto-parisi-risvelium": {
    image: "assets/perfumes/risvelium.webp",
    family: "Cítrico Almiscarado",
    perfumer: "Alessandro Gualtieri",
    source: "fragrantica.com",
    notes: {
      top: ["Toranja", "Bergamota"],
      heart: ["Cassis", "Abacaxi"],
      base: ["Almíscar", "Ambroxan", "Âmbar"],
    },
  },

  "orto-parisi-seminalis": {
    image: "assets/perfumes/seminalis.webp",
    source: "ortoparisi.com",
  },

  "orto-parisi-stercus": {
    image: "assets/perfumes/stercus.webp",
    family: "Oriental Amadeirado",
    perfumer: "Alessandro Gualtieri",
    source: "fragrantica.com",
    notes: {
      top: ["Amêndoa", "Aldeídos", "Anis"],
      heart: ["Rosa"],
      base: ["Oud", "Almíscar", "Couro", "Baunilha", "Cedro", "Heliotrópio"],
    },
  },

  "orto-parisi-terroni": {
    image: "assets/perfumes/terroni.webp",
    family: "Amadeirado Ambarado",
    perfumer: "Alessandro Gualtieri",
    source: "fragrantica.com",
    notes: {
      top: ["Framboesa"],
      heart: ["Bétula", "Âmbar", "Benjoim"],
      base: ["Guaiaco", "Vetiver", "Cedro", "Almíscar", "Musgo", "Patchouli", "Fava Tonka", "Baunilha"],
    },
  },

  "perris-monte-carlo-oud-imperial": {
    image: "assets/perfumes/oud-imperial.webp",
    source: "perrismontecarlo.com",
    mainNotes: ["Oud", "Incenso"],
  },

  "sasva-forbidden-words-alfaaz-e-mamnooah": {
    image: "assets/perfumes/forbidden-words.webp",
  },

  "sasva-forbidden-words-bombay-gourmand": {
    image: "assets/perfumes/bombay-gourmand.webp",
    family: "Amadeirado Gourmand",
    source: "fragrantica.com",
    notes: {
      top: ["Rosa", "Flor de Amendoeira", "Laranja Doce"],
      heart: ["Oud", "Caramelo", "Cypriol", "Davana"],
      base: ["Baunilha", "Patchouli", "Labdanum", "Cedro"],
    },
  },

  "sasva-fruit-du-paradis-phal-e-jannat": {
    image: "assets/perfumes/fruit-du-paradis.webp",
    family: "Frutado Amadeirado",
    source: "fragrantica.com",
    notes: {
      top: ["Laranja Doce", "Lima"],
      heart: ["Manga", "Romã", "Jasmim"],
      base: ["Sândalo", "Vetiver", "Benjoim"],
    },
  },

  "sasva-saaqi": {
    image: "assets/perfumes/saaqi.webp",
    family: "Ambarado Gourmand",
    source: "fragrantica.com",
    notes: {
      top: ["Vinho Tinto", "Amêndoa", "Pimenta Preta"],
      heart: ["Tabaco", "Fumaça", "Cedro"],
      base: ["Baunilha", "Oud", "Caramelo", "Benjoim", "Almíscar"],
    },
  },

  "xerjoff-avanguardia": {
    image: "assets/perfumes/avanguardia.webp",
    source: "xerjoff.com",
    notes: {
      top: ["Tangerina", "Davana", "Cereja"],
      heart: ["Violeta Negra", "Rosa Geraniol", "Óleo Fracionado de Patchouli"],
      base: ["Fava Tonka", "Estoraque", "Olíbano"],
    },
  },

  "xerjoff-decas": {
    image: "assets/perfumes/decas.webp",
    source: "xerjoff.com",
    notes: {
      top: ["Tangerina Brasileira", "Tuberosa", "Tabaco"],
      heart: ["Benjoim", "Opoponax", "Íris da Toscana"],
      base: ["Almíscar", "Bálsamo de Tolu", "Baunilha Bourbon"],
    },
  },

  "xerjoff-erba-gold": {
    image: "assets/perfumes/erba-gold.webp",
    source: "xerjoff.com",
    notes: {
      top: ["Limão de Amalfi", "Laranja Brasileira", "Bergamota da Calábria", "Gengibre"],
      heart: ["Cravo", "Maçã Verde", "Cardamomo da Guatemala", "Melão", "Pera"],
      base: ["Âmbar", "Baunilha de Madagascar", "Almíscar", "Notas Amadeiradas"],
    },
  },

  "xerjoff-erba-pura": {
    image: "assets/perfumes/erba-pura.webp",
    source: "xerjoff.com",
    notes: {
      top: ["Limão", "Bergamota da Calábria", "Laranja da Sicília"],
      heart: ["Frutas Mediterrâneas"],
      base: ["Âmbar", "Fava de Baunilha de Madagascar", "Almíscar Branco"],
    },
  },

  "xerjoff-fierezza": {
    image: "assets/perfumes/fierezza.webp",
    source: "xerjoff.com",
    notes: {
      top: ["Pimenta-rosa", "Davana", "Pimenta de Sichuan", "Incenso"],
      heart: ["Gerânio", "Nota Marinha", "Ambreta", "Frangipani"],
      base: ["Âmbar", "Mirra", "Camurça"],
    },
  },

  "xerjoff-gibeon": {
    image: "assets/perfumes/gibeon.webp",
    source: "xerjoff.com",
    notes: {
      top: ["Neroli", "Canela do Ceilão"],
      heart: ["Rosa da Bulgária", "Patchouli de Singapura", "Íris da Toscana"],
      base: ["Sândalo Australiano", "Cedro", "Almíscar", "Baunilha de Madagascar", "Fava Tonka"],
    },
  },

  "xerjoff-louis-xv-1722-rose": {
    image: "assets/perfumes/louis-xv-rose.webp",
    source: "xerjoff.com",
    notes: {
      top: ["Cassis", "Framboesa", "Pera"],
      heart: ["Gerânio", "Cedro", "Rosa"],
      base: ["Almíscar", "Baunilha", "Amyris"],
    },
  },

  "xerjoff-naxos": {
    image: "assets/perfumes/naxos.webp",
    source: "xerjoff.com",
    notes: {
      top: ["Limão", "Bergamota", "Lavanda", "Incenso de Omã"],
      heart: ["Jasmim Sambac", "Mel", "Canela", "Cashmere"],
      base: ["Baunilha", "Folha de Tabaco", "Fava Tonka"],
    },
  },

  "xerjoff-nio": {
    image: "assets/perfumes/nio.webp",
    source: "xerjoff.com",
    notes: {
      top: ["Bergamota", "Pimenta-rosa", "Cardamomo", "Noz-moscada", "Neroli da Tunísia", "Rosa"],
      heart: ["Folhas Verdes", "Jasmim"],
      base: ["Âmbar", "Cedro", "Guaiaco", "Vetiver do Haiti"],
    },
  },

  "xerjoff-perseveranza": {
    image: "assets/perfumes/perseveranza.webp",
    source: "xerjoff.com",
    notes: {
      top: ["Gengibre", "Cidra", "Pimenta-da-jamaica"],
      heart: ["Botão de Cravo", "Vetiver", "Elemi"],
      base: ["Fava Tonka", "Estoraque", "Óleo de Cisto"],
    },
  },

  "xerjoff-renaissance": {
    image: "assets/perfumes/renaissance.webp",
    source: "xerjoff.com",
    notes: {
      top: ["Tangerina", "Limão", "Bergamota da Calábria", "Bigarade", "Petitgrain"],
      heart: ["Hortelã", "Lírio-do-vale", "Rosa da Bulgária"],
      base: ["Almíscar", "Cedro", "Âmbar", "Patchouli"],
    },
  },

  "xerjoff-sketchbook-p-33-blank-page": {
    image: "assets/perfumes/p33-blank-page.webp",
    source: "xerjoff.com",
    notes: {
      top: ["Maçã", "Bergamota", "Toranja", "Pimenta-rosa"],
      heart: ["Canela", "Íris", "Cipreste"],
      base: ["Âmbar", "Cedro", "Almíscar"],
    },
  },

  "xerjoff-torino21": {
    image: "assets/perfumes/torino21.webp",
    family: "Aromático",
    source: "fragrantica.com",
    notes: {
      top: ["Menta", "Limão", "Manjericão", "Tomilho"],
      heart: ["Cassis", "Alecrim", "Lavanda", "Jasmim"],
      base: ["Almíscar", "Verbena"],
    },
  },

  "xerjoff-torino22": {
    image: "assets/perfumes/torino22.webp",
    family: "Amadeirado Aromático",
    source: "fragrantica.com",
    notes: {
      top: ["Eucalipto", "Açafrão", "Bergamota"],
      heart: ["Mate", "Sálvia Esclareia", "Guaiaco"],
      base: ["Madeira Seca", "Almíscar"],
    },
  },

  "xerjoff-torino25": {
    image: "assets/perfumes/torino25.webp",
    source: "xerjoff.com",
  },
  "histoires-de-parfums-1899": {
    family: "Oriental Amadeirado",
    source: "histoiresdeparfums.com",
    notes: {
      top: ["Bergamota Italiana", "Zimbro", "Pimenta Preta"],
      heart: ["Flor de Laranjeira", "Íris Florentina", "Canela"],
      base: ["Baunilha", "Vetiver", "Âmbar"],
    },
  },

  "bond-no-9-bleecker-street": {
    source: "bondno9.com",
    notes: {
      top: ["Folha de Violeta", "Cassis", "Tomilho"],
      heart: ["Jasmim", "Cedro", "Canela"],
      base: ["Musgo de Carvalho", "Camurça", "Patchouli", "Âmbar", "Baunilha"],
    },
  },

  // Só foto por enquanto (frasco oficial); pirâmide pendente.
  "amouage-lustre": {
    image: "assets/perfumes/amouage-lustre.webp",
    family: "Ambarado Amadeirado",
    perfumer: "Julien Rasquinet e Paul Guerlain",
    source: "fragrantica.com",
    notes: {
      top: ["Cardamomo", "Íris"],
      heart: ["Sândalo", "Cedro", "Patchouli"],
      base: ["Mirra", "Benjoim", "Ambrarome", "Baunilha", "Labdanum", "Estoraque", "Cypriol", "Fava Tonka"],
    },
  },
  "fragrance-du-bois-siberian-rose": {
    image: "assets/perfumes/fragrance-du-bois-siberian-rose.webp",
    family: "Floral Ambarado",
    source: "fragrantica.com",
    notes: {
      top: ["Pera", "Zimbro", "Pimenta Rosa", "Canela"],
      heart: ["Tuberosa", "Rosa", "Couro", "Ylang-ylang"],
      base: ["Musgo", "Patchouli", "Âmbar"],
    },
  },
  "fragrance-du-bois-sirene-privee": {
    image: "assets/perfumes/fragrance-du-bois-sirene-privee.webp",
    family: "Amadeirado Frutado",
    source: "fragrantica.com",
    notes: {
      top: ["Laranja Sanguínea", "Pimenta Rosa", "Noz-moscada"],
      heart: ["Cereja", "Canela", "Gerânio"],
      base: ["Cypriol", "Carvalho", "Vetiver"],
    },
  },
  "hind-al-oud-devotion": {
    image: "assets/perfumes/hind-al-oud-devotion.webp",
    family: "Oriental Adocicado",
    source: "hindaloud.com (via MHG Boutique)",
    notes: {
      top: ["Mirtilo"],
      heart: ["Baunilha"],
      base: ["Oud"],
    },
  },
  "hind-al-oud-emarati-oud": {
    image: "assets/perfumes/hind-al-oud-emarati-oud.webp",
    family: "Oriental",
    source: "hindaloud.com (via MHG Boutique)",
    notes: {
      top: ["Tâmara"],
      heart: ["Baunilha"],
      base: ["Oud"],
    },
  },
  "hind-al-oud-kheneen-al-fekr": {
    image: "assets/perfumes/hind-al-oud-kheneen-al-fekr.webp",
    family: "Aromático Adocicado",
    source: "hindaloud.com (via MHG Boutique)",
    notes: {
      top: ["Anis-estrelado"],
      heart: ["Flor de Cerejeira"],
      base: ["Oud"],
    },
  },
  "hind-al-oud-patchouli": {
    image: "assets/perfumes/hind-al-oud-patchouli.webp",
    family: "Floral Balsâmico",
    source: "hindaloud.com (via MHG Boutique)",
    notes: {
      top: ["Limão"],
      heart: ["Coentro"],
      base: ["Patchouli"],
    },
  },
  "hind-al-oud-rose": {
    image: "assets/perfumes/hind-al-oud-rose.webp",
    family: "Floral Oriental",
    source: "hindaloud.com (via MHG Boutique)",
    notes: {
      top: ["Rosa"],
      heart: ["Gerânio"],
      base: ["Oud"],
    },
  },
  "hind-al-oud-sheikh-a": {
    image: "assets/perfumes/hind-al-oud-sheikh-a.webp",
    family: "Oriental Especiado",
    source: "hindaloud.com (via MHG Boutique)",
    notes: {
      top: ["Especiarias"],
      heart: ["Oud"],
      base: ["Âmbar Gris"],
    },
  },
  "hind-al-oud-silver-musk": {
    image: "assets/perfumes/hind-al-oud-silver-musk.webp",
    family: "Cítrico Amadeirado",
    source: "hindaloud.com (via MHG Boutique)",
    notes: {
      top: ["Toranja"],
      heart: ["Cardamomo"],
      base: ["Oud"],
    },
  },
  "house-of-bo-agua-de-santos": {
    image: "assets/perfumes/house-of-bo-agua-de-santos.webp",
    family: "Cítrico Amadeirado",
    perfumer: "Rodrigo Flores-Roux",
    source: "houseofbo.co",
    notes: {
      top: ["Lima Mexicana", "Kumquat Doce", "Lavanda"],
      heart: ["Óleo de Neroli", "Flor de Laranjeira", "Tomilho"],
      base: ["Vetiver", "Cedro", "Almíscar de Angélica"],
    },
  },
  "house-of-bo-bombon": {
    image: "assets/perfumes/house-of-bo-bombon.webp",
    family: "Floral Gourmand",
    perfumer: "Honorine Blanc",
    source: "houseofbo.co",
    notes: {
      top: ["Lichia", "Lírio-do-vale", "Açafrão Branco"],
      heart: ["Pimenta Rosa", "Marshmallow", "Caramelo de Bergamota"],
      base: ["Bétula Branca", "Conhaque Envelhecido", "Âmbar Gris"],
    },
  },
  "house-of-bo-casa-blanca": {
    image: "assets/perfumes/house-of-bo-casa-blanca.webp",
    family: "Amadeirado Frutado",
    perfumer: "Frank Voelkl",
    source: "houseofbo.co",
    notes: {
      top: ["Minerais Cremosos", "Chá Branco", "Labdanum"],
      heart: ["Copal Branco", "Figo do Deserto", "Camurça Branca"],
      base: ["Tabaco", "Oud Branco", "Baunilha Bourbon"],
    },
  },
  "house-of-bo-cosmos": {
    image: "assets/perfumes/house-of-bo-cosmos.webp",
    family: "Gourmand Metálico",
    source: "fragrantica.com",
    notes: {
      top: ["Notas Metálicas", "Praliné", "Uísque", "Almíscar"],
      heart: ["Carvão", "Resina Sangue-de-Dragão", "Cacau"],
      base: ["Fumaça", "Couro", "Oud", "Íris"],
    },
  },
  "house-of-bo-el-sireno": {
    image: "assets/perfumes/house-of-bo-el-sireno.webp",
    family: "Floral Aquático",
    perfumer: "Laurent Le Guernec",
    source: "houseofbo.co",
    notes: {
      top: ["Alga Marinha", "Folha de Bananeira", "Lavanda"],
      heart: ["Magnólia", "Ylang-ylang", "Tuberosa"],
      base: ["Musgo de Carvalho", "Almécega", "Sândalo"],
    },
  },
  "house-of-bo-infinitoud": {
    image: "assets/perfumes/house-of-bo-infinitoud.webp",
    family: "Amadeirado Terroso",
    perfumer: "Carlos Benaïm",
    source: "houseofbo.co",
    notes: {
      top: ["Mirra", "Vetiver", "Peiote"],
      heart: ["Pimenta Preta", "Cedro", "Patchouli"],
      base: ["Oud", "Incenso", "Bálsamo de Gurjun"],
    },
  },
  "house-of-bo-oro-verde": {
    image: "assets/perfumes/house-of-bo-oro-verde.webp",
    family: "Âmbar Verde",
    perfumer: "Adriana Medina",
    source: "houseofbo.co",
    notes: {
      top: ["Bergamota", "Cannabis", "Mate"],
      heart: ["Manjericão", "Melancia", "Vetiver"],
      base: ["Âmbar Gris", "Palo Santo", "Musgo de Árvore"],
    },
  },
  "house-of-bo-rosario": {
    image: "assets/perfumes/house-of-bo-rosario.webp",
    family: "Floral Incensado",
    perfumer: "Olivier Cresp",
    source: "houseofbo.co",
    notes: {
      top: ["Romã", "Limão Primofiore", "Coentro"],
      heart: ["Rosa Centifolia", "Frésia", "Peônia Branca"],
      base: ["Âmbar Gris", "Vetiver", "Incenso"],
    },
  },
  "kajal-homme-ii": {
    image: "assets/perfumes/kajal-homme-ii.webp",
    family: "Amadeirado Aromático",
    source: "kajalperfumes.com",
    notes: {
      top: ["Tangerina", "Bergamota", "Limão", "Notas Verdes", "Flor de Laranjeira", "Âmbar"],
      heart: ["Pêssego", "Lavanda", "Alecrim", "Sálvia", "Canela", "Cravo", "Cedro"],
      base: ["Sândalo", "Musgo de Carvalho", "Patchouli", "Almíscar"],
    },
  },
  "kajal-homme-iii": {
    image: "assets/perfumes/kajal-homme-iii.webp",
    family: "Cítrico Aromático",
    source: "kajalperfumes.com",
    notes: {
      top: ["Soda de Limão", "Toranja"],
      heart: ["Alecrim", "Neroli", "Lavanda", "Gengibre"],
      base: ["Ambroxan", "Patchouli", "Almíscar", "Âmbar"],
    },
  },
  "kilian-angel-s-share-paradis": {
    image: "assets/perfumes/kilian-angel-s-share-paradis.webp",
    family: "Amadeirado Gourmand",
    perfumer: "Benoist Lapouza",
    source: "fragrantica.com",
    notes: {
      top: ["Framboesa", "Conhaque", "Licor"],
      heart: ["Fava Tonka", "Rosa Búlgara", "Caramelo"],
      base: ["Carvalho", "Praliné", "Sândalo", "Baunilha", "Musgo de Carvalho"],
    },
  },
  "maison-francis-kurkdjian-baccarat-rouge-540-edp": {
    image: "assets/perfumes/maison-francis-kurkdjian-baccarat-rouge-540-edp.webp",
    family: "Amadeirado Ambarado Floral",
    perfumer: "Francis Kurkdjian",
    source: "fragrantica.com",
    notes: {
      top: ["Açafrão", "Jasmim"],
      heart: ["Amberwood", "Âmbar Gris", "Hedione"],
      base: ["Resina de Abeto", "Cedro", "Açúcar", "Ambroxan", "Musgo de Carvalho"],
    },
  },
  "maison-francis-kurkdjian-baccarat-rouge-540-extrait": {
    image: "assets/perfumes/maison-francis-kurkdjian-baccarat-rouge-540-extrait.webp",
    family: "Amadeirado Ambarado Floral",
    perfumer: "Francis Kurkdjian",
    source: "fragrantica.com",
    notes: {
      top: ["Amêndoa Amarga", "Açafrão"],
      heart: ["Jasmim Egípcio", "Cedro da Virgínia"],
      base: ["Âmbar Gris", "Notas Amadeiradas", "Almíscar", "Ambroxan", "Cashmeran"],
    },
  },
  "rosendo-mateu-1": {
    image: "assets/perfumes/rosendo-mateu-1.webp",
    family: "Cítrico Aromático",
    perfumer: "Rosendo Mateu",
    source: "fragrantica.com",
    notes: {
      top: ["Bergamota da Calábria", "Lima", "Lavanda", "Tangerina Verde", "Sálvia", "Alecrim", "Tomilho"],
      heart: ["Folha de Chá", "Neroli", "Flor de Laranjeira Amarga", "Jasmim", "Pimentão Verde", "Lírio-do-vale", "Cardamomo"],
      base: ["Almíscar Branco", "Sândalo", "Íris"],
    },
  },
  "rosendo-mateu-5": {
    image: "assets/perfumes/rosendo-mateu-5.webp",
    family: "Floral Ambarado",
    perfumer: "Rosendo Mateu",
    source: "fragrantica.com",
    notes: {
      top: ["Especiarias", "Notas Florais Exóticas"],
      heart: ["Cravo", "Lírio-do-vale"],
      base: ["Âmbar", "Baunilha", "Almíscar"],
    },
  },
  "the-spirit-of-dubai-ajyal": {
    image: "assets/perfumes/the-spirit-of-dubai-ajyal.webp",
    family: "Cítrico Floral",
    source: "fragrantica.com",
    notes: {
      top: ["Notas Marinhas", "Toranja", "Notas de Chuva", "Bergamota", "Menta", "Maçã", "Lima", "Limão", "Pera", "Ameixa", "Notas Verdes", "Ruibarbo", "Pimenta Preta"],
      heart: ["Lokum", "Amberwood", "Flor de Cerejeira", "Ylang-ylang", "Osmanthus", "Sândalo", "Mimosa", "Lavanda", "Orquídea", "Lírio-do-vale", "Jasmim Sambac", "Cravo", "Magnólia", "Frésia", "Heliotrópio"],
      base: ["Almíscar Branco", "Âmbar", "Açúcar Mascavo", "Baunilha", "Patchouli", "Cedro", "Fava Tonka"],
    },
  },
  "xerjoff-40knots": {
    image: "assets/perfumes/xerjoff-40knots.webp",
    family: "Amadeirado Marinho",
    source: "fragrantica.com",
    mainNotes: ["Notas Amadeiradas", "Cedro", "Sal", "Água do Mar", "Notas Verdes"],
  },
  "xerjoff-alexandria-ii": {
    image: "assets/perfumes/xerjoff-alexandria-ii.webp",
    family: "Oriental Amadeirado",
    source: "xerjoff.com",
    notes: {
      top: ["Maçã", "Canela", "Lavanda", "Pau-rosa"],
      heart: ["Cedro", "Lírio-do-vale", "Rosa Búlgara"],
      base: ["Âmbar", "Oud do Laos", "Almíscar", "Sândalo", "Baunilha"],
    },
  },
  "xerjoff-blue-hope": {
    image: "assets/perfumes/xerjoff-blue-hope.webp",
    family: "Floral Amadeirado",
    source: "xerjoff.com",
    notes: {
      top: ["Bergamota", "Tangerina"],
      heart: ["Cedro", "Jasmim", "Açafrão"],
      base: ["Castóreo", "Almíscar", "Baunilha"],
    },
  },
  "xerjoff-ceylon": {
    image: "assets/perfumes/xerjoff-ceylon.webp",
    family: "Floral Amadeirado",
    source: "xerjoff.com",
    notes: {
      top: ["Bergamota", "Jasmim Sambac Indiano", "Mel"],
      heart: ["Sândalo Indiano", "Chá Preto do Ceilão", "Ouds da Malásia"],
      base: ["Âmbar", "Almíscar", "Baunilha de Madagascar"],
    },
  },
  "xerjoff-cruz-del-sur-ii": {
    image: "assets/perfumes/xerjoff-cruz-del-sur-ii.webp",
    family: "Floral Frutado",
    source: "xerjoff.com",
    notes: {
      top: ["Flor de Macieira", "Manga", "Abacaxi"],
      heart: ["Folhas Verdes", "Buquê Floral"],
      base: ["Cedro", "Almíscar", "Vetiver"],
    },
  },
  "xerjoff-fars": {
    image: "assets/perfumes/xerjoff-fars.webp",
    family: "Amadeirado",
    source: "xerjoff.com",
    notes: {
      top: ["Óleo de Cade", "Lavanda Francesa", "Bergamota Italiana"],
      heart: ["Cedro do Atlas", "Gerânio Egípcio", "Absoluto de Jasmim"],
      base: ["Âmbar", "Vetiver do Haiti", "Patchouli", "Sândalo", "Oud Buaya do Laos"],
    },
  },
  "xerjoff-starlight": {
    image: "assets/perfumes/xerjoff-starlight.webp",
    family: "Oriental",
    source: "xerjoff.com",
    notes: {
      top: ["Bergamota", "Cardamomo"],
      heart: ["Amêndoa", "Canela"],
      base: ["Âmbar", "Cedro"],
    },
  },
  "hind-al-oud-pink-musk": {
    image: "assets/perfumes/hind-al-oud-pink-musk.webp",
    family: "Floral Amadeirado",
    source: "fragrantica.com",
    notes: {
      top: ["Jasmim"],
      heart: ["Madeira de Cashmere"],
      base: ["Oud"],
    },
  },
};

// O estoque grafa "Histories des Parfums" (marca com erro de digitação) e "Histoires De Parfums".
FRAGRANCES["histories-des-parfums-1740"] = FRAGRANCES["histoires-de-parfums-1740"];

// A planilha passou a grafar "Histoires des Parfums"; mantém o vínculo com o 1740.
FRAGRANCES["histoires-des-parfums-1740"] = FRAGRANCES["histoires-de-parfums-1740"];

// A planilha passou a grafar "Rosendo Mateu - Rosendo Mateu 10".
FRAGRANCES["rosendo-mateu-rosendo-mateu-10"] = FRAGRANCES["rosendo-mateu-10"];
