const appHTML = document.getElementById("app");
let chosenIMG = ``;
const model = { 
    cuts: [
        { animal: 'Cattle', name: 'Rib', use: 'Grilles ofte, tenk spare-ribs, short rib, prime rib og rib-eye-stek.', info: 'Tilsvarer tynnribbe på svin', picture: 'https://snappygoat.com/b/35ee17f09414d6292cf4a6575b6f6e9fb77fe669' },
        { animal: 'Cattle', name: 'Chuck', use: 'Pålegg, deiger og farser', info: 'Chuck biff er et kutt av biff og er en del av sub-prime kuttet kjent som chuck. Den typiske chuckbiffen er et rektangulært snitt, omtrent 2,54 cm tykt og inneholder deler av skulderbenene, og er ofte kjent som en "7-beinbiff", da formen på skulderbenet i tverrsnitt ligner tallet "7" .', picture: 'https://cdn.pixabay.com/photo/2017/10/18/16/14/beef-2864657_960_720.png', },
        { animal: 'Cattle', name: 'Brisket', use: 'kjøttdeig, karbonadedeig og okserull', info: 'Brisket er den fremre kjøttdelen av oksebrystet. Den skjæres ut fra baksiden av brystbena og brusken. Kjøttstykket består av to muskler. En flat, stor muskel og en spiss, stor muskel (spissbryst) som skal sitte sammen', picture: 'https://c.pxhere.com/images/14/74/42054e6f1f5b3ce4be139d0dc28b-1618383.jpg!d' },
        { animal: 'Cattle', name: 'Plate', use: 'Brukes til grytesteking, "skirt steak" brukes i fajitas, det resterende kjøttet blir oppmalt.', info: 'Bibringe, brystbein skåret på tvers.', picture: 'https://embed.widencdn.net/img/beef/tbtkudbsls/480x360px/Short%20Ribs_Plate.psd?keep=c&u=7fueml' },
        { animal: 'Cattle', name: 'Sirloin', use: 'Godt egnet til roastbiff, oksestek, sauteer, finere gryteretter og fondue.', info: 'Mørbradbiff, Hovedbiffen er kuttet fra mørbrad, subprimal bakerst til den korte lenden hvor T-bone, porterhouse og club biff er kuttet. Mørbrad er faktisk delt inn i flere typer biff. Den øverste mørbrad er den mest verdsatte av disse og er spesielt merket for salg under det navnet.', picture: 'https://bredas.bg/wp-content/uploads/2017/06/viber_image_2020-05-21_13-52-12.jpg' },
        { animal: 'Cattle', name: 'Top sirloin', use: 'brukes hovedsaklig til grilling, sauté eller pannesteking', info: 'Topp mørbrad er et kutt av oksekjøtt fra primal lend eller subprimal mørbrad. Topp mørbradsteker skiller seg fra mørbradbiff ved at bein og mørbrad og runde muskler er fjernet; de resterende store musklene er gluteus medius og biceps femoris. USDA NAMP / IMPS-koder relatert til dette subprimal kuttet er 181A og 184.', picture: 'https://www.smartkitchen.com/assets/images/resources/large/1314725156petite-top-sirloin-steak.jpg' },
        { animal: 'Cattle', name: 'Tenderloin', use: 'Kan stekes som det er, brukes i steker som beef wellington.', info: 'Indrefilet, dette er det møreste kjøttet, kan kuttes videre til filet mignon, tournedos eller indrefilet.', picture: 'https://embed.widencdn.net/img/beef/pia9ewfgx6/800x600px/Tenderloin%20Filet.psd?keep=c&u=7fueml' },
        { animal: 'Cattle', name: 'Flank', use: 'Brukes mest til kverning, unntatt for den lange og flate flank steak(flankestek/slagside) best kjent som ingrediensen i London broil, og "inside skirt steak" brukes også til fajitas.', info: 'Flankestek; slagside.', picture: 'https://porterandyork.com/wp-content/uploads/Flank-Steak-e1527714926453.jpg' },
        { animal: 'Cattle', name: 'Bottom sirloin', use: 'Kjøttet brukes ofte til å tilberede tri-tip og klaff biff.', info: 'Den nederste mørbradbiffen er en biff kuttet fra baksiden av dyret under øverste mørbrad og over flanken. Kjøttet regnes som magert og seigt.', picture: 'https://i.ytimg.com/vi/q8gjhS-p1hk/maxresdefault.jpg' },
        { animal: 'Cattle', name: 'Rounds', use: 'Ulike stykker her er populære å lage roastbiff av, beef jerky og lignende, samt benene brukes til å koke kraft på.', info: 'Her inneholder det moderart mørt og mindre marmorerte kjøttstykker som kreves at det tilføres væske, eller at det ikke stekes opp til "godt stekt".', picture: 'https://tonysmarket.com/wp-content/uploads/2013/02/RoundSteak.jpg' },
        { animal: 'Cattle', name: 'Shank', use: 'Bakknoke egner seg til grytekjøtt, kjøttdeig og kraftbein mens forknoke brukes som produksjonskjøtt til pålegg, deiger og farser.', info: 'Okseskaftet er beindelen av en ratt eller kvige. I Storbritannia er de tilsvarende kuttene med storfekjøtt og benet. På grunn av dyrets konstante bruk av denne muskelen, har den en tendens til å være tøff, tørr og tynn, så det er best når den tilberedes i lang tid på fuktig varme.', picture: 'https://embed.widencdn.net/img/beef/v8emrvccrb/800x600px/Shank%20Cross%20Cut.psd?keep=c&u=7fueml' },
        { animal: 'Cattle', name: 'Short loin', use: 'Dette snittet gir typer biff inkludert porterhouse, stripebiff og T-bone.', info: 'Kort lende er det amerikanske navnet på et kutt av storfekjøtt som kommer fra baksiden av storfe. Den inneholder en del av ryggraden og inkluderer topplender og indrefilet.', picture: 'https://i.pinimg.com/originals/d7/6a/ac/d76aacb4dca30e9b656f953760517db5.jpg' },

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

const cowPics = [
    { shankR: `<svg class="shankR" xmlns="http://www.w3.org/2000/svg"
    width="299.471mm" height="178.836mm"
    viewBox="0 0 1132 676">
    <path onclick="style=' z-index: 10; stroke: blue; stroke-width: 5px'" id="Selection"
       fill="red" stroke="black" stroke-width="1"
       d="M 606.00,296.42
          C 611.64,295.79 618.73,296.34 621.69,302.04
            623.63,305.80 623.83,320.19 624.04,325.00
            624.78,342.13 629.80,373.94 607.00,378.98
            604.25,379.59 601.83,380.02 599.00,379.82
            580.44,378.50 564.82,372.73 551.00,359.91
            551.00,359.91 531.71,338.17 531.71,338.17
            531.71,338.17 520.04,328.82 520.04,328.82
            515.14,324.31 508.47,315.70 507.33,309.00
            506.74,305.55 506.90,301.21 510.23,299.17
            512.69,297.67 518.07,297.97 521.00,298.00
            521.00,298.00 533.00,298.98 533.00,298.98
            533.00,298.98 549.00,298.00 549.00,298.00
            549.00,298.00 583.00,298.00 583.00,298.00
            583.00,298.00 595.00,297.09 595.00,297.09
            595.00,297.09 606.00,296.42 606.00,296.42 Z" />
</svg>`},
    { shankF: `<svg class="shankF" xmlns="http://www.w3.org/2000/svg"
    width="299.471mm" height="178.836mm"
    viewBox="0 0 1132 676">
 <path onclick="style=' z-index: 10; stroke: blue; stroke-width: 5px'" id="Selection"
       fill="red" stroke="black" stroke-width="1"
       d="M 533.02,300.20
          C 538.61,299.55 548.89,300.00 555.00,300.20
            555.00,300.20 592.00,300.20 592.00,300.20
            592.00,300.20 598.00,300.20 598.00,300.20
            610.28,302.49 601.21,315.50 601.18,323.00
            601.18,323.00 601.79,331.00 601.79,331.00
            601.25,341.27 594.07,362.63 586.82,369.81
            583.87,372.73 580.03,374.61 576.00,375.48
            567.14,377.39 559.10,373.15 553.04,366.98
            543.57,357.36 533.55,337.48 531.95,324.00
            530.62,312.81 522.30,305.01 533.02,300.20 Z" />
</svg>` },

    { round: `<svg class="round" xmlns="http://www.w3.org/2000/svg"
    width="299.471mm" height="178.836mm"
    viewBox="0 0 1132 676">
 <path onclick="style=' z-index: 10; stroke: blue; stroke-width: 5px'" id="Selection"
       fill="orchid" stroke="black" stroke-width="1"
       d="M 563.00,182.21
          C 563.00,182.21 592.00,182.21 592.00,182.21
            601.22,182.04 616.48,183.97 622.15,192.04
            627.49,199.65 623.25,205.38 624.33,212.00
            624.33,212.00 632.80,233.00 632.80,233.00
            654.30,287.33 654.48,356.62 641.12,413.00
            641.12,413.00 625.00,468.00 625.00,468.00
            623.24,473.17 618.81,486.16 614.79,489.30
            610.89,492.35 596.29,492.99 591.00,493.00
            591.00,493.00 545.00,493.00 545.00,493.00
            545.00,493.00 526.00,494.00 526.00,494.00
            520.50,493.97 514.74,493.89 514.12,486.98
            513.81,483.45 515.80,475.79 516.65,472.00
            516.65,472.00 520.72,449.00 520.72,449.00
            523.23,428.84 523.03,409.27 523.00,389.00
            523.00,389.00 522.09,377.00 522.09,377.00
            522.09,377.00 517.27,335.00 517.27,335.00
            513.28,307.88 506.06,273.09 497.98,247.00
            497.98,247.00 493.35,234.00 493.35,234.00
            493.35,234.00 485.81,211.00 485.81,211.00
            484.13,206.58 481.31,199.51 484.60,195.22
            487.80,191.04 499.75,190.12 505.00,189.25
            505.00,189.25 543.00,184.17 543.00,184.17
            543.00,184.17 563.00,182.21 563.00,182.21 Z" />
</svg>` },

    { bottomSirloin: `<svg class="bottomSirloin" xmlns="http://www.w3.org/2000/svg"
    width="299.471mm" height="178.836mm"
    viewBox="0 0 1132 676">
 <path onclick="style=' z-index: 10; stroke: blue; stroke-width: 5px'" id="Selection"
       fill="fuchsia" stroke="black" stroke-width="1"
       d="M 547.00,256.21
          C 547.00,256.21 572.00,256.21 572.00,256.21
            572.00,256.21 609.00,257.29 609.00,257.29
            614.80,258.00 626.56,259.79 630.43,264.22
            634.63,269.03 635.67,285.36 636.03,292.00
            636.03,292.00 638.00,315.00 638.00,315.00
            638.00,315.00 638.00,353.00 638.00,353.00
            637.85,365.74 633.74,392.38 630.63,405.00
            629.18,410.86 628.17,419.52 620.99,420.77
            610.89,422.53 596.13,408.65 587.00,403.43
            569.36,393.33 542.01,385.28 522.00,381.00
            522.00,381.00 511.00,378.45 511.00,378.45
            505.52,377.34 496.00,376.83 494.74,369.98
            494.13,366.67 496.57,360.30 497.67,357.00
            500.26,349.21 502.23,342.09 503.74,334.00
            505.68,323.57 507.98,303.44 507.96,293.00
            507.96,293.00 507.96,279.00 507.96,279.00
            507.63,274.89 506.78,272.62 507.04,268.00
            507.48,260.47 512.20,258.59 519.00,258.09
            519.00,258.09 533.00,257.04 533.00,257.04
            533.00,257.04 547.00,256.21 547.00,256.21 Z" />
</svg>` },

    { topSirloin: `<svg class="topSirloin" xmlns="http://www.w3.org/2000/svg"
    width="299.471mm" height="178.836mm"
    viewBox="0 0 1132 676">
 <path onclick="style=' z-index: 10; stroke: blue; stroke-width: 5px'" id="Selection #1"
       fill="lightpink" stroke="black" stroke-width="1"
       d="M 601.00,313.42
          C 605.30,312.90 616.25,312.04 619.61,314.74
            622.37,316.95 623.33,321.69 624.12,325.00
            624.12,325.00 628.92,350.00 628.92,350.00
            629.57,353.99 630.60,358.12 627.35,361.35
            624.17,364.52 619.92,363.40 616.00,362.75
            608.83,361.57 601.26,360.03 594.00,360.00
            594.00,360.00 548.00,360.00 548.00,360.00
            548.00,360.00 520.00,362.00 520.00,362.00
            516.45,362.04 511.14,362.46 508.22,360.26
            506.13,358.69 505.28,356.45 504.60,354.00
            503.31,348.41 500.68,332.62 504.60,328.28
            508.16,324.14 524.10,323.45 530.00,322.58
            530.00,322.58 581.00,315.28 581.00,315.28
            581.00,315.28 601.00,313.42 601.00,313.42 Z" />
</svg>` },

    { sirloin: `<svg class="sirloin" xmlns="http://www.w3.org/2000/svg"
    width="299.471mm" height="178.836mm"
    viewBox="0 0 1132 676">
 <path onclick="style=' z-index: 10; stroke: blue; stroke-width: 5px'" id="Selection"
       fill="lawngreen" stroke="black" stroke-width="1"
       d="M 606.00,305.43
          C 608.82,305.16 611.19,304.82 613.61,306.74
            616.95,309.39 621.97,326.13 623.73,331.00
            625.46,336.01 628.48,341.06 623.73,345.39
            618.69,350.07 604.90,353.65 598.00,355.72
            598.00,355.72 551.00,366.20 551.00,366.20
            551.00,366.20 523.02,370.97 523.02,370.97
            516.80,370.87 516.37,367.33 515.21,362.00
            515.21,362.00 507.00,332.00 507.00,332.00
            505.86,328.52 502.85,321.92 506.44,319.14
            509.16,317.03 514.70,317.16 518.00,316.83
            518.00,316.83 541.00,314.96 541.00,314.96
            541.00,314.96 606.00,305.43 606.00,305.43 Z" />
</svg>` },

    { tenderloin: `<svg class="tenderloin" xmlns="http://www.w3.org/2000/svg"
    width="299.471mm" height="178.836mm"
    viewBox="0 0 1132 676">
 
</svg>` },

    { flank: `<svg class="flank" xmlns="http://www.w3.org/2000/svg"
    width="299.471mm" height="178.836mm"
    viewBox="0 0 1132 676">
 <path onclick="style=' z-index: 10; stroke: blue; stroke-width: 5px'" id="Selection"
       fill="cyan" stroke="black" stroke-width="1"
       d="M 448.05,295.91
          C 454.99,294.02 462.02,295.43 469.00,295.91
            469.00,295.91 478.00,295.91 478.00,295.91
            478.00,295.91 509.00,298.83 509.00,298.83
            551.39,302.89 593.87,307.48 635.00,319.29
            648.90,323.28 663.11,328.20 676.00,334.76
            679.82,336.70 687.90,340.75 689.16,345.02
            690.85,350.79 681.98,352.82 678.00,353.76
            678.00,353.76 637.00,361.42 637.00,361.42
            599.06,367.31 561.17,371.52 523.00,375.17
            523.00,375.17 498.00,378.00 498.00,378.00
            498.00,378.00 490.00,378.00 490.00,378.00
            490.00,378.00 459.00,381.00 459.00,381.00
            455.47,381.04 449.19,381.55 446.42,379.26
            443.25,376.65 442.75,369.92 442.28,366.00
            442.28,366.00 441.00,328.00 441.00,328.00
            441.01,322.75 442.13,303.00 444.31,299.11
            445.52,296.95 446.11,296.90 448.05,295.91 Z" />
</svg>` },

    { shortloin: `<svg class="shortloin" xmlns="http://www.w3.org/2000/svg"
    width="299.471mm" height="178.836mm"
    viewBox="0 0 1132 676">
 <path onclick="style=' z-index: 10; stroke: blue; stroke-width: 5px'" id="Selection"
       fill="lawngreen" stroke="black" stroke-width="1"
       d="M 534.00,304.00
          C 549.51,308.48 585.31,307.03 603.00,307.00
            603.00,307.00 627.00,306.00 627.00,306.00
            629.39,306.00 632.78,305.87 634.98,306.74
            642.11,309.54 642.21,321.38 642.95,328.00
            642.95,328.00 645.00,358.00 645.00,358.00
            645.00,358.00 645.92,371.00 645.92,371.00
            645.92,371.00 645.04,379.00 645.04,379.00
            645.04,379.00 645.04,388.00 645.04,388.00
            644.98,401.84 640.65,424.76 636.33,438.00
            632.67,449.23 632.16,455.28 619.00,454.99
            619.00,454.99 584.00,450.28 584.00,450.28
            584.00,450.28 567.00,448.83 567.00,448.83
            567.00,448.83 551.00,447.04 551.00,447.04
            551.00,447.04 511.00,444.09 511.00,444.09
            505.52,443.71 497.51,445.03 493.53,440.70
            488.47,435.70 492.67,420.47 493.53,414.00
            493.53,414.00 503.09,354.00 503.09,354.00
            503.09,354.00 504.00,342.00 504.00,342.00
            504.04,314.03 503.39,296.44 495.71,269.00
            495.71,269.00 489.05,248.00 489.05,248.00
            487.76,244.42 486.08,238.89 487.74,235.21
            489.27,231.81 492.74,231.37 496.00,230.87
            496.00,230.87 517.00,229.00 517.00,229.00
            517.00,229.00 534.00,227.00 534.00,227.00
            534.00,227.00 542.00,227.00 542.00,227.00
            542.00,227.00 589.00,222.19 589.00,222.19
            595.85,221.18 611.52,217.82 616.78,222.19
            620.38,225.58 624.10,238.96 625.58,244.00
            627.45,250.40 633.72,268.28 630.69,273.89
            627.70,279.42 611.16,280.90 605.00,282.21
            581.06,287.30 556.53,292.31 534.00,302.00
            534.00,302.00 534.00,304.00 534.00,304.00 Z" />
</svg>
` },

    { plate: `<svg class="plate" xmlns="http://www.w3.org/2000/svg"
    width="299.471mm" height="178.836mm"
    viewBox="0 0 1132 676">
 <path onclick="style=' z-index: 10; stroke: blue; stroke-width: 5px'" id="Selection"
       fill="cornflowerblue" stroke="black" stroke-width="1"
       d="M 500.00,284.14
          C 500.00,284.14 536.00,284.14 536.00,284.14
            536.00,284.14 597.00,284.14 597.00,284.14
            597.00,284.14 612.00,285.00 612.00,285.00
            612.00,285.00 656.00,285.83 656.00,285.83
            660.64,286.27 667.86,285.00 671.28,288.65
            674.65,292.26 673.28,299.46 672.92,304.00
            672.92,304.00 672.00,342.00 672.00,342.00
            672.01,350.03 677.07,368.21 669.87,372.91
            666.54,375.09 661.85,374.91 658.00,375.42
            658.00,375.42 647.00,376.09 647.00,376.09
            647.00,376.09 623.00,378.08 623.00,378.08
            623.00,378.08 532.00,385.83 532.00,385.83
            532.00,385.83 512.00,387.28 512.00,387.28
            512.00,387.28 477.00,391.07 477.00,391.07
            472.11,391.52 465.53,392.36 461.28,389.15
            455.83,385.03 459.22,368.43 459.96,362.00
            459.96,362.00 459.96,352.00 459.96,352.00
            459.96,352.00 461.00,340.00 461.00,340.00
            461.00,340.00 461.00,297.00 461.00,297.00
            461.02,286.25 463.68,285.02 474.00,285.00
            474.00,285.00 500.00,284.14 500.00,284.14 Z" />
</svg>` },

    { rib: `<svg class="rib" xmlns="http://www.w3.org/2000/svg"
    width="299.471mm" height="178.836mm"
    viewBox="0 0 1132 676">
 <path onclick="style=' z-index: 10; stroke: blue; stroke-width: 5px'" id="Selection"
       fill="orange" stroke="black" stroke-width="1"
       d="M 450.11,232.74
          C 456.65,231.08 466.94,233.43 474.00,233.91
            474.00,233.91 509.00,236.00 509.00,236.00
            509.00,236.00 526.00,237.00 526.00,237.00
            526.00,237.00 564.00,237.00 564.00,237.00
            564.00,237.00 579.00,236.00 579.00,236.00
            579.00,236.00 595.00,236.00 595.00,236.00
            595.00,236.00 625.00,234.00 625.00,234.00
            625.00,234.00 644.00,233.00 644.00,233.00
            649.60,232.94 658.42,231.36 662.96,234.09
            667.99,237.11 669.21,242.86 671.05,248.00
            674.92,258.79 678.55,271.76 680.80,283.00
            685.01,304.05 686.03,317.66 686.00,339.00
            685.97,355.99 680.29,386.51 677.25,404.00
            677.25,404.00 672.92,428.00 672.92,428.00
            672.16,432.49 671.67,437.43 667.87,440.49
            664.53,443.18 660.06,443.08 656.00,442.99
            656.00,442.99 642.00,442.00 642.00,442.00
            642.00,442.00 620.00,441.00 620.00,441.00
            620.00,441.00 478.00,441.00 478.00,441.00
            472.78,441.03 465.68,442.96 461.21,440.43
            456.89,437.99 457.03,433.33 457.00,429.00
            457.00,429.00 456.04,417.00 456.04,417.00
            456.04,417.00 456.04,405.00 456.04,405.00
            456.04,405.00 454.96,390.00 454.96,390.00
            454.96,390.00 454.96,377.00 454.96,377.00
            454.96,377.00 454.00,365.00 454.00,365.00
            454.00,365.00 452.09,332.00 452.09,332.00
            452.09,332.00 448.83,277.00 448.83,277.00
            448.83,277.00 446.90,256.00 446.90,256.00
            446.90,256.00 446.90,247.00 446.90,247.00
            446.03,241.20 444.41,236.36 450.11,232.74 Z" />
</svg>` },

    { brisket: `<svg class="brisket" xmlns="http://www.w3.org/2000/svg"
    width="299.471mm" height="178.836mm"
    viewBox="0 0 1132 676">
 <path onclick="style=' z-index: 10; stroke: blue; stroke-width: 5px'" id="Selection"
       fill="powderblue" stroke="black" stroke-width="1"
       d="M 617.00,286.21
          C 617.00,286.21 636.00,286.21 636.00,286.21
            647.66,286.02 649.86,289.41 650.00,301.00
            650.00,301.00 649.00,358.00 649.00,358.00
            649.00,358.00 647.13,379.00 647.13,379.00
            646.59,382.71 646.21,385.88 642.87,388.26
            640.03,390.28 636.31,389.99 633.00,390.00
            633.00,390.00 614.00,390.00 614.00,390.00
            614.00,390.00 598.00,389.00 598.00,389.00
            598.00,389.00 587.00,389.00 587.00,389.00
            587.00,389.00 566.00,387.08 566.00,387.08
            557.08,386.37 546.18,385.39 538.00,381.69
            529.64,377.91 522.24,371.05 516.46,364.00
            504.92,349.92 495.72,331.69 488.58,315.00
            486.56,310.29 481.18,300.94 484.74,296.28
            488.06,291.93 501.70,292.06 507.00,292.00
            507.00,292.00 521.00,291.00 521.00,291.00
            521.00,291.00 560.00,289.00 560.00,289.00
            560.00,289.00 577.00,287.96 577.00,287.96
            577.00,287.96 589.00,287.96 589.00,287.96
            589.00,287.96 600.00,287.00 600.00,287.00
            605.70,286.97 611.34,287.23 617.00,286.21 Z" />
</svg>` },

    { chuck: `<svg class="chuck"
    xmlns:svg="http://www.w3.org/2000/svg"
    xmlns="http://www.w3.org/2000/svg"
    width="56.142818mm"
    height="56.142818mm"
    viewBox="0 0 212.21978 269.30879"
    version="1.1"
    id="svg20">
   
   </svg>` }, 

   { wholeCow: `<svg class="cow" xmlns="http://www.w3.org/2000/svg"
   width="299.471mm" height="178.836mm"
   viewBox="0 0 1132 676">
<path style="z-index: 10" id="Selection"
      fill="black" stroke="black" stroke-width="1"
      d="M 1072.00,322.00
         C 1063.19,342.77 1058.48,364.56 1056.91,387.00
           1056.91,387.00 1056.00,397.00 1056.00,397.00
           1055.91,405.26 1056.25,413.82 1057.43,422.00
           1057.43,422.00 1061.41,446.00 1061.41,446.00
           1061.77,455.84 1056.23,459.74 1053.78,468.00
           1050.87,477.85 1052.96,480.85 1053.00,490.00
           1053.10,510.44 1058.58,538.71 1061.15,560.00
           1061.15,560.00 1062.99,574.00 1062.99,574.00
           1063.23,584.57 1060.23,588.60 1056.68,598.00
           1053.71,605.88 1050.06,617.75 1044.67,623.96
           1037.07,632.73 1019.31,636.86 1008.00,637.00
           1008.00,637.00 987.00,636.00 987.00,636.00
           983.85,635.70 979.92,635.36 978.64,631.87
           977.32,628.29 980.65,622.20 982.25,619.00
           982.25,619.00 997.57,590.00 997.57,590.00
           1001.55,580.71 1006.52,558.82 1005.82,549.00
           1005.82,549.00 1004.15,537.00 1004.15,537.00
           1004.15,537.00 1002.13,519.00 1002.13,519.00
           1002.13,519.00 995.63,473.00 995.63,473.00
           994.72,469.37 991.89,458.80 986.22,461.17
           983.20,462.43 981.70,469.06 980.86,472.00
           978.25,481.18 975.11,494.54 975.00,504.00
           975.00,504.00 975.00,508.00 975.00,508.00
           975.00,508.00 974.09,521.00 974.09,521.00
           974.09,521.00 975.00,533.00 975.00,533.00
           975.00,533.00 976.00,578.00 976.00,578.00
           976.00,581.02 976.10,584.08 975.20,587.00
           974.03,590.77 971.46,593.89 969.13,597.00
           962.60,605.72 959.03,610.68 948.00,613.52
           943.12,614.78 932.09,615.98 927.00,616.00
           927.00,616.00 915.00,616.00 915.00,616.00
           909.80,615.99 903.12,616.51 904.55,609.00
           906.25,599.98 919.79,582.92 923.94,572.00
           928.84,559.07 930.79,541.77 932.17,528.00
           932.17,528.00 935.00,498.00 935.00,498.00
           935.00,498.00 936.00,468.00 936.00,468.00
           936.00,464.99 936.12,461.89 935.15,459.00
           932.38,450.77 914.71,434.07 908.53,426.00
           902.63,418.29 898.54,405.37 895.72,396.00
           894.45,391.80 892.72,383.09 888.87,380.77
           885.21,378.57 878.67,382.00 875.00,383.31
           875.00,383.31 839.00,396.94 839.00,396.94
           839.00,396.94 772.00,422.58 772.00,422.58
           772.00,422.58 739.00,435.28 739.00,435.28
           739.00,435.28 710.00,447.00 710.00,447.00
           704.90,449.17 698.66,452.37 693.00,451.80
           687.54,451.26 684.57,448.32 680.00,445.98
           680.00,445.98 659.00,437.42 659.00,437.42
           659.00,437.42 597.00,416.00 597.00,416.00
           589.24,414.43 575.14,413.96 567.00,414.00
           567.00,414.00 551.00,415.00 551.00,415.00
           551.00,415.00 522.00,416.91 522.00,416.91
           522.00,416.91 497.00,418.85 497.00,418.85
           491.64,419.49 473.55,420.66 470.00,422.45
           464.95,425.01 462.19,430.14 459.76,435.00
           459.76,435.00 447.67,467.00 447.67,467.00
           447.67,467.00 436.13,507.00 436.13,507.00
           433.74,516.55 431.02,526.10 431.00,536.00
           431.00,536.00 431.00,559.00 431.00,559.00
           431.00,559.00 431.91,571.00 431.91,571.00
           431.91,571.00 436.42,610.00 436.42,610.00
           437.20,615.26 440.01,628.56 438.26,632.96
           436.91,636.35 433.99,637.77 431.69,641.04
           429.19,644.61 428.44,649.71 422.91,654.67
           410.93,665.43 389.07,664.02 374.00,664.00
           371.06,664.00 367.01,664.36 364.69,662.26
           362.65,660.40 362.55,657.36 358.89,655.14
           354.20,652.28 342.94,653.60 340.61,644.00
           339.40,639.01 343.06,631.41 345.25,627.00
           345.25,627.00 360.14,596.00 360.14,596.00
           364.99,585.10 370.85,573.08 371.00,561.00
           371.00,561.00 371.00,525.00 371.00,525.00
           370.81,509.30 367.88,508.75 360.86,496.00
           358.59,491.86 356.93,487.39 355.20,483.00
           350.82,471.83 347.34,458.72 344.65,447.00
           343.49,441.93 342.19,432.03 339.30,428.10
           335.08,422.36 329.00,423.58 318.00,412.96
           318.00,412.96 264.67,354.00 264.67,354.00
           254.73,341.28 262.71,342.52 255.72,326.00
           255.72,326.00 243.86,300.00 243.86,300.00
           243.86,300.00 218.26,244.00 218.26,244.00
           212.33,231.76 205.53,214.95 194.00,206.90
           180.14,197.00 161.88,206.83 147.00,206.90
           135.90,207.12 123.44,204.02 113.00,200.31
           105.97,197.81 95.37,193.54 88.00,193.31
           81.99,192.72 74.11,195.18 65.00,193.31
           65.00,193.31 41.00,185.62 41.00,185.62
           33.70,184.24 24.13,184.87 18.02,180.87
           15.72,179.37 13.76,177.60 12.66,174.99
           11.49,171.79 12.12,167.32 12.66,164.00
           13.57,156.73 14.22,149.19 18.64,143.00
           28.13,129.67 56.29,117.09 66.66,99.00
           68.76,95.35 74.38,85.20 72.64,81.18
           71.48,78.49 67.31,76.56 65.04,74.62
           61.18,71.33 59.31,68.07 59.04,63.00
           57.95,42.03 79.31,49.56 97.00,42.77
           111.11,37.35 113.29,24.97 125.00,16.64
           133.67,10.47 146.71,11.88 157.00,12.00
           167.38,12.13 182.70,15.68 193.00,18.12
           193.00,18.12 228.00,26.13 228.00,26.13
           228.00,26.13 337.00,53.85 337.00,53.85
           376.03,64.41 421.16,77.89 461.00,82.16
           461.00,82.16 491.00,85.04 491.00,85.04
           491.00,85.04 504.00,85.04 504.00,85.04
           504.00,85.04 516.00,86.00 516.00,86.00
           516.00,86.00 546.00,86.00 546.00,86.00
           546.00,86.00 561.00,85.00 561.00,85.00
           561.00,85.00 580.00,85.00 580.00,85.00
           580.00,85.00 592.00,84.04 592.00,84.04
           592.00,84.04 604.00,84.04 604.00,84.04
           604.00,84.04 635.00,82.00 635.00,82.00
           635.00,82.00 662.00,81.00 662.00,81.00
           662.00,81.00 689.00,79.00 689.00,79.00
           689.00,79.00 713.00,78.00 713.00,78.00
           713.00,78.00 734.00,76.17 734.00,76.17
           734.00,76.17 763.00,73.83 763.00,73.83
           763.00,73.83 776.00,72.17 776.00,72.17
           776.00,72.17 878.00,60.84 878.00,60.84
           878.00,60.84 956.00,52.17 956.00,52.17
           956.00,52.17 997.00,48.83 997.00,48.83
           997.00,48.83 1025.00,46.00 1025.00,46.00
           1025.00,46.00 1034.00,46.00 1034.00,46.00
           1034.00,46.00 1044.00,45.00 1044.00,45.00
           1044.00,45.00 1048.00,45.00 1048.00,45.00
           1059.54,45.02 1060.52,48.07 1069.00,55.42
           1072.14,58.15 1074.77,60.59 1077.21,64.00
           1082.62,71.55 1094.29,99.69 1096.50,109.00
           1096.50,109.00 1099.58,126.00 1099.58,126.00
           1099.58,126.00 1105.83,175.00 1105.83,175.00
           1105.83,175.00 1107.09,197.00 1107.09,197.00
           1107.09,197.00 1109.00,224.00 1109.00,224.00
           1109.00,224.00 1109.00,279.00 1109.00,279.00
           1109.00,279.00 1110.00,294.00 1110.00,294.00
           1110.00,294.00 1110.00,298.00 1110.00,298.00
           1110.15,310.43 1115.88,319.09 1115.85,325.00
           1115.83,330.67 1111.76,332.06 1111.40,337.00
           1111.40,337.00 1115.96,360.00 1115.96,360.00
           1116.21,367.70 1113.52,370.12 1113.27,375.00
           1113.05,379.27 1115.40,385.57 1115.82,390.00
           1116.36,395.68 1114.38,398.32 1114.84,403.00
           1114.84,403.00 1120.67,426.00 1120.67,426.00
           1120.87,428.49 1120.41,433.36 1116.97,433.37
           1114.37,433.38 1113.71,430.46 1109.00,428.00
           1109.00,428.00 1108.09,435.00 1108.09,435.00
           1108.09,435.00 1108.66,449.00 1108.66,449.00
           1108.66,449.00 1103.17,459.04 1103.17,459.04
           1103.17,459.04 1101.00,471.00 1101.00,471.00
           1101.00,471.00 1099.00,471.00 1099.00,471.00
           1099.00,471.00 1085.75,439.00 1085.75,439.00
           1079.97,427.36 1079.76,425.56 1070.00,428.00
           1066.78,421.05 1068.99,416.35 1069.00,409.00
           1069.03,392.03 1066.21,393.52 1065.18,385.00
           1064.32,377.91 1065.47,368.04 1066.80,361.00
           1068.45,352.34 1073.78,329.49 1072.00,322.00 Z
         M 266.00,47.34
         C 248.35,51.63 244.02,76.54 244.00,92.00
           244.00,92.00 244.00,122.00 244.00,122.00
           244.02,134.11 249.10,172.09 251.42,185.00
           258.05,221.77 269.30,272.69 283.06,307.00
           283.06,307.00 287.08,315.00 287.08,315.00
           287.08,315.00 289.10,323.00 289.10,323.00
           289.10,323.00 298.75,345.00 298.75,345.00
           307.91,363.37 320.74,388.65 339.00,399.12
           350.92,405.96 368.53,406.45 382.00,407.04
           382.00,407.04 410.00,409.00 410.00,409.00
           410.00,409.00 425.00,409.00 425.00,409.00
           425.00,409.00 439.00,410.00 439.00,410.00
           439.00,410.00 451.00,409.32 451.00,409.32
           451.00,409.32 464.00,410.43 464.00,410.43
           464.00,410.43 496.00,407.17 496.00,407.17
           496.00,407.17 548.00,402.83 548.00,402.83
           548.00,402.83 577.00,400.09 577.00,400.09
           577.00,400.09 628.00,395.96 628.00,395.96
           628.00,395.96 637.00,395.96 637.00,395.96
           637.00,395.96 651.00,393.99 651.00,393.99
           651.00,393.99 659.00,393.99 659.00,393.99
           659.00,393.99 666.00,392.60 666.00,392.60
           666.00,392.60 674.00,392.60 674.00,392.60
           674.00,392.60 702.00,390.17 702.00,390.17
           702.00,390.17 722.00,388.83 722.00,388.83
           722.00,388.83 783.00,382.83 783.00,382.83
           783.00,382.83 795.00,381.16 795.00,381.16
           823.05,378.15 851.28,374.55 879.00,369.20
           879.00,369.20 906.00,363.62 906.00,363.62
           909.87,362.60 914.27,359.85 918.00,361.14
           920.81,362.11 927.31,366.26 928.37,369.10
           929.36,371.79 927.40,378.94 932.41,386.00
           934.07,388.34 940.06,395.94 942.04,397.62
           945.96,400.95 948.15,401.09 952.83,406.04
           964.87,418.77 967.04,426.40 984.00,437.30
           995.63,444.78 1003.73,445.96 1017.00,447.17
           1023.28,447.74 1029.64,447.85 1034.81,443.44
           1041.40,437.84 1042.99,425.17 1043.00,417.00
           1043.00,417.00 1043.00,401.00 1043.00,401.00
           1043.00,401.00 1040.95,377.00 1040.95,377.00
           1040.64,374.36 1039.16,369.05 1039.58,367.00
           1039.58,367.00 1044.12,358.00 1044.12,358.00
           1044.12,358.00 1051.95,337.00 1051.95,337.00
           1059.02,317.65 1064.49,297.19 1068.55,277.00
           1070.82,265.73 1074.98,235.92 1075.00,225.00
           1075.00,225.00 1075.00,191.00 1075.00,191.00
           1074.98,178.50 1071.45,159.56 1069.25,147.00
           1067.43,136.60 1061.83,117.71 1057.72,108.00
           1055.01,101.61 1048.47,90.47 1048.98,84.00
           1049.49,77.38 1051.78,70.93 1045.78,65.55
           1042.06,62.23 1035.82,60.73 1031.00,59.92
           1021.93,58.39 1003.87,58.89 994.00,59.00
           980.32,59.16 938.49,64.81 924.00,67.42
           924.00,67.42 909.00,71.26 909.00,71.26
           909.00,71.26 900.00,71.26 900.00,71.26
           900.00,71.26 876.00,75.72 876.00,75.72
           876.00,75.72 813.00,83.28 813.00,83.28
           813.00,83.28 800.00,85.17 800.00,85.17
           800.00,85.17 794.00,86.50 794.00,86.50
           794.00,86.50 786.00,86.50 786.00,86.50
           786.00,86.50 737.00,91.83 737.00,91.83
           737.00,91.83 707.00,94.83 707.00,94.83
           707.00,94.83 687.00,96.17 687.00,96.17
           687.00,96.17 668.00,98.21 668.00,98.21
           668.00,98.21 661.58,99.91 661.58,99.91
           659.57,100.06 656.10,98.61 649.00,99.09
           649.00,99.09 620.00,101.09 620.00,101.09
           620.00,101.09 608.00,102.04 608.00,102.04
           608.00,102.04 596.00,102.04 596.00,102.04
           596.00,102.04 585.00,103.00 585.00,103.00
           585.00,103.00 565.00,103.00 565.00,103.00
           565.00,103.00 548.00,104.00 548.00,104.00
           548.00,104.00 534.00,104.00 534.00,104.00
           534.00,104.00 519.00,103.00 519.00,103.00
           519.00,103.00 501.00,103.00 501.00,103.00
           501.00,103.00 491.00,102.00 491.00,102.00
           491.00,102.00 482.00,102.00 482.00,102.00
           482.00,102.00 457.00,98.92 457.00,98.92
           457.00,98.92 442.00,98.92 442.00,98.92
           442.00,98.92 430.00,95.20 430.00,95.20
           406.57,90.48 383.54,84.33 361.00,76.31
           361.00,76.31 294.00,53.58 294.00,53.58
           286.44,51.42 273.48,46.83 266.00,47.34 Z
         M 700.00,171.00
         C 700.00,171.00 704.00,168.00 704.00,168.00
           704.00,168.00 700.00,171.00 700.00,171.00 Z
         M 451.00,305.00
         C 451.00,305.00 454.00,305.00 454.00,305.00
           454.00,305.00 452.00,308.00 452.00,308.00
           452.00,308.00 451.00,305.00 451.00,305.00 Z
         M 664.00,307.00
         C 664.00,307.00 668.00,306.00 668.00,306.00
           666.41,308.26 666.42,308.39 664.00,307.00 Z
         M 374.13,416.14
         C 367.11,420.08 374.87,426.19 375.93,437.00
           377.23,450.32 387.05,470.19 396.30,479.83
           401.85,485.61 409.90,489.37 418.00,487.61
           431.54,484.67 437.95,464.97 440.40,453.00
           441.14,449.39 442.08,445.70 441.67,442.00
           441.54,438.04 440.56,436.32 441.67,432.00
           442.51,427.65 448.89,417.49 440.94,416.14
           440.94,416.14 436.00,416.14 436.00,416.14
           436.00,416.14 396.00,416.14 396.00,416.14
           396.00,416.14 374.13,416.14 374.13,416.14 Z" />
           <path onclick="style=' z-index: 10; stroke: blue; stroke-width: 5px'"
      id="Selection"
      fill="yellow"
      stroke="#000000"
      stroke-width="1"
      d="m 21.5,0.93962245 c 11.74,-2.35999995 33.31,5.46000005 45,9.35999955 0,0 89,29.58 89,29.58 0,0 30,7.08 30,7.08 4.24,0.92 10.29,2.04 12.99,5.68 3.15,4.24 2.83,11.63 3.05,16.66 0,0 0.87,8 0.87,8 0,0 1.37,20 1.37,20 0,0 0.81,13.999998 0.81,13.999998 0,0 0.91,10 0.91,10 0,0 2,29 2,29 0,0 1,25 1,25 0,0 1,16 1,16 0,0 1,28 1,28 0,0 1,14 1,14 0.06,5.86 1.23,20.49 -2.51,24.72 -3.5,3.98 -15.3,4.27 -20.49,4.28 0,0 -41,1 -41,1 0,0 -19,1 -19,1 0,0 -10,0.96 -10,0.96 0,0 -10,0 -10,0 0,0 -15,1.04 -15,1.04 0,0 -25,1.28 -25,1.28 -6.64,0.79 -20.67,3.04 -25.61,-1.7 -3.29,-3.15 -6.59,-13.03 -8.05,-17.58 0,0 -11.22,-38 -11.22,-38 -9.09,-34.47 -16.49,-69.53 -20.28,-105 0,0 -2.84,-32.999998 -2.84,-32.999998 0,0 0,-25 0,-25 0.19,-16.06 4.09,-39.9799995 21,-46.35999955 z" />
      <path onclick="style=' z-index: 10; stroke: blue; stroke-width: 5px;'" px="50" id="Selection"
      fill="palegreen" stroke="black" stroke-width="1"
      d="M662.00,309.74
         C 664.82,310.00 666.45,310.12 668.58,312.30
           671.91,315.70 676.80,334.79 677.29,340.00
           677.77,345.03 675.78,348.92 670.98,350.85
           667.11,352.42 663.04,351.78 659.00,352.17
           659.00,352.17 635.00,354.98 635.00,354.98
           635.00,354.98 573.00,363.83 573.00,363.83
           573.00,363.83 553.00,365.00 553.00,365.00
           553.00,365.00 536.00,366.04 536.00,366.04
           536.00,366.04 524.00,366.04 524.00,366.04
           524.00,366.04 513.00,367.00 513.00,367.00
           513.00,367.00 496.00,367.00 496.00,367.00
           496.00,367.00 480.00,366.00 480.00,366.00
           480.00,366.00 473.00,366.00 473.00,366.00
           469.54,365.99 455.79,365.60 460.83,358.53
           463.12,355.31 470.26,353.77 474.00,352.71
           474.00,352.71 510.00,343.63 510.00,343.63
           510.00,343.63 607.00,324.35 607.00,324.35
           607.00,324.35 644.00,314.86 644.00,314.86
           650.55,312.98 655.18,310.33 662.00,309.74 Z" />
</svg>` }
]