

// Array of Objects
const quiz = [
    {
        q:'Qual a capital do Tocantins?',
        options:['Goiânia','Campo Grande','Palmas','Macapá'],
        answer:2
    },

    {
        q:'Quantos anos vive um sapo em média?',
        options:['2','5','11','15'],
        answer:3
    },

    {
        q:'Qual o menor país do mundo?',
        options:['Vaticano','Liechtenstein','Maldivas','Malta'],
        answer:0
    },

    {
        q:'Qual o idioma mais falado do mundo?',
        options:['Inglês','Mandarim','Espanhol','Francês'],
        answer:1
    },

    {
        q: 'Qual personagem bíblico construiu uma grande arca para sobreviver ao Dilúvio?',
        options: ['Noé', 'Abraão', 'Moisés', 'Josué'],
        answer: 0
    },

    {
        q: 'Quantos dias e noites durou o Dilúvio segundo a Bíblia?',
        options: ['7', '10', '40', '100'],
        answer: 2
    },

    {
        q: 'Qual foi o primeiro livro da Bíblia?',
        options: ['Gênesis', 'Êxodo', 'Levítico', 'Números'],
        answer: 0
    },

    {
        q: 'Quem era a esposa de Adão na Bíblia?',
        options: ['Sara', 'Eva', 'Rebeca', 'Raquel'],
        answer: 1
    },

    {
        q: 'Quem foi o pai de Davi na Bíblia?',
        options: ['José', 'Salomão', 'Jesse', 'Isaac'],
        answer: 2
    },

    {
        q: 'Qual dos discípulos de Jesus traiu o mestre por 30 moedas de prata?',
        options: ['Pedro', 'João', 'Judas', 'André'],
        answer: 2
    },

    {
        q: 'Quem matou o gigante Golias com uma funda e uma pedra?',
        options: ['Sansão', 'Elias', 'Davi', 'Gideão'],
        answer: 2
    },

    {
        q: 'Qual livro da Bíblia relata a história da criação do mundo?',
        options: ['Apocalipse', 'Salmos', 'Gênesis', 'Provérbios'],
        answer: 2
    },

    {
        q: 'Quem sobreviveu a um grande teste de fé ao oferecer seu filho em sacrifício?',
        options: ['Ezequiel', 'Isaque', 'Jó', 'Jonas'],
        answer: 1
    },

    {
        q: 'Qual profeta bíblico viveu dentro da barriga de um grande peixe?',
        options: ['Jonas', 'Ezequiel', 'Isaías', 'Jeremias'],
        answer: 0
    },

    {
        q: 'Quem foi o irmão mais novo de Jacó na Bíblia?',
        options: ['José', 'Benjamim', 'Rubem', 'Simeão'],
        answer: 1
    },

    {
        q: 'Qual rio foi dividido para que os filhos de Israel atravessassem a Terra Prometida?',
        options: ['Nilo', 'Tigre', 'Eufrates', 'Jordão'],
        answer: 3
    },

    {
        q: 'Quem foi o primeiro rei de Israel na Bíblia?',
        options: ['Saul', 'Davi', 'Salomão', 'Josué'],
        answer: 0
    },

    {
        q: 'Quantos frutos do Espírito são mencionados no Novo Testamento?',
        options: ['7', '9', '12', '14'],
        answer: 1
    },

    {
        q: 'Qual discípulo de Jesus negou conhecê-lo três vezes antes do galo cantar?',
        options: ['Pedro', 'Tiago', 'João', 'André'],
        answer: 0
    },

    {
        q: 'Quem foi arrebatado ao céu em um carro de fogo?',
        options: ['Moisés', 'Elias', 'Isaías', 'Jeremias'],
        answer: 1
    },

    {
        q: 'Qual foi o nome da mulher de Jó na Bíblia?',
        options: ['Ester', 'Débora', 'Rute', 'Lúcia'],
        answer: 3
    },

    {
        q: 'Qual livro da Bíblia contém o Sermão do Monte?',
        options: ['Mateus', 'João', 'Lucas', 'Marcos'],
        answer: 0
    },

    {
        q: 'Quem foi o gigante filisteu derrotado por Davi com uma pedrada?',
        options: ['Golias', 'Anaque', 'Nimrode', 'Og'],
        answer: 0
    },

    {
        q: 'Qual é o maior planeta do sistema solar?',
        options: ['Terra', 'Júpiter', 'Marte', 'Saturno'],
        answer: 1
    },

    {
        q: 'Qual é a capital do Brasil?',
        options: ['São Paulo', 'Brasília', 'Rio de Janeiro', 'Salvador'],
        answer: 1
    },

    {
        q: 'Qual é o animal que é conhecido como o "rei da selva"?',
        options: ['Girafa', 'Leão', 'Elefante', 'Tigre'],
        answer: 1
    },

    {
        q: 'Qual é o maior oceano do mundo?',
        options: ['Oceano Atlântico', 'Oceano Índico', 'Oceano Ártico', 'Oceano Pacífico'],
        answer: 3
    },

    {
        q: 'Quem pintou a Mona Lisa?',
        options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Claude Monet'],
        answer: 1
    },

    {
        q: 'Qual é a capital da França?',
        options: ['Londres', 'Paris', 'Berlim', 'Roma'],
        answer: 1
    },

    {
        q: 'Quem escreveu "Dom Quixote"?',
        options: ['Miguel de Cervantes', 'William Shakespeare', 'Jane Austen', 'Charles Dickens'],
        answer: 0
    },

    {
        q: 'Qual é a montanha mais alta do mundo?',
        options: ['Monte Everest', 'Monte Kilimanjaro', 'Monte Fuji', 'Monte McKinley'],
        answer: 0
    },

    {
        q: 'Qual é o maior animal terrestre?',
        options: ['Elefante', 'Rinoceronte', 'Girafa', 'Hipopótamo'],
        answer: 0
    },

    {
        q: 'Quem foi o criador da teoria da relatividade?',
        options: ['Isaac Newton', 'Albert Einstein', 'Galileu Galilei', 'Nikola Tesla'],
        answer: 1
    },

    {
        q: 'Qual é o maior rio do Brasil?',
        options: ['Amazonas', 'São Francisco', 'Tietê', 'Paraná'],
        answer: 0
    },

    {
        q: 'Quantos estados possui o Brasil?',
        options: ['26', '27', '28', '29'],
        answer: 1
    },

    {
        q: 'Qual é o animal símbolo do Canadá?',
        options: ['Urso-polar', 'Águia', 'Castor', 'Canguru'],
        answer: 2
    },

    {
        q: 'Quem foi o primeiro homem a pisar na Lua?',
        options: ['Buzz Aldrin', 'Yuri Gagarin', 'Neil Armstrong', 'Alan Shepard'],
        answer: 2
    },

    {
        q: 'Qual é o maior mamífero do mundo?',
        options: ['Baleia-azul', 'Elefante-africano', 'Girafa', 'Rinoceronte-branco'],
        answer: 0
    },

    {
        q: 'Quem escreveu a obra "Romeu e Julieta"?',
        options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
        answer: 1
    },

    {
        q: 'Qual é o maior deserto do mundo?',
        options: ['Saara', 'Atacama', 'Gobi', 'Antártico'],
        answer: 0
    },

    {
        q: 'Qual é o metal mais leve que existe?',
        options: ['Alumínio', 'Ferro', 'Titânio', 'Lítio'],
        answer: 3
    },

    {
        q: 'Em qual país se situa a Torre Eiffel?',
        options: ['Itália', 'Alemanha', 'Espanha', 'França'],
        answer: 3
    },

    {
        q: 'Quem pintou a obra "A Última Ceia"?',
        options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
        answer: 1
    },

    {
        q: 'Quem foi o líder que conduziu os israelitas durante o Êxodo do Egito?',
        options: ['Noé', 'Moisés', 'Josué', 'Abraão'],
        answer: 1
    },

    {
        q: 'Qual foi o animal que trouxe a comida para o profeta Elias durante a fome em Israel?',
        options: ['Leão', 'Cervo', 'Corvo', 'Águia'],
        answer: 2
    },

    {
        q: 'Qual é o primeiro livro do Novo Testamento da Bíblia?',
        options: ['Mateus', 'Lucas', 'João', 'Marcos'],
        answer: 0
    },

    {
        q: 'Qual é o salmo que começa com "O Senhor é o meu pastor, nada me faltará"?',
        options: ['Salmo 23', 'Salmo 100', 'Salmo 91', 'Salmo 37'],
        answer: 0
    },

    {
        q: 'Quem era a esposa de Isaque na Bíblia?',
        options: ['Lea', 'Raquel', 'Sara', 'Rebeca'],
        answer: 3
    },

    {
        q: 'Quem foi o último juiz e o primeiro profeta a ungir um rei em Israel?',
        options: ['Ezequiel', 'Samuel', 'Elias', 'Jeremias'],
        answer: 1
    },

    {
        q: 'Qual livro da Bíblia narra a história de Rute?',
        options: ['Rute', 'Juízes', 'Rute', 'Ester'],
        answer: 2
    },

    {
        q: 'Quem foi o rei famoso por sua sabedoria e construiu o Templo de Jerusalém?',
        options: ['Davi', 'Salomão', 'Josué', 'Saul'],
        answer: 1
    },

    {
        q: 'Qual dos discípulos de Jesus negou conhecer o mestre três vezes antes que o galo cantasse?',
        options: ['Pedro', 'Tiago', 'João', 'André'],
        answer: 0
    },

    {
        q: 'Qual profeta do Antigo Testamento teve uma visão dos ossos secos que reviveram?',
        options: ['Ezequiel', 'Daniel', 'Isaías', 'Jeremias'],
        answer: 0
    },

    {
        q: 'Quem foi o rei de Judá que reformou o templo e redescobriu o livro da Lei?',
        options: ['Josias', 'Ezequias', 'Jeosafá', 'Manassés'],
        answer: 0
    },
    {
        q: 'Quem foi a esposa de Abraão que se chamava originalmente Sarai?',
        options: ['Débora', 'Ester', 'Raquel', 'Sara'],
        answer: 3
    },
    {
        q: 'Qual foi o sonho que José, filho de Jacó, interpretou para Faraó?',
        options: ['Sete vacas magras e sete vacas gordas', 'Sete cestas de pães', 'Sol, lua e estrelas', 'Gafanhotos invadindo a terra'],
        answer: 0
    },
    {
        q: 'Quem foi o profeta que pregou para os ninivitas e teve sua missão registrada no livro de Jonas?',
        options: ['Isaías', 'Jeremias', 'Jonas', 'Miquéias'],
        answer: 2
    },
    {
        q: 'Qual foi a praga enviada por Deus para libertar o povo de Israel da escravidão no Egito?',
        options: ['Chuva de fogo', 'Praga de moscas', 'Águas transformadas em sangue', 'Trevas que cobriram a terra'],
        answer: 2
    },
    {
        q: 'Qual dos discípulos de Jesus foi apelidado de "Filho do Trovão"?',
        options: ['João', 'Tiago', 'André', 'Pedro'],
        answer: 1
    },
    {
        q: 'Qual dos reis de Israel construiu o famoso Templo de Salomão?',
        options: ['Davi', 'Jeroboão', 'Salomão', 'Acaz'],
        answer: 2
    },
    {
        q: 'Qual é o último livro do Antigo Testamento da Bíblia?',
        options: ['Ageu', 'Malaquias', 'Zacarias', 'Sofonias'],
        answer: 1
    },
    {
        q: 'Qual é o nome do lugar onde Jesus foi crucificado?',
        options: ['Belém', 'Gólgota', 'Betânia', 'Jerusalém'],
        answer: 1
    },
    {
        q: 'Qual foi o primeiro milagre de Jesus, de acordo com os Evangelhos?',
        options: ['Transformar água em vinho', 'Alimentar cinco mil pessoas com cinco pães e dois peixes', 'Curar um paralítico', 'Ressuscitar Lázaro'],
        answer: 0
    },

    {
        q: 'Quem foi o profeta que enfrentou e venceu os profetas de Baal no Monte Carmelo?',
        options: ['Isaías', 'Elias', 'Jeremias', 'Jonas'],
        answer: 1
    },
    {
        q: 'Qual foi o filho de Davi que tentou tomar o trono de seu pai e foi morto na batalha?',
        options: ['Absalão', 'Salomão', 'Adonias', 'Amnon'],
        answer: 0
    },
    {
        q: 'Quem foi o primeiro homem a ser ressuscitado por Jesus?',
        options: ['Lázaro', 'Jairo', 'Judas Iscariotes', 'João Batista'],
        answer: 0
    },
    {
        q: 'Qual é o último livro do Novo Testamento da Bíblia?',
        options: ['Apocalipse', '1 Timóteo', 'Romanos', 'Hebreus'],
        answer: 0
    },
    {
        q: 'Quem foi o rei de Israel que ficou conhecido por sua sabedoria e recebeu a visita da rainha de Sabá?',
        options: ['Davi', 'Josué', 'Salomão', 'Saul'],
        answer: 2
    },
    {
        q: 'Quem era a esposa de Isaque na Bíblia?',
        options: ['Lea', 'Raquel', 'Sara', 'Rebeca'],
        answer: 3
    },
    {
        q: 'Quem foi o profeta que teve visões de um vale de ossos secos ganhando vida novamente?',
        options: ['Ezequiel', 'Daniel', 'Isaías', 'Jeremias'],
        answer: 0
    },
    {
        q: 'Qual dos discípulos de Jesus negou conhecê-lo três vezes antes que o galo cantasse?',
        options: ['Pedro', 'Tiago', 'João', 'André'],
        answer: 0
    },
    {
        q: 'Quem foi o rei de Babilônia que destruiu Jerusalém e levou os israelitas cativos para a Babilônia?',
        options: ['Nabucodonosor', 'Ciro', 'Dario', 'Belsazar'],
        answer: 0
    },
    {
        q: 'Qual livro da Bíblia narra a história do profeta que foi engolido por um grande peixe?',
        options: ['Jonas', 'Miquéias', 'Obadias', 'Naum'],
        answer: 0
    },

    {
        q: 'Qual é a capital da Austrália?',
        options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
        answer: 2
    },
    {
        q: 'Qual é o maior oceano do mundo?',
        options: ['Oceano Atlântico', 'Oceano Índico', 'Oceano Pacífico', 'Oceano Antártico'],
        answer: 2
    },
    {
        q: 'Qual é a maior montanha do mundo em altura?',
        options: ['Monte Kilimanjaro', 'Monte Everest', 'Monte Denali', 'Monte Aconcágua'],
        answer: 1
    },
    {
        q: 'Qual é a maior religião do mundo em número de seguidores?',
        options: ['Islamismo', 'Cristianismo', 'Hinduísmo', 'Budismo'],
        answer: 1
    },
    {
        q: 'Qual país é conhecido como a "terra das mil colinas"?',
        options: ['Quênia', 'Etiópia', 'Ruanda', 'Tanzânia'],
        answer: 2
    },
    {
        q: 'Qual é a moeda oficial do Japão?',
        options: ['Iene', 'Won', 'Dólar', 'Euro'],
        answer: 0
    },
    {
        q: 'Em que país podemos encontrar a Grande Barreira de Coral?',
        options: ['Brasil', 'Austrália', 'Filipinas', 'Índia'],
        answer: 1
    },
    {
        q: 'Qual é o maior animal terrestre?',
        options: ['Elefante Africano', 'Rinoceronte Branco', 'Girafa', 'Hipopótamo'],
        answer: 0
    },
    {
        q: 'Qual é o maior deserto do mundo?',
        options: ['Deserto do Atacama', 'Deserto de Gobi', 'Deserto do Saara', 'Deserto de Kalahari'],
        answer: 2
    },
    {
        q: 'Qual é a língua oficial do Brasil?',
        options: ['Espanhol', 'Português', 'Inglês', 'Francês'],
        answer: 1
    },
    {
        q: 'Qual é a maior cordilheira do mundo?',
        options: ['Montanhas Rochosas', 'Himalaias', 'Andes', 'Alpes'],
        answer: 2
    },
    {
        q: 'Qual é o metal mais abundante na crosta terrestre?',
        options: ['Ferro', 'Alumínio', 'Cobre', 'Ouro'],
        answer: 1
    },
    {
        q: 'Qual é a maior ilha do mundo?',
        options: ['Groenlândia', 'Austrália', 'Nova Guiné', 'Borneo'],
        answer: 0
    },
    {
        q: 'Qual é o maior animal marinho?',
        options: ['Baleia Azul', 'Tubarão Branco', 'Lula Gigante', 'Polvo Colossal'],
        answer: 0
    },
    {
        q: 'Qual é o país com a maior população do mundo?',
        options: ['Estados Unidos', 'Índia', 'China', 'Brasil'],
        answer: 2
    },
    {
        q: 'Qual é o livro mais vendido da história, depois da Bíblia?',
        options: ['O Pequeno Príncipe', 'Cinderela', 'Dom Quixote', 'Harry Potter e a Pedra Filosofal'],
        answer: 2
    },
    {
        q: 'Qual é a maior empresa de comércio eletrônico do mundo?',
        options: ['Amazon', 'Alibaba', 'eBay', 'Mercado Livre'],
        answer: 0
    },
    {
        q: 'Qual é a montanha-russa mais alta do mundo?',
        options: ['Kingda Ka', 'Fury 325', 'Top Thrill Dragster', 'Steel Dragon 2000'],
        answer: 0
    },
    {
        q: 'Quem foi o físico teórico que formulou a teoria da relatividade?',
        options: ['Isaac Newton', 'Albert Einstein', 'Galileu Galilei', 'Nikola Tesla'],
        answer: 1
    },
    {
        q: 'Qual é o metal líquido à temperatura ambiente?',
        options: ['Ferro', 'Chumbo', 'Mercúrio', 'Ouro'],
        answer: 2
    }

]
