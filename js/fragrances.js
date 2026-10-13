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
};

// A planilha passou a grafar "Histoires des Parfums"; mantém o vínculo com o 1740.
FRAGRANCES["histoires-des-parfums-1740"] = FRAGRANCES["histoires-de-parfums-1740"];

// A planilha passou a grafar "Rosendo Mateu - Rosendo Mateu 10".
FRAGRANCES["rosendo-mateu-rosendo-mateu-10"] = FRAGRANCES["rosendo-mateu-10"];
