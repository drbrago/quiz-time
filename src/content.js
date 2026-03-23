import { questions as geographyQuestions } from "./questions.js";

export const sectionOrder = ["geography", "swedish-b1", "swedish-c1"];

export const sections = {
  geography: {
    id: "geography",
    type: "quiz",
    eyebrow: "Geografi-quiz",
    title: "Geografikollen",
    homeTitle: "Geografi-quiz",
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
      retry: "Fortsätt öva så kommer du snart att känna igen ännu fler platser."
    },
    highlights: ["En fråga i taget", "Direkt feedback", "Poängräkning"],
    shuffleQuestions: true,
    shuffleOptions: true,
    questions: geographyQuestions
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
      retry: "Börja om och läs lugnt mellan raderna. Det blir lättare för varje gång."
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
          "På kvällen låg Alva länge vaken. Hon tänkte på hur Nora hade sett ut, nästan som om hon bar på något tungt som hon inte orkade dela med sig av."
        ],
        questions: [
          {
            question: "Hur var vädret på morgonen när Alva gick till skolan?",
            options: [
              "Det var varmt och soligt",
              "Det hade regnat och var kallt",
              "Det snöade kraftigt",
              "Det blåste men var torrt"
            ],
            correctAnswer: "Det hade regnat och var kallt",
            explanation:
              "I texten står att det hade regnat hela natten och att luften luktade kallt och blött."
          },
          {
            question: "Vad var ovanligt med Nora på morgonen?",
            options: [
              "Hon hade glömt sin jacka",
              "Hon kom för sent till skolan",
              "Hon vinkade inte till Alva",
              "Hon pratade med läraren"
            ],
            correctAnswer: "Hon vinkade inte till Alva",
            explanation:
              "Texten säger att Nora stod vid cykelstället men inte vinkade som hon brukade."
          },
          {
            question: "Hur märkte Alva på lektionen att något inte var som vanligt?",
            options: [
              "Nora skrattade högt hela tiden",
              "Nora ville gå hem tidigare",
              "Nora var tyst och ville arbeta ensam",
              "Nora hade glömt sina böcker"
            ],
            correctAnswer: "Nora var tyst och ville arbeta ensam",
            explanation:
              "Nora brukade räcka upp handen men var nu tyst och ville jobba ensam."
          },
          {
            question: 'Vad menas med att Nora "inte mötte hennes blick"?',
            options: [
              "Hon såg rakt på Alva",
              "Hon tittade inte på Alva",
              "Hon gick fram till Alva",
              "Hon log mot Alva"
            ],
            correctAnswer: "Hon tittade inte på Alva",
            explanation: "Uttrycket betyder att Nora undvek ögonkontakt."
          },
          {
            question: "Vad förstår man mellan raderna om Nora?",
            options: [
              "Hon är arg för att det regnar",
              "Hon är antagligen ledsen eller orolig",
              "Hon vill byta skola direkt",
              "Hon tycker inte om lektioner längre"
            ],
            correctAnswer: "Hon är antagligen ledsen eller orolig",
            explanation:
              "Det står inte rakt ut, men hennes beteende visar att något känns tungt."
          },
          {
            question: "Varför låg Alva vaken på kvällen?",
            options: [
              "Hon hade ont i magen",
              "Hon var rädd för mörkret",
              "Hon tänkte på Nora och att något verkade fel",
              "Hon hade mycket läxor"
            ],
            correctAnswer: "Hon tänkte på Nora och att något verkade fel",
            explanation:
              "I slutet står det att Alva tänkte på hur Nora såg ut och att hon verkade bära på något tungt."
          }
        ]
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
          "Sam nickade. Han förstod att vissa historier måste få vänta."
        ],
        questions: [
          {
            question: "Vad låg framför farfar på bordet?",
            options: [
              "En gammal bok",
              "En trälåda",
              "En ryggsäck",
              "En metallväska"
            ],
            correctAnswer: "En trälåda",
            explanation:
              "I början av texten står det att det låg en gammal trälåda framför farfar."
          },
          {
            question: "Hur beskrivs lådan?",
            options: [
              "Ljus och rund",
              "Röd och liten",
              "Mörk med ett metallhandtag",
              "Stor och genomskinlig"
            ],
            correctAnswer: "Mörk med ett metallhandtag",
            explanation:
              "Texten beskriver lådan som mörk, nästan svart, med ett litet metallhandtag."
          },
          {
            question: "Vad fanns i lådan?",
            options: [
              "Pengar och nycklar",
              "Fotografier, ett fickur och ett brev",
              "Kläder och böcker",
              "Kartor och pennor"
            ],
            correctAnswer: "Fotografier, ett fickur och ett brev",
            explanation: "Det står tydligt vad som låg i lådan."
          },
          {
            question: 'Vad menas med meningen "Från en tid då allt skulle börja"?',
            options: [
              "Farfar menar att han skulle börja städa",
              "Farfar tänker på en viktig tid tidigt i livet",
              "Farfar menar att dagen precis hade börjat",
              "Farfar syftar på att Sam skulle börja skolan"
            ],
            correctAnswer: "Farfar tänker på en viktig tid tidigt i livet",
            explanation:
              "Meningen syftar på en tidigare period i livet som betydde mycket."
          },
          {
            question: "Varför frågar Sam inte mer?",
            options: [
              "Han blev arg",
              "Han blev trött",
              "Han märkte att farfar blev känslosam",
              "Han hörde att någon ringde på dörren"
            ],
            correctAnswer: "Han märkte att farfar blev känslosam",
            explanation:
              "Texten visar att något i farfars ansikte fick Sam att vara tyst."
          },
          {
            question: "Vad är textens stämning?",
            options: [
              "Busig och skämtsam",
              "Stressig och högljudd",
              "Lugn och lite sorgsen eller eftertänksam",
              "Arg och hotfull"
            ],
            correctAnswer: "Lugn och lite sorgsen eller eftertänksam",
            explanation:
              "Texten har en stillsam ton och antyder minnen och känslor."
          }
        ]
      }
    ]
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
        text: "Vem handlar det om? Var är personen? Hur börjar det?"
      },
      {
        label: "Problem",
        text: "Något förändras eller känns fel."
      },
      {
        label: "Höjdpunkt",
        text: "Det mest spännande eller viktiga händer."
      },
      {
        label: "Avslutning",
        text: "Berättelsen rundas av."
      }
    ],
    checklist: [
      "Har berättelsen en början, mitt och slut?",
      "Händer något viktigt?",
      "Får man veta hur personen känner?",
      "Har du använt punkt och stor bokstav?",
      "Har du delat in texten i stycken?"
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
        "Sedan log hon, och för första gången den dagen kände jag mig inte rädd längre. Bara nyfiken. Regnet hade slutat helt nu, och långt borta bröt solen fram mellan molnen."
      ]
    },
    exampleNotes: [
      "Tydlig inledning",
      "Något oväntat händer",
      "Spänningen byggs upp steg för steg",
      "Miljö och känslor beskrivs",
      "Berättelsen får ett tydligt men lite mystiskt avslut"
    ]
  }
};
