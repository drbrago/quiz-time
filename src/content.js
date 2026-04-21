import { questions as geographyQuestions } from "./questions.js";

export const sectionOrder = [
  "geography",
  "english-b",
  "swedish-b1",
  "swedish-c1",
  "biology-evolution",
];

export const sections = {
  geography: {
    id: "geography",
    type: "quiz",
    eyebrow: "Geografi-quiz",
    title: "Geografikollen",
    homeTitle: "Geografi quiz",
    homeDescription:
      "Träna naturresurser, vatten, skog och hållbar utveckling med en fråga i taget.",
    description:
      "Öva på geografifrågor på svenska. Du får en fråga i taget, direkt feedback och kan börja om när du vill.",
    quizDescription:
      "Svara på en fråga i taget och håll koll på din poäng under hela quizet.",
    startLabel: "Starta geografi-quiz",
    resultTitle: "Geografi-quiz klart",
    resultMessages: {
      perfect: "Fantastiskt! Du hade koll på varje fråga.",
      strong: "Snyggt jobbat! Du kan redan mycket geografi.",
      okay: "Bra kämpat! Du är på god väg och kan träna vidare.",
      retry:
        "Fortsätt öva så kommer du snart att känna igen ännu fler platser.",
    },
    highlights: ["En fråga i taget", "Direkt feedback", "Poängräkning"],
    shuffleQuestions: true,
    shuffleOptions: true,
    questions: geographyQuestions,
  },
  "english-b": {
    id: "english-b",
    type: "quiz",
    eyebrow: "Engelska delprov B",
    title: "Nationella prov åk 6 - Engelska delprov B",
    homeTitle: "Engelska delprov B",
    homeDescription:
      "Läs korta engelska texter, svara på frågor och träna inför delprov B.",
    description:
      "Läs en kort engelsk text och svara på en fråga i taget. Efter varje svar får du direkt feedback och en svensk förklaring.",
    quizDescription: "Läs texten noggrant och välj det svar som passar bäst.",
    startLabel: "Starta engelska-quizet",
    resultTitle: "Engelska delprov B klart",
    resultMessages: {
      perfect:
        "Mycket stark läsförståelse. Du hittade rätt svar på alla frågor.",
      strong: "Bra jobbat! Du läser engelska texter säkert och noggrant.",
      okay: "Du är på god väg. Fortsätt öva på att hitta viktiga detaljer i texten.",
      retry:
        "Börja om och läs lugnt en gång till. Då blir det lättare att hitta rätt svar.",
    },
    highlights: ["10 korta texter", "10 frågor", "Direkt feedback"],
    shuffleQuestions: false,
    shuffleOptions: false,
    texts: [
      {
        title: "Class Trip",
        paragraphs: [
          "Hello class! On Friday we are going to the Science Museum in Linkoping. We will leave school at 8:15 and come back at 14:30. Please bring a packed lunch, a water bottle and comfortable shoes. Remember your bus card.",
        ],
        questions: [
          {
            question: "What should students bring to eat?",
            options: [
              "A packed lunch",
              "A sandwich from the museum",
              "A cake from home",
              "A hot meal from school",
            ],
            correctAnswer: "A packed lunch",
            explanation:
              "I texten står det tydligt att eleverna ska ta med sig en packed lunch.",
          },
        ],
      },
      {
        title: "Book Club",
        paragraphs: [
          "The school library has a book club every Tuesday at 3:30. This week students will talk about adventure books and make a new book cover. Everyone who joins gets fruit and juice after the meeting.",
        ],
        questions: [
          {
            question: "What will students discuss this week?",
            options: [
              "Adventure books",
              "Science magazines",
              "New films",
              "Sports news",
            ],
            correctAnswer: "Adventure books",
            explanation:
              "Rätt svar är adventure books eftersom det står att eleverna ska prata om adventure books den här veckan.",
          },
        ],
      },
      {
        title: "Email from Mia",
        paragraphs: [
          "Hi Sam! I am staying at Grandpa's farm until Sunday. On Saturday morning I will help feed the chickens. After lunch Grandpa wants to take us to the lake to fish. Can you come at 1 o'clock?",
        ],
        questions: [
          {
            question: "What does Grandpa want to do after lunch?",
            options: [
              "Go to the lake to fish",
              "Feed the chickens",
              "Bake a cake",
              "Visit the town",
            ],
            correctAnswer: "Go to the lake to fish",
            explanation:
              "I mejlet står det att Grandpa vill ta med dem till sjön för att fiska efter lunch.",
          },
        ],
      },
      {
        title: "Weather Report",
        paragraphs: [
          "Tomorrow morning will be rainy and windy, but in the afternoon the sun will come out. The temperature will be between 12 and 18 degrees. It will be good weather for outdoor games after school.",
        ],
        questions: [
          {
            question: "When will the weather be best for outdoor games?",
            options: [
              "In the afternoon",
              "Early in the morning",
              "At lunchtime",
              "Late at night",
            ],
            correctAnswer: "In the afternoon",
            explanation:
              "Texten säger att solen kommer fram på eftermiddagen och att det blir bra väder för utomhuslekar efter skolan.",
          },
        ],
      },
      {
        title: "Lost Cat",
        paragraphs: [
          "Have you seen Pepper? Pepper is a small grey and white cat with a green collar. She was last seen near the sports hall on Monday evening. If you see her, please call 070-123 45 67.",
        ],
        questions: [
          {
            question: "Where was Pepper last seen?",
            options: [
              "Near the sports hall",
              "At the bus stop",
              "In the school library",
              "By the lake",
            ],
            correctAnswer: "Near the sports hall",
            explanation:
              "Rätt svar är near the sports hall eftersom det står att katten senast sågs där på måndagskvällen.",
          },
        ],
      },
      {
        title: "Cafe Menu",
        paragraphs: [
          "Sunshine Cafe Menu: Tomato soup 45 kr. Chicken sandwich 58 kr. Pancakes with jam 42 kr. Apple juice 18 kr. Chocolate milk 20 kr.",
        ],
        questions: [
          {
            question: "What is the cheapest food on the menu?",
            options: [
              "Pancakes with jam",
              "Tomato soup",
              "Chicken sandwich",
              "Apple juice",
            ],
            correctAnswer: "Pancakes with jam",
            explanation:
              "Apple juice är billigast totalt, men frågan gäller food. Bland maträtterna kostar Pancakes with jam minst.",
          },
        ],
      },
      {
        title: "Drama Club",
        paragraphs: [
          "The drama club starts next week. Group A meets on Monday at 15:00. Group B meets on Thursday at 15:00. New students must sign up before Friday if they want to join the first practice.",
        ],
        questions: [
          {
            question: "When does Group B meet?",
            options: [
              "Thursday at 15:00",
              "Monday at 15:00",
              "Friday at 15:00",
              "Thursday at 10:00",
            ],
            correctAnswer: "Thursday at 15:00",
            explanation:
              "I texten står att Group B träffas på torsdag klockan 15:00.",
          },
        ],
      },
      {
        title: "Green Day",
        paragraphs: [
          "Come to Green Day on 5 May in the school yard. You can sell old toys, swap books and learn how to recycle at home. The event starts at 10:00 and entrance is free.",
        ],
        questions: [
          {
            question: "What can visitors learn about?",
            options: [
              "How to recycle at home",
              "How to cook lunch",
              "How to draw posters",
              "How to play football",
            ],
            correctAnswer: "How to recycle at home",
            explanation:
              "Rätt svar är how to recycle at home eftersom det står att besökare kan lära sig det på Green Day.",
          },
        ],
      },
      {
        title: "Presentation Day",
        paragraphs: [
          "I was nervous before my class presentation, and my hands felt cold. But when I started speaking, my classmates smiled and listened carefully. After the lesson, my teacher said I had spoken clearly and used good examples.",
        ],
        questions: [
          {
            question:
              "How did the writer probably feel after the presentation?",
            options: [
              "Proud and calmer",
              "Angry and upset",
              "Bored and tired",
              "Hungry and stressed",
            ],
            correctAnswer: "Proud and calmer",
            explanation:
              "Det står inte exakt, men eftersom klasskamraterna lyssnade och läraren gav beröm förstår man att skribenten troligen kände sig lugnare och stolt.",
          },
        ],
      },
      {
        title: "Homework Note",
        paragraphs: [
          "Please read pages 14 to 19 before Thursday. Then answer the questions in your workbook. If you finish early, write three sentences about your favorite character in the story.",
        ],
        questions: [
          {
            question: "What should students do if they finish early?",
            options: [
              "Write three sentences about their favorite character",
              "Read pages 1 to 3 again",
              "Ask the teacher for a new book",
              "Go home before the lesson ends",
            ],
            correctAnswer:
              "Write three sentences about their favorite character",
            explanation:
              "I instruktionen står att elever som blir klara tidigt ska skriva tre meningar om sin favoritkaraktär.",
          },
        ],
      },
    ],
  },
  "swedish-b1": {
    id: "swedish-b1",
    type: "quiz",
    eyebrow: "Svenska B1",
    title: "Svenska B1 - Läsförståelse",
    homeTitle: "Svenska B1 - Läsförståelse",
    homeDescription:
      "Läs två texter, svara på flervalsfrågor och få direkt feedback med förklaringar.",
    description:
      "Läs varje text noggrant och svara sedan på frågorna. Du får direkt feedback, förklaring till rätt svar och tydlig progression mellan texterna.",
    quizDescription:
      "Läs texten ovanför frågan och välj det svar som passar bäst.",
    startLabel: "Starta B1-övningen",
    resultTitle: "B1-läsförståelsen är klar",
    resultMessages: {
      perfect: "Mycket stark läsning. Du hittade rätt svar på alla frågor.",
      strong: "Bra läst. Du tolkar både innehåll och stämning säkert.",
      okay: "Du är på god väg. Läs gärna texterna en gång till och försök igen.",
      retry:
        "Börja om och läs lugnt mellan raderna. Det blir lättare för varje gång.",
    },
    highlights: ["2 texter", "12 frågor", "Direkt feedback"],
    shuffleQuestions: false,
    shuffleOptions: false,
    texts: [
      {
        title: "Nora på skolgården",
        paragraphs: [
          "Det hade regnat hela natten. När Alva gick till skolan låg löven klistrade mot marken och luften luktade kallt och blött. Hon drog jackan tätare omkring sig och skyndade över skolgården. Vid cykelstället stod hennes bästa vän Nora, men i dag vinkade hon inte. Hon tittade bara ner i sin mobil och stoppade snabbt undan den när Alva kom närmare.",
          "På första lektionen märkte Alva att Nora var ovanligt tyst. Hon brukade alltid räcka upp handen, men nu satt hon mest och ritade små streck i kanten av sitt häfte. När läraren bad dem arbeta två och två sa Nora att hon hellre ville jobba ensam.",
          "På rasten försökte Alva fråga vad som hade hänt.",
          "– Ingenting, sa Nora utan att möta hennes blick.",
          "Men Alva trodde inte på det. Nora brukade inte låta så där hård i rösten. Resten av dagen kändes konstig. När sista lektionen var slut gick Nora hem direkt utan att säga hej då.",
          "På kvällen låg Alva länge vaken. Hon tänkte på hur Nora hade sett ut, nästan som om hon bar på något tungt som hon inte orkade dela med sig av.",
        ],
        questions: [
          {
            question: "Hur var vädret på morgonen när Alva gick till skolan?",
            options: [
              "Det var varmt och soligt",
              "Det hade regnat och var kallt",
              "Det snöade kraftigt",
              "Det blåste men var torrt",
            ],
            correctAnswer: "Det hade regnat och var kallt",
            explanation:
              "I texten står att det hade regnat hela natten och att luften luktade kallt och blött.",
          },
          {
            question: "Vad var ovanligt med Nora på morgonen?",
            options: [
              "Hon hade glömt sin jacka",
              "Hon kom för sent till skolan",
              "Hon vinkade inte till Alva",
              "Hon pratade med läraren",
            ],
            correctAnswer: "Hon vinkade inte till Alva",
            explanation:
              "Texten säger att Nora stod vid cykelstället men inte vinkade som hon brukade.",
          },
          {
            question:
              "Hur märkte Alva på lektionen att något inte var som vanligt?",
            options: [
              "Nora skrattade högt hela tiden",
              "Nora ville gå hem tidigare",
              "Nora var tyst och ville arbeta ensam",
              "Nora hade glömt sina böcker",
            ],
            correctAnswer: "Nora var tyst och ville arbeta ensam",
            explanation:
              "Nora brukade räcka upp handen men var nu tyst och ville jobba ensam.",
          },
          {
            question: 'Vad menas med att Nora "inte mötte hennes blick"?',
            options: [
              "Hon såg rakt på Alva",
              "Hon tittade inte på Alva",
              "Hon gick fram till Alva",
              "Hon log mot Alva",
            ],
            correctAnswer: "Hon tittade inte på Alva",
            explanation: "Uttrycket betyder att Nora undvek ögonkontakt.",
          },
          {
            question: "Vad förstår man mellan raderna om Nora?",
            options: [
              "Hon är arg för att det regnar",
              "Hon är antagligen ledsen eller orolig",
              "Hon vill byta skola direkt",
              "Hon tycker inte om lektioner längre",
            ],
            correctAnswer: "Hon är antagligen ledsen eller orolig",
            explanation:
              "Det står inte rakt ut, men hennes beteende visar att något känns tungt.",
          },
          {
            question: "Varför låg Alva vaken på kvällen?",
            options: [
              "Hon hade ont i magen",
              "Hon var rädd för mörkret",
              "Hon tänkte på Nora och att något verkade fel",
              "Hon hade mycket läxor",
            ],
            correctAnswer: "Hon tänkte på Nora och att något verkade fel",
            explanation:
              "I slutet står det att Alva tänkte på hur Nora såg ut och att hon verkade bära på något tungt.",
          },
        ],
      },
      {
        title: "Farfars låda",
        paragraphs: [
          "I köket stod farfar redan vid bordet när Sam kom ner på morgonen. Framför honom låg en gammal trälåda som Sam aldrig hade sett tidigare. Den var mörk, nästan svart, och i locket satt ett litet metallhandtag.",
          "– Vad är det där? frågade Sam.",
          "Farfar drog med fingrarna över locket innan han svarade.",
          "– Något jag inte har öppnat på många år.",
          "Sam satte sig försiktigt. Det såg nästan ut som om farfar hade glömt att Sam var där. Efter en stund öppnade han lådan. Där låg fotografier, ett fickur och ett brev som gulnat i kanterna.",
          "– Är det från när du var ung? frågade Sam.",
          "Farfar log svagt.",
          "– Ja. Från en tid då allt skulle börja.",
          "Han tog upp brevet men vek inte ut det. I stället höll han det bara i handen, som om pappret kunde gå sönder av minsta rörelse. Sam ville fråga mer, men något i farfars ansikte fick honom att vara tyst.",
          "När farfar till slut la tillbaka brevet i lådan hade solen hunnit klättra upp över träden utanför fönstret.",
          "– En annan dag kanske jag berättar, sa han.",
          "Sam nickade. Han förstod att vissa historier måste få vänta.",
        ],
        questions: [
          {
            question: "Vad låg framför farfar på bordet?",
            options: [
              "En gammal bok",
              "En trälåda",
              "En ryggsäck",
              "En metallväska",
            ],
            correctAnswer: "En trälåda",
            explanation:
              "I början av texten står det att det låg en gammal trälåda framför farfar.",
          },
          {
            question: "Hur beskrivs lådan?",
            options: [
              "Ljus och rund",
              "Röd och liten",
              "Mörk med ett metallhandtag",
              "Stor och genomskinlig",
            ],
            correctAnswer: "Mörk med ett metallhandtag",
            explanation:
              "Texten beskriver lådan som mörk, nästan svart, med ett litet metallhandtag.",
          },
          {
            question: "Vad fanns i lådan?",
            options: [
              "Pengar och nycklar",
              "Fotografier, ett fickur och ett brev",
              "Kläder och böcker",
              "Kartor och pennor",
            ],
            correctAnswer: "Fotografier, ett fickur och ett brev",
            explanation: "Det står tydligt vad som låg i lådan.",
          },
          {
            question:
              'Vad menas med meningen "Från en tid då allt skulle börja"?',
            options: [
              "Farfar menar att han skulle börja städa",
              "Farfar tänker på en viktig tid tidigt i livet",
              "Farfar menar att dagen precis hade börjat",
              "Farfar syftar på att Sam skulle börja skolan",
            ],
            correctAnswer: "Farfar tänker på en viktig tid tidigt i livet",
            explanation:
              "Meningen syftar på en tidigare period i livet som betydde mycket.",
          },
          {
            question: "Varför frågar Sam inte mer?",
            options: [
              "Han blev arg",
              "Han blev trött",
              "Han märkte att farfar blev känslosam",
              "Han hörde att någon ringde på dörren",
            ],
            correctAnswer: "Han märkte att farfar blev känslosam",
            explanation:
              "Texten visar att något i farfars ansikte fick Sam att vara tyst.",
          },
          {
            question: "Vad är textens stämning?",
            options: [
              "Busig och skämtsam",
              "Stressig och högljudd",
              "Lugn och lite sorgsen eller eftertänksam",
              "Arg och hotfull",
            ],
            correctAnswer: "Lugn och lite sorgsen eller eftertänksam",
            explanation:
              "Texten har en stillsam ton och antyder minnen och känslor.",
          },
        ],
      },
    ],
  },
  "biology-evolution": {
    id: "biology-evolution",
    type: "quiz",
    eyebrow: "Biologi – Evolution",
    title: "Biologi – Evolution",
    homeTitle: "Biologi – Evolution",
    homeDescription:
      "Öva på population, naturligt urval, fossil och Darwins evolutionsteori med en fråga i taget.",
    description:
      "Öva på biologifrågor om evolution på svenska. Du får en fråga i taget, direkt feedback och en förklaring till rätt svar.",
    quizDescription:
      "Svara på en fråga i taget och håll koll på din poäng under hela quizet.",
    startLabel: "Starta biologi-quizet",
    resultTitle: "Biologi-quiz klart",
    resultMessages: {
      perfect: "Fantastiskt! Du hade koll på varje fråga om evolution.",
      strong: "Snyggt jobbat! Du kan redan mycket om biologi och evolution.",
      okay: "Bra kämpat! Du är på god väg och kan träna vidare.",
      retry:
        "Fortsätt öva så kommer du snart att känna igen ännu fler begrepp.",
    },
    highlights: ["14 frågor", "Direkt feedback", "Poängräkning"],
    shuffleQuestions: true,
    shuffleOptions: true,
    resources: [
      {
        label: "Om evolution: Charles och arternas uppkomst",
        url: "https://sliplay.se/medioteket/play/products/847938-om-evolution-charles-och-arternas-uppkomst",
      },
      {
        label: "Om evolution: Variation och sköldpaddor",
        url: "https://sliplay.se/medioteket/play/products/847937-om-evolution-variation-och-skoldpaddor",
      },
      {
        label: "Om evolution: Konkurrens och ödlor",
        url: "https://sliplay.se/medioteket/play/products/847936-om-evolution-konkurrens-och-odlor",
      },
      {
        label: "Om evolution: Galapagos och snygga hanar",
        url: "https://sliplay.se/medioteket/play/products/847935-om-evolution-galapagos-och-snygga-hanar",
      },
      {
        label: "Om evolution: Dinosaurier, tid och fossil",
        url: "https://sliplay.se/medioteket/play/products/847933-om-evolution-dinosaurier-tid-och-fossil",
      },
    ],
    questions: [
      {
        question: "Vad är en population?",
        options: [
          "Alla arter som lever i samma skog",
          "Individer av samma art i samma område",
          "Alla djur i ett land",
          "En grupp djur som äter samma mat",
        ],
        correctAnswer: "Individer av samma art i samma område",
        explanation:
          "En population består av individer av samma art som lever inom samma geografiska område och kan föröka sig med varandra.",
      },
      {
        question: "Vad krävs för att två djur ska tillhöra samma art?",
        options: [
          "De måste se likadana ut",
          "De måste bo i samma område",
          "De måste kunna få fruktsam avkomma",
          "De måste äta samma föda",
        ],
        correctAnswer: "De måste kunna få fruktsam avkomma",
        explanation:
          "En art definieras som en grupp organismer som kan para sig och få avkomma som i sin tur kan föröka sig.",
      },
      {
        question:
          "En mula är korsningen mellan en häst och en åsna. Vad kallas en sådan korsning?",
        options: ["En mutation", "En hybrid", "En variant", "En klon"],
        correctAnswer: "En hybrid",
        explanation:
          "En hybrid är avkomman av två individer från olika arter. Mulor är hybrider och är oftast sterila – de kan inte själva föröka sig.",
      },
      {
        question: "Vilket påstående stämmer om alla levande organismer?",
        options: [
          "De andas med lungor",
          "De är uppbyggda av celler",
          "De har en hjärna",
          "De förökar sig sexuellt",
        ],
        correctAnswer: "De är uppbyggda av celler",
        explanation:
          "Alla levande organismer – från bakterier till människor – är uppbyggda av celler. Det är en grundläggande egenskap hos allt liv.",
      },
      {
        question: "Vad har växtceller som djurceller saknar?",
        options: [
          "Cellkärna och arvsmassa",
          "Cellvägg och kloroplaster",
          "Cellmembran och vatten",
          "Proteiner och enzymer",
        ],
        correctAnswer: "Cellvägg och kloroplaster",
        explanation:
          "Växtceller har cellvägg av cellulosa och kloroplaster för fotosyntes. Djurceller saknar båda dessa strukturer.",
      },
      {
        question:
          "En varg med tjockare päls överlever en kall vinter och får valpar. Vad kallas denna process?",
        options: [
          "Genetisk drift",
          "Slumpmässig mutation",
          "Naturligt urval",
          "Artificiellt urval",
        ],
        correctAnswer: "Naturligt urval",
        explanation:
          "Det naturliga urvalet innebär att individer med fördelaktiga egenskaper överlever bättre och för vidare sina gener. Tjockare päls i kallt klimat är ett klassiskt exempel.",
      },
      {
        question: "Vad är evolution?",
        options: [
          "Att ett djur tränar och blir starkare",
          "Att en individ anpassar sig under livet",
          "Att arter förändras över generationer",
          "Att nya djur skapas av människan",
        ],
        correctAnswer: "Att arter förändras över generationer",
        explanation:
          "Evolution är den process där ärftliga egenskaper i en population förändras över många generationer, drivet av naturligt urval, mutation och slump.",
      },
      {
        question:
          "Vad kallas den superkontinent som en gång samlade alla jordens landmassor?",
        options: ["Gondwana", "Laurasia", "Pangea", "Atlantis"],
        correctAnswer: "Pangea",
        explanation:
          "För ungefär 300 miljoner år sedan var alla kontinenter sammankopplade i superkontinenten Pangea, som sedan bröts upp av kontinentalplattornas rörelser.",
      },
      {
        question: "Vilka var de första livsformerna på jorden?",
        options: [
          "Alger och mossor",
          "Enkla bakterier",
          "Maskar och svampar",
          "Små insekter",
        ],
        correctAnswer: "Enkla bakterier",
        explanation:
          "De första livsformerna var enkla encelliga bakterier som uppstod för ungefär 3,5 miljarder år sedan.",
      },
      {
        question: "Vad är ett fossil?",
        options: [
          "Ett utdött djur som frysts in",
          "En sten som liknar ett djur",
          "Bevarade rester av forntida organismer",
          "Ett djur som mumifierats i öknen",
        ],
        correctAnswer: "Bevarade rester av forntida organismer",
        explanation:
          "Fossil är rester av eller avtryck från organismer som levde för länge sedan, bevarade i berggrund.",
      },
      {
        question: "Hur bildas de flesta fossil?",
        options: [
          "Organismen fryser in i glaciäris",
          "Organismen täcks av sediment och mineraliseras",
          "Organismen torkar ut i ökenvärme",
          "Organismen sjunker till havsbotten och förblir intakt",
        ],
        correctAnswer: "Organismen täcks av sediment och mineraliseras",
        explanation:
          "Fossilbildning sker oftast när en organism täcks av sediment som lera eller sand. Mjukdelar bryts ner men hårda delar kan mineraliseras och bevaras i miljoner år.",
      },
      {
        question: "Vad gjorde Charles Darwin känd inom vetenskapen?",
        options: [
          "Han uppfann mikroskopet",
          "Han beskrev evolutionen via naturligt urval",
          "Han kartlade jordens kontinenter",
          "Han upptäckte den första bakterien",
        ],
        correctAnswer: "Han beskrev evolutionen via naturligt urval",
        explanation:
          "Darwin (1809–1882) formulerade evolutionsteorin efter sin resa med HMS Beagle. Hans bok 'Om arternas uppkomst' (1859) är ett av vetenskapens viktigaste verk.",
      },
      {
        question:
          "Galapagosöarnas finkar har olika näbbformer beroende på vilken ö de lever på. Vad visar detta?",
        options: [
          "Att fåglar väljer näbbform själva",
          "Att alla finkar egentligen är olika arter",
          "Att naturligt urval anpassar arter till miljön",
          "Att öar skapar slumpmässiga mutationer",
        ],
        correctAnswer: "Att naturligt urval anpassar arter till miljön",
        explanation:
          "Darwins finkar är ett klassiskt exempel på naturligt urval. Olika näbbformer ger fördel beroende på tillgänglig föda på respektive ö, vilket lett till anpassning över generationer.",
      },
      {
        question:
          "Varför är variation inom en population viktig för evolution?",
        options: [
          "Den gör populationen mer synlig för rovdjur",
          "Den gör att alla individer överlever lika bra",
          "Den ger naturligt urval något att verka på",
          "Den hindrar korsning mellan arter",
        ],
        correctAnswer: "Den ger naturligt urval något att verka på",
        explanation:
          "Utan variation skulle alla individer ha samma chans att överleva. Det är skillnaderna mellan individer som gör att vissa klarar sig bättre – och för vidare sina egenskaper.",
      },
    ],
  },
  "swedish-c1": {
    id: "swedish-c1",
    type: "guide",
    eyebrow: "Svenska C1",
    title: "Svenska C1 - Skriva berättelse",
    homeTitle: "Svenska C1 - Skriva berättelse",
    homeDescription:
      "Repetera hur en berättelse byggs upp med tips, checklista och en längre exempeltext.",
    description:
      "Här kan du öva på att skriva en berättelse. En bra berättelse har en tydlig början, något som händer, en spännande höjdpunkt och ett bra avslut.",
    highlights: ["Skrivstöd", "Checklista", "Exempeltext"],
    structure: [
      {
        label: "Början",
        text: "Vem handlar det om? Var är personen? Hur börjar det?",
      },
      {
        label: "Problem",
        text: "Något förändras eller känns fel.",
      },
      {
        label: "Höjdpunkt",
        text: "Det mest spännande eller viktiga händer.",
      },
      {
        label: "Avslutning",
        text: "Berättelsen rundas av.",
      },
    ],
    checklist: [
      "Har berättelsen en början, mitt och slut?",
      "Händer något viktigt?",
      "Får man veta hur personen känner?",
      "Har du använt punkt och stor bokstav?",
      "Har du delat in texten i stycken?",
    ],
    example: {
      title: "Nyckeln under stenen",
      paragraphs: [
        "Det var egentligen en helt vanlig eftermiddag. Regnet hade precis slutat och gården bakom mormors hus glittrade av vatten. Jag gick ut bara för att få lite luft, medan mormor stod i köket och bakade. Från det öppna fönstret spred sig doften av kanelbullar, och allt kändes lugnt och tryggt.",
        "Jag följde den smala stigen ner mot äppelträdet längst bort i trädgården. Där hade jag lekt många gånger som liten, men nu kändes platsen nästan främmande. Kanske var det dimman som fortfarande låg kvar över gräset. Kanske var det tystnaden. Det enda som hördes var droppar som föll från grenarna.",
        "När jag kom fram såg jag något märkligt. Under den stora stenen bredvid trädet stack något metalliskt fram. Först trodde jag att det bara var en kapsyl eller en bit skräp, men när jag böjde mig ner såg jag att det var en gammal nyckel.",
        "Jag tog upp den. Den var kall och smutsig och mycket tyngre än jag hade väntat mig. I samma stund ropade mormor från huset att bullarna snart var klara, men jag svarade inte. Jag stod bara och stirrade på nyckeln. Det var som om hela trädgården höll andan.",
        "Plötsligt mindes jag något. För flera år sedan hade mormor berättat om ett litet skjul bakom huset. Ingen använde det längre, hade hon sagt, och nyckeln var försvunnen sedan länge.",
        "Jag vände mig om och såg skjulet mellan buskarna. Dörren lutade snett, och färgen hade flagnat av nästan helt. Hjärtat började slå snabbare. Jag visste att jag borde gå in och fika, men nyfikenheten drog i mig som en osynlig hand.",
        "Försiktigt gick jag fram till dörren. Nyckeln passade.",
        "Det klickade till så tyst att jag först trodde att jag hade inbillat mig. Sedan öppnade jag dörren några centimeter. En kall lukt av trä, damm och gammal jord slog emot mig. Ljuset utifrån nådde bara en liten bit in, men jag kunde ändå se konturerna av hyllor, lådor och ett bord i hörnet.",
        "Där inne stod en liten modell av ett hus.",
        "Jag gick närmare och såg att det inte var vilket hus som helst. Det var en exakt kopia av mormors hus, med de sneda trappstegen, de gröna fönsterluckorna och till och med äppelträdet på baksidan. På den lilla verandan stod två pyttesmå figurer. En äldre kvinna och ett barn.",
        "Jag blev stående helt stilla. Barnet i modellen hade samma röda jacka som jag hade på mig nu.",
        "Då hörde jag steg bakom mig.",
        "Jag vände mig om så snabbt att jag slog i armbågen i dörrkarmen. Mormor stod utanför skjulet. Hon såg inte arg ut, bara trött, nästan som om hon hade vetat att den här dagen skulle komma.",
        "– Jag undrade när du skulle hitta nyckeln, sa hon.",
        "Jag såg på modellen igen och sedan på henne.",
        "– Vad är det här? viskade jag.",
        "Mormor gick fram och la handen på min axel.",
        "– En berättelse som har väntat på dig, sa hon.",
        "Sedan log hon, och för första gången den dagen kände jag mig inte rädd längre. Bara nyfiken. Regnet hade slutat helt nu, och långt borta bröt solen fram mellan molnen.",
      ],
    },
    exampleNotes: [
      "Tydlig inledning",
      "Något oväntat händer",
      "Spänningen byggs upp steg för steg",
      "Miljö och känslor beskrivs",
      "Berättelsen får ett tydligt men lite mystiskt avslut",
    ],
  },
};
