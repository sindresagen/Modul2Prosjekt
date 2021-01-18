const appHTML = document.getElementById("app");
const model = { 
    li: "",
    cuts: [
        { animal: 'Cattle', cut: 'Rib', use: 'Grilles ofte, tenk spare-ribs, short rib, prime rib og rib-eye-stek.', info: 'Tilsvarer tynnribbe på svin', picture: 'https://snappygoat.com/b/35ee17f09414d6292cf4a6575b6f6e9fb77fe669' },
        { animal: 'Cattle', cut: 'Chuck', use: 'Pålegg, deiger og farser', info: 'Chuck biff er et kutt av biff og er en del av sub-prime kuttet kjent som chuck. Den typiske chuckbiffen er et rektangulært snitt, omtrent 2,54 cm tykt og inneholder deler av skulderbenene, og er ofte kjent som en "7-beinbiff", da formen på skulderbenet i tverrsnitt ligner tallet "7" .', picture: 'https://cdn.pixabay.com/photo/2017/10/18/16/14/beef-2864657_960_720.png' },
        { animal: 'Cattle', cut: 'Brisket', use: 'kjøttdeig, karbonadedeig og okserull', info: 'Brisket er den fremre kjøttdelen av oksebrystet. Den skjæres ut fra baksiden av brystbena og brusken. Kjøttstykket består av to muskler. En flat, stor muskel og en spiss, stor muskel (spissbryst) som skal sitte sammen', picture: 'https://c.pxhere.com/images/14/74/42054e6f1f5b3ce4be139d0dc28b-1618383.jpg!d' },
        { animal: 'Cattle', cut: 'Plate', use: 'Brukes til grytesteking, "skirt steak" brukes i fajitas, det resterende kjøttet blir oppmalt.', info: 'Bibringe, brystbein skåret på tvers.', picture: 'https://embed.widencdn.net/img/beef/tbtkudbsls/480x360px/Short%20Ribs_Plate.psd?keep=c&u=7fueml' },
        { animal: 'Cattle', cut: 'Sirloin', use: 'Godt egnet til roastbiff, oksestek, sauteer, finere gryteretter og fondue.', info: 'Mørbradbiff, Hovedbiffen er kuttet fra mørbrad, subprimal bakerst til den korte lenden hvor T-bone, porterhouse og club biff er kuttet. Mørbrad er faktisk delt inn i flere typer biff. Den øverste mørbrad er den mest verdsatte av disse og er spesielt merket for salg under det navnet.', picture: 'https://bredas.bg/wp-content/uploads/2017/06/viber_image_2020-05-21_13-52-12.jpg' },
        { animal: 'Cattle', cut: 'Top sirloin', use: 'brukes hovedsaklig til grilling, sauté eller pannesteking', info: 'Topp mørbrad er et kutt av oksekjøtt fra primal lend eller subprimal mørbrad. Topp mørbradsteker skiller seg fra mørbradbiff ved at bein og mørbrad og runde muskler er fjernet; de resterende store musklene er gluteus medius og biceps femoris. USDA NAMP / IMPS-koder relatert til dette subprimal kuttet er 181A og 184.', picture: 'https://www.smartkitchen.com/assets/images/resources/large/1314725156petite-top-sirloin-steak.jpg' },
        { animal: 'Cattle', cut: 'Tenderloin', use: 'Kan stekes som det er, brukes i steker som beef wellington.', info: 'Indrefilet, dette er det møreste kjøttet, kan kuttes videre til filet mignon, tournedos eller indrefilet.', picture: 'https://embed.widencdn.net/img/beef/pia9ewfgx6/800x600px/Tenderloin%20Filet.psd?keep=c&u=7fueml' },
        { animal: 'Cattle', cut: 'Flank', use: 'Brukes mest til kverning, unntatt for den lange og flate flank steak(flankestek/slagside) best kjent som ingrediensen i London broil, og "inside skirt steak" brukes også til fajitas.', info: 'Flankestek; slagside.', picture: 'https://porterandyork.com/wp-content/uploads/Flank-Steak-e1527714926453.jpg' },
        { animal: 'Cattle', cut: 'Bottom sirloin', use: 'Kjøttet brukes ofte til å tilberede tri-tip og klaff biff.', info: 'Den nederste mørbradbiffen er en biff kuttet fra baksiden av dyret under øverste mørbrad og over flanken. Kjøttet regnes som magert og seigt.', picture: 'https://i.ytimg.com/vi/q8gjhS-p1hk/maxresdefault.jpg' },
        { animal: 'Cattle', cut: 'Rounds', use: 'Ulike stykker her er populære å lage roastbiff av, beef jerky og lignende, samt benene brukes til å koke kraft på.', info: 'Her inneholder det moderart mørt og mindre marmorerte kjøttstykker som kreves at det tilføres væske, eller at det ikke stekes opp til "godt stekt".', picture: 'https://tonysmarket.com/wp-content/uploads/2013/02/RoundSteak.jpg' },
        { animal: 'Cattle', cut: 'Shank', use: 'Bakknoke egner seg til grytekjøtt, kjøttdeig og kraftbein mens forknoke brukes som produksjonskjøtt til pålegg, deiger og farser.', info: 'Okseskaftet er beindelen av en ratt eller kvige. I Storbritannia er de tilsvarende kuttene med storfekjøtt og benet. På grunn av dyrets konstante bruk av denne muskelen, har den en tendens til å være tøff, tørr og tynn, så det er best når den tilberedes i lang tid på fuktig varme.', picture: 'https://embed.widencdn.net/img/beef/v8emrvccrb/800x600px/Shank%20Cross%20Cut.psd?keep=c&u=7fueml' },
        { animal: 'Cattle', cut: 'Short loin', use: 'Dette snittet gir typer biff inkludert porterhouse, stripebiff og T-bone.', info: 'Kort lende er det amerikanske navnet på et kutt av storfekjøtt som kommer fra baksiden av storfe. Den inneholder en del av ryggraden og inkluderer topplender og indrefilet.', picture: 'https://i.pinimg.com/originals/d7/6a/ac/d76aacb4dca30e9b656f953760517db5.jpg' },

        { animal: 'chicken', cut: 'breast', use: 'noe kylling bryst IKKE kan brukes til?', info: '', picture: '' },
        
    ],

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