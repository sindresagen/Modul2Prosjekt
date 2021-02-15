const appHTML = document.getElementById("app");
const model = { 
    cuts: [
        { animal: 'Cattle', name: 'Rib', chosen:"defaultChosen", use: 'Grilles ofte, tenk spare-ribs, short rib, prime rib og rib-eye-stek.', info: 'Tilsvarer tynnribbe på svin', picture: 'https://media.discordapp.net/attachments/796668478261297152/806828549612240896/rib.jpg?width=492&height=676' },
        { animal: 'Cattle', name: 'Chuck', chosen:"defaultChosen", use: 'Pålegg, deiger og farser', info: 'Chuck biff er et kutt av biff og er en del av sub-prime kuttet kjent som chuck. Den typiske chuckbiffen er et rektangulært snitt, omtrent 2,54 cm tykt og inneholder deler av skulderbenene, og er ofte kjent som en "7-beinbiff", da formen på skulderbenet i tverrsnitt ligner tallet "7" .', picture: 'https://media.discordapp.net/attachments/796668478261297152/806828544507510804/chuck.jpg?width=676&height=676', },
        { animal: 'Cattle', name: 'Brisket', chosen:"defaultChosen", use: 'kjøttdeig, karbonadedeig og okserull', info: 'Brisket er den fremre kjøttdelen av oksebrystet. Den skjæres ut fra baksiden av brystbena og brusken. Kjøttstykket består av to muskler. En flat, stor muskel og en spiss, stor muskel (spissbryst) som skal sitte sammen', picture: 'https://media.discordapp.net/attachments/796668478261297152/806828540054077450/brisket.jpg' },
        { animal: 'Cattle', name: 'Plate', chosen:"defaultChosen", use: 'Brukes til grytesteking, "skirt steak" brukes i fajitas, det resterende kjøttet blir oppmalt.', info: 'Bibringe, brystbein skåret på tvers.', picture: 'https://media.discordapp.net/attachments/796668478261297152/806828546634285066/plate.jpg' },
        { animal: 'Cattle', name: 'Sirloin', chosen:"defaultChosen", use: 'Godt egnet til roastbiff, oksestek, sauteer, finere gryteretter og fondue.', info: 'Mørbradbiff, Hovedbiffen er kuttet fra mørbrad, subprimal bakerst til den korte lenden hvor T-bone, porterhouse og club biff er kuttet. Mørbrad er faktisk delt inn i flere typer biff. Den øverste mørbrad er den mest verdsatte av disse og er spesielt merket for salg under det navnet.', picture: 'https://media.discordapp.net/attachments/796668478261297152/806828559465316352/sirloin.jpeg?width=1014&height=676' },
        { animal: 'Cattle', name: 'Top sirloin', chosen:"defaultChosen", use: 'brukes hovedsaklig til grilling, sauté eller pannesteking', info: 'Topp mørbrad er et kutt av oksekjøtt fra primal lend eller subprimal mørbrad. Topp mørbradsteker skiller seg fra mørbradbiff ved at bein og mørbrad og runde muskler er fjernet; de resterende store musklene er gluteus medius og biceps femoris. USDA NAMP / IMPS-koder relatert til dette subprimal kuttet er 181A og 184.', picture: 'https://media.discordapp.net/attachments/796668478261297152/806828580771332106/Topsirloin.jpg' },
        { animal: 'Cattle', name: 'Tenderloin', chosen:"defaultChosen", use: 'Kan stekes som det er, brukes i steker som beef wellington.', info: 'Indrefilet, dette er det møreste kjøttet, kan kuttes videre til filet mignon, tournedos eller indrefilet.', picture: 'https://media.discordapp.net/attachments/796668478261297152/806830641173495818/tenderloin.jpeg?width=1013&height=676' },
        { animal: 'Cattle', name: 'Flank', chosen:"defaultChosen", use: 'Brukes mest til kverning, unntatt for den lange og flate flank steak(flankestek/slagside) best kjent som ingrediensen i London broil, og "inside skirt steak" brukes også til fajitas.', info: 'Flankestek; slagside.', picture: 'https://media.discordapp.net/attachments/796668478261297152/806828545740898354/flank.jpg?width=1014&height=676' },
        { animal: 'Cattle', name: 'Bottom sirloin', chosen:"defaultChosen", use: 'Kjøttet brukes ofte til å tilberede tri-tip og klaff biff.', info: 'Den nederste mørbradbiffen er en biff kuttet fra baksiden av dyret under øverste mørbrad og over flanken. Kjøttet regnes som magert og seigt.', picture: 'https://media.discordapp.net/attachments/796668478261297152/806828536844255252/Bottomsirloin.jpg' },
        { animal: 'Cattle', name: 'Rounds', chosen:"defaultChosen", use: 'Ulike stykker her er populære å lage roastbiff av, beef jerky og lignende, samt benene brukes til å koke kraft på.', info: 'Her inneholder det moderart mørt og mindre marmorerte kjøttstykker som kreves at det tilføres væske, eller at det ikke stekes opp til "godt stekt".', picture: 'https://media.discordapp.net/attachments/796668478261297152/806828550979452978/rounds.jpg' },
        { animal: 'Cattle', name: 'Shank', chosen:"defaultChosen", use: 'Bakknoke egner seg til grytekjøtt, kjøttdeig og kraftbein mens forknoke brukes som produksjonskjøtt til pålegg, deiger og farser.', info: 'Okseskaftet er beindelen av en ratt eller kvige. I Storbritannia er de tilsvarende kuttene med storfekjøtt og benet. På grunn av dyrets konstante bruk av denne muskelen, har den en tendens til å være tøff, tørr og tynn, så det er best når den tilberedes i lang tid på fuktig varme.', picture: 'https://media.discordapp.net/attachments/796668478261297152/806828554268573696/shank.jpg' },
        { animal: 'Cattle', name: 'Short loin', chosen:"defaultChosen", use: 'Dette snittet gir typer biff inkludert porterhouse, stripebiff og T-bone.', info: 'Kort lende er det amerikanske navnet på et kutt av storfekjøtt som kommer fra baksiden av storfe. Den inneholder en del av ryggraden og inkluderer topplender og indrefilet.', picture: 'https://media.discordapp.net/attachments/796668478261297152/806828559980953651/shortloin.png' },

        { animal: 'Chicken', name: 'Breast', chosen:"defaultChosen", use: 'Kyllingfilet/brystfilet kan helstekes, skjæres i biter og brukes i gryter eller wok.', info: 'Kyllingbryst har en mild egensmak som gjør at alle sorter krydder og urter kan tilsettes. Kyllingbryst kan også fås med skinnet på og med vingeben som ofte gir ekstra smak. Du kan fylle med smakstilsetninger under skinnet ved tilberedning for mer smak(f.eks. smør, sitron og urter).', picture: 'https://media.discordapp.net/attachments/796668478261297152/808316636418801704/chick-breast.jpg' },
        { animal: 'Chicken', name: 'Back', chosen:"defaultChosen", use: 'Back som det heter i de forente stater er selve kjernen i kyllingen.', info: 'Denne kjernen er det som er igjen når alle stykkene er kuttet vekk og brukes ofte til kraft og man kan plukke det resterende kjøttet av benene.', picture: 'https://media.discordapp.net/attachments/796668478261297152/808316652961267712/Chicken-Back.jpg' },
        { animal: 'Chicken', name: 'Leg', chosen:"defaultChosen", use: 'Leg i dette tilfellet tilsvarer kyllinglår eller kyllingklubber.', info: 'Kyllinglår og klubber finnes på samme måte som vinger som frosne eller ferske pakker du får kjøpt på butikken samt ferdig grillede varianter.', picture: 'https://media.discordapp.net/attachments/796668478261297152/808316669734158336/chick-leg.jpg' },
        { animal: 'Chicken', name: 'Neck', chosen:"defaultChosen", use: 'Kyllingnakke kan brukes til å lage kraft og sauser.', info: 'Nakken kan også spises, gjerne ved at du stapper nakken inni kroppen på en hel fugl som gjør at det blir meget mørt og godt. Fun fact: Kan også brukes som agn for å fange krabber!', picture: 'https://media.discordapp.net/attachments/796668478261297152/808316685706330152/chick-neck.jpg' },
        { animal: 'Chicken', name: 'Thigh', chosen:"defaultChosen", use: 'Hele lår kan stekes som de er, eller deles i to ved leddet til kyllingklubber og overlår.', info: 'Kyllingklubber egner seg best til steking, mens overlårene kan også brukes til kokte retter. Lårfilet er et mørkere og mye mørere, mindre tørt stykke enn brystfilet.', picture: 'https://media.discordapp.net/attachments/796668478261297152/808316707780952084/chick-thigh.jpg' },
        { animal: 'Chicken', name: 'Wings', chosen:"defaultChosen", use: 'Kyllingvinger er en veldig populær kosemat!', info: 'Du kan finne rå eller frosne kyllingvinger på butikken, i tillegg til ferdig grillede vinger med et vidt sortement av krydder og smaker.', picture: 'https://media.discordapp.net/attachments/796668478261297152/808316728169857024/chick-wings.jpg' },
        
        { animal: 'Pork', name: 'Head', chosen:"defaultChosen", use: 'Brukes tradisjonelt til sylte.', info: 'Kan også brukes til stuinger, langtidsstekes over lav varme så det blir utrolig mørt og spises med fingrene med diverse tilbehør som flatbrød.', picture: 'https://media.discordapp.net/attachments/796668478261297152/808281865492496424/PorkHead.jpg' },
        { animal: 'Pork', name: 'Blade shoulder', chosen:"defaultChosen", use: 'Kan brukes til nakkestek/koteletter eller pulled pork.', info: 'Skjæres til nakkekoteletter som kan grilles eller stekes. Ofte kalt nakke på norsk.', picture: 'https://media.discordapp.net/attachments/796668478261297152/808281988246274058/Pork-shoulder.jpg' },
        { animal: 'Pork', name: 'Arm shoulder', chosen:"defaultChosen", use: 'Bog har et stort anvendingsområde og kan brukes som bogsteik, skåret i skiver til grilling eller i biter til gryteretter.', info: 'Dette stykket er kalt bog på norsk. Det kan også serveres som lettsaltet kokekjøtt og blir brukt som produksjonskjøtt til pålegg, deiger og farser.', picture: 'https://media.discordapp.net/attachments/796668478261297152/808281833489956914/Pork-arm.jpg' },
        { animal: 'Pork', name: 'Loin', chosen:"defaultChosen", use: 'Sivnekam består av indre- og ytrefilet med bein.', info: 'Filetene kan skjæres ut og helstekes eller brukes som medaljonger. Kotelettkammen kan brukes hel, med eller uten bein, eller kan deles opp til koteletter. Hamburgerrygg er lettsaltet og røkt svinekam uten bein og kan brukes både som middag og til pålegg. Beina kan brukes som baby back spareribs.', picture: 'https://media.discordapp.net/attachments/796668478261297152/808281931799330816/Pork-Loin-Chop.jpg' },
        { animal: 'Pork', name: 'Spare rib', chosen:"defaultChosen", use: 'Dette brukes til ribbe, spare ribs, grillribbe, bacon og lettsaltet sideflesk.', info: 'Spare rib kan bli kalt for side på norsk men har samme bruksområder på norsk og engelsk.', picture: 'https://media.discordapp.net/attachments/796668478261297152/808282031292416000/Pork-Spare-Ribs.jpg' },
        { animal: 'Pork', name: 'Side', chosen:"defaultChosen", use: 'Brukes som kokt og lettsaltet til sylterull, ribberull og sylteflesk.', info: 'Det som på engelsk kalles side kalles for buklist på norsk. Dette er den nederste, beinfrie delen på siden på grisen.  Kan også tas med i hodesylte. Blir ofte brukt som en del av ribba.', picture: 'https://media.discordapp.net/attachments/796668478261297152/808282003216138240/Pork-side.jpg' },
        { animal: 'Pork', name: 'Leg', chosen:"defaultChosen", use: 'Skinke, som også inneholder mørbrad.', info: 'Mørbrad kan brukes som grytesteik, lettsaltet kokekjøøt, skjæres i biter til gryteretter, supper og wok. Skinken kan brukes hel med mørbrad til spekeskinke og saltet, røkt og kokt skinke. Kan deles opp til flatbiff og skinkestek. Flatbiffen kan skjæres til skinkebiff, svinesnitsel eller i biter til gryter, supper og wok.', picture: 'https://media.discordapp.net/attachments/796668478261297152/808281908520943676/pork-leg.png' },
        { animal: 'Pork', name: 'Hock', chosen:"defaultChosen", use: 'Svineknoke og labb. Ofte røkt.', info: 'Svineknoke brukes ferskt, lettsaltet eller lettsaltet og røkt. Brukes i retter som ertesuppe, betasuppe og lapskaus. Labb brukes lettsaltet og kokt til syltelabber.', picture: 'https://media.discordapp.net/attachments/796668478261297152/808281888849526804/Pork-hock.PNG' },
    ],
    chosenAnimal: "Cattle",
    question: "dafuk dis?",
    rightAnswer: "",
    choices: [],
    tempArr:[],
    selectedRandomCut: "",
    quiz: [
        { animal: 'Cattle', name: 'Rib', selected: true, ifTrue:"",},
        { animal: 'Cattle', name: 'Chuck', selected: false, ifTrue:"", },
        { animal: 'Cattle', name: 'Brisket', selected: false, ifTrue:"", },
        { animal: 'Cattle', name: 'Plate', selected: false, ifTrue:"", },
        { animal: 'Cattle', name: 'Sirloin', selected: false, ifTrue:"", },
        { animal: 'Cattle', name: 'Top sirloin', selected: false, ifTrue:"", },
        { animal: 'Cattle', name: 'Tenderloin', selected: false, ifTrue:"", },
        { animal: 'Cattle', name: 'Flank', selected: false, ifTrue:"", },
        { animal: 'Cattle', name: 'Bottom sirloin', selected: false, ifTrue:"", },
        { animal: 'Cattle', name: 'Rounds', selected: false, ifTrue:"", },
        { animal: 'Cattle', name: 'Shank', selected: false, ifTrue:"", },
        { animal: 'Cattle', name: 'Short loin', selected: false,ifTrue:"", },
      
    ],
    test: true,
    chosenCut: "chosen",
    tempChosen:"",
    quizPage: {
        placeholderMellomLagring:{
            mellomlagringRiktigsvar:{},
            mellomlagringFeilsvar:{}
        },
        quizResult: {
            placeholderRiktig:{},
            placeholderFeil:{}
        },
    },  
};