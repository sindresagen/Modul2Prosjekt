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

        { animal: 'chicken', cut: 'breast', chosen:"", use: 'noe kylling bryst IKKE kan brukes til?', info: '', picture: '' },
        
    ],
    question:  "dafuk dis?",
    choices: [],
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