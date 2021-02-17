buttonPgView();
function buttonPgView() {
    let buttonPage = `<div class="box">
                        <div class="button-page">
                            <img src="https://cdn.discordapp.com/attachments/796668478261297152/800658341361614858/ButcherIT_logo_1.png" alt="ButcherIT Logo">
                            <button class="button button5" onclick="picturePgView()">Bilde modus</button>
                            <button class="button button5" onclick="findRandomCut()">Quiz</button>
                            <button class="button button5" onclick="listPgView()">Liste modus</button>
                        </div>
                      </div>`;
    appHTML.innerHTML = buttonPage;
}

function listPgView() {
    let listPage = `<div id="listDiv">
    
                        <button id="returnbtn" class="fa fa-home" onclick="buttonPgView()"></button>
                        <button class="buttonPic" onclick="changeAnimal('Cattle')">STORFE</button>
                        <button class="buttonPic">SVIN</button>
                        <button class="buttonPic">KYLLING</button>
                        <div class="list">
                            <ul id="list-elements">
                            <h2>Velg ett stykke:</h2>
                            </ul>
                        </div>
                    </div>
                    <div id="list-info">
                        
                    </div>
                    `;
    appHTML.innerHTML = listPage;
    const liElements = document.getElementById("list-elements");
    list = ``;
    for (i = 0; i < model.cuts.length; i++) {
        const cut = model.cuts[i];
        if (cut.animal == 'Cattle') {
            list += `<li id="list-${i}" onclick="listPgInfo(${i})" style="cursor: pointer;">${cut.name}</li>`;
        }
    }
    liElements.innerHTML += list;

}
function listPgInfo(i){
    const listInfo = document.getElementById("list-info");
    const cut = model.cuts[i];
    listInfo.innerHTML = `
    <h1>${cut.name}</h1>
    <h2>Info:</h2>
    <p id="cut-info">${cut.info}</p>
    <h2>Bruksområder:</h2>
    <p id="cut-uses">${cut.use}</p>
    <img src="${cut.picture}"/>
    `;

}

function picturePgView(){
    let picturePageCattle = `
                             <div class="picture-page"> 
                                <button class="buttonPic" onclick="changeAnimal('Cattle'); picturePgView()">STORFE</button>
                                <button class="buttonPic" onclick="changeAnimal('Pork'); picturePgView()">SVIN</button>
                                <button class="buttonPic" onclick="changeAnimal('Chicken'); picturePgView()">KYLLING</button> 
                                <button id="picReturnbtn" 
                                            class="fa fa-home" 
                                            onclick="buttonPgView(); defaultChosen()"
                                            style="top:0vw;left:-34vw;"></button>
                            </div>
                            <div id="cow" style="text-align: center"><img src="images/ku2.png" width="1132" height"676" alt="heileKua" usemap="#cowMap">
                                <map id="cowMap" name="cowMap">
                                <h2 class="chuck-txt ${model.cuts[1].chosen}"
                                    onclick="picPgInfo(1); chooseCut('chuck', 1)">Chuck</h2>
                                <area class="chuck" 
                                      shape="poly" 
                                      coords="260,55, 253,90, 280,300, 445,300, 440,100 " 
                                      alt="chuck" 
                                      style="cursor: pointer" 
                                      onclick="picPgInfo(1); chooseCut('chuck', 1)">
                                <h2 class="rib-txt ${model.cuts[0].chosen}"
                                    onclick="picPgInfo(0); chooseCut('rib', 0)">Rib</h2>
                                <area class="rib" 
                                      shape="poly" 
                                      coords="450,100, 460,297, 666,298, 675,185, 655,104, 558,109" 
                                      alt="rib"
                                      style="cursor: pointer" 
                                      onclick="picPgInfo(0); chooseCut('rib', 0)">
                                <h2 class="brisket-txt ${model.cuts[2].chosen}"
                                    onclick="picPgInfo(2); chooseCut('brisket', 2)">Brisket</h2>
                                <area class="brisket" 
                                      shape="poly" 
                                      coords="295,318, 333,400, 445,403, 450,312" 
                                      alt="brisket"                                      
                                      style="cursor: pointer" 
                                      onclick="picPgInfo(2); chooseCut('brisket', 2)">
                                <h2 class="plate-txt ${model.cuts[3].chosen}"
                                      onclick="picPgInfo(3); chooseCut('plate', 3)">Plate</h2>
                                <area class="plate" 
                                      shape="poly" 
                                      coords="458,309, 460,403, 660,388, 657,340, 660,312" 
                                      alt="plate"                                        
                                      style="cursor: pointer" 
                                      onclick="picPgInfo(3); chooseCut('plate', 3)">
                                <h2 class="shortloin-txt ${model.cuts[11].chosen}"
                                      onclick="picPgInfo(11); chooseCut('shortloin', 11)">Shortloin</h2>
                                <area class="shortloin" 
                                      shape="poly" 
                                      coords="670,103, 685,168, 689,231, 675,297, 805,315, 820,254, 815,173, 700,172, 730,152, 805,135, 793,89" 
                                      alt="shortloin"                                       
                                      style="cursor: pointer" 
                                      onclick="picPgInfo(11); chooseCut('shortloin', 11)">
                                <h2 class="sirloin-txt ${model.cuts[4].chosen}"
                                      onclick="picPgInfo(4); chooseCut('sirloin', 4)">Sirloin</h2>
                                <area class="sirloin" 
                                      shape="poly" 
                                      coords="800,87, 810,134, 900,119, 918,106, 907,73" 
                                      alt="sirloin"                                       
                                      style="cursor: pointer" 
                                      onclick="picPgInfo(4); chooseCut('sirloin', 4)">
                                <h2 class="tenderloin-txt ${model.cuts[6].chosen}"
                                      onclick="picPgInfo(6); chooseCut('tenderloin', 6)">Tenderloin</h2>
                                <area class="tenderloin" 
                                      shape="poly" 
                                      coords="720,167, 800,146, 881,132, 920,120, 930,150, 830,165" 
                                      alt="tenderloin"                                       
                                      style="cursor: 
                                      pointer" 
                                      onclick="picPgInfo(6); chooseCut('tenderloin', 6)">
                                <h2 class="topsirloin-txt ${model.cuts[5].chosen}"
                                      onclick="picPgInfo(5); chooseCut('topsirloin', 5)">Top Sirloin</h2>
                                <area class="topSirloin" 
                                      shape="poly" 
                                      coords="823,173, 825,200, 925,198, 942,203, 933,159" 
                                      alt="topSirloin"                                        
                                      style="cursor: pointer" 
                                      onclick="picPgInfo(5); chooseCut('topsirloin', 6)">
                                <h2 class="bottomsirloin-txt ${model.cuts[8].chosen}"
                                      onclick="picPgInfo(8); chooseCut('bottomsirloin', 8)">Bottom Sirloin</h2>
                                <area class="bottomSirloin" 
                                      shape="poly" 
                                      coords="826,208, 826,257, 822,288, 813,317, 900,343, 925,355, 937,360, 947,296, 942,214, " 
                                      alt="bottomSirloin"                                      
                                      style="cursor: pointer" 
                                      onclick="picPgInfo(8); chooseCut('bottomsirloin', 8)">
                                <h2 class="flank-txt ${model.cuts[7].chosen}"
                                      onclick="picPgInfo(7); chooseCut('flank', 7)">Flank</h2>
                                <area class="flank" 
                                      shape="poly" 
                                      coords="672,310, 668,347, 673,386, 832,374, 912,359, 861,336" 
                                      alt="flank"                                       
                                      style="cursor: pointer" 
                                      onclick="picPgInfo(7); chooseCut('flank', 7)">
                                <h2 class="rounds-txt ${model.cuts[9].chosen}"
                                      onclick="picPgInfo(9); chooseCut('rounds', 9)">Rounds</h2>
                                <area class="round" 
                                      shape="poly" 
                                      coords="916,75, 951,197, 958,280, 954,321, 948,359, 1040,359, 1069,275, 1073,177, 1047,91, 1050,54" 
                                      alt="round" 
                                      style="cursor: pointer" 
                                      onclick="picPgInfo(9); chooseCut('rounds', 9)">
                                <h2 class="shankR-txt ${model.cuts[10].chosen}"
                                      onclick="picPgInfo(2); chooseCut('shank', 10)">Shank</h2>
                                <area class="shankR" 
                                      shape="poly" 
                                      coords="925,370, 995,446, 1050,450, 1045,367" 
                                      alt="shankR"                                    
                                      style="cursor: pointer" 
                                      onclick="picPgInfo(10); chooseCut('shank', 10)">
                                <h2 class="shankF-txt ${model.cuts[10].chosen}"
                                      onclick="picPgInfo(10); chooseCut('shank', 10)">Shank</h2>
                                <area class="shankF" 
                                      shape="poly" 
                                      coords="369,412, 395,488, 437,488, 455,414" 
                                      alt="shankF"  
                                      style="cursor: pointer" 
                                      onclick="picPgInfo(10); chooseCut('shank', 10)">
                                </map>
                            </div>
                            <div id="pic-info">
                        
                            </div>
                        `;
      let picturePagePork = `<div class="picture-page"> 
                              <button class="buttonPic" onclick="changeAnimal('Cattle'); picturePgView()">STORFE</button>
                              <button class="buttonPic" onclick="changeAnimal('Pork'); picturePgView()">SVIN</button>
                              <button class="buttonPic" onclick="changeAnimal('Chicken'); picturePgView()">KYLLING</button> 
                              <button id="picReturnbtn" 
                                    class="fa fa-home" 
                                    onclick="buttonPgView(); defaultChosen()"
                                    style="top:0vw;left:-34vw;"></button>
                                    </div>
                                    <div id="pig" style="text-align: center"><img src="images/grisNoName.jpg" width="1132" height"676" alt="heileGrisen" usemap="#pigMap">
                                    <map id="pigMap" name="pigMap">
                                    <h2 class="head-txt ${model.cuts[18].chosen}"
                                          onclick="picPgInfo(18); chooseCut('head', 18)">Head</h2>
                                    <area class="head" 
                                          shape="poly" 
                                          coords="10,151, 8,205, 134,275, 262,307, 327,68, 263,57, 204,74, 183,39, 152,4, 118,38, 121,84, 140,110, 76,149 " 
                                          alt="chuck" 
                                          style="cursor: pointer" onclick="picPgInfo(18); chooseCut('head', 18)"
                                          >
                                    <h2 class="bladeshoulder-txt ${model.cuts[19].chosen}"
                                          onclick="picPgInfo(19); chooseCut('bladeshoulder', 19)">Blade shoulder</h2>
                                    <area class="bladeShoulder" 
                                          shape="poly" 
                                          coords="328,66, 290,215, 427,231, 452,129, 485,64, 385,74 " 
                                          alt="chuck" 
                                          style="cursor: pointer" onclick="picPgInfo(19); chooseCut('bladeshoulder', 19)"
                                          >
                                    <h2 class="armshoulder-txt ${model.cuts[20].chosen}"
                                          onclick="picPgInfo(20); chooseCut('armshoulder', 20)">Arm shoulder</h2>
                                    <area class="armShoulder" 
                                          shape="poly" 
                                          coords="293,220, 275,286, 265,313, 314,337, 340,368, 425,476, 469,455, 411,365, 446,361, 428,282, 430,235 " 
                                          alt="chuck" 
                                          style="cursor: pointer" onclick="picPgInfo(20); chooseCut('armshoulder', 20)" 
                                          >
                                    <h2 class="loin-txt ${model.cuts[21].chosen}"
                                          onclick="picPgInfo(21); chooseCut('loin', 21)">Loin</h2>
                                    <area class="loin" 
                                          shape="poly" 
                                          coords="489,66, 452,139, 431,232, 434,285, 716,319, 715,270, 761,177, 814,99, 861,61, 683,55 " 
                                          alt="chuck" 
                                          style="cursor: pointer" onclick="picPgInfo(21); chooseCut('loin', 21)" 
                                          >
                                    <h2 class="sparerib-txt ${model.cuts[22].chosen}"
                                          onclick="picPgInfo(22); chooseCut('sparerib', 22)">Spare rib</h2>
                                    <area class="spareRib" 
                                          shape="poly" 
                                          coords="438,295, 445,362, 659,319,  " 
                                          alt="chuck" 
                                          style="cursor: pointer" onclick="picPgInfo(22); chooseCut('sparerib', 22)" 
                                          >
                                    <h2 class="side-txt ${model.cuts[23].chosen}"
                                          onclick="picPgInfo(23); chooseCut('side', 23)">Side</h2>
                                    <area class="side" 
                                          shape="poly" 
                                          coords="450,370, 680,408, 750,395, 713,320, 654,324 " 
                                          alt="chuck" 
                                          style="cursor: pointer" onclick="picPgInfo(23); chooseCut('side', 23)" 
                                          >
                                    <h2 class="hock-txt ${model.cuts[25].chosen}"
                                          onclick="picPgInfo(25); chooseCut('hock', 25)">Hock</h2>
                                    <area class="hock" 
                                          shape="poly" 
                                          coords="425,482, 469,561, 482,558, 492,516, 470,459" 
                                          alt="chuck" 
                                          style="cursor: pointer" onclick="picPgInfo(25); chooseCut('hock', 25)" 
                                          >
                                    <h2 class="leg-txt ${model.cuts[24].chosen}"
                                          onclick="picPgInfo(24); chooseCut('leg', 24)">Leg</h2>
                                    <area class="leg" 
                                          shape="poly" 
                                          coords="860,66, 809,107, 769,162, 718,269, 719,321, 757,393, 840,433, 931,457, 1000,429, 946,381, 1004,361, 1046,292, 1054,242, 1043,210, 972,213, 945,176, 944,136, 959,112, 920,80" 
                                          alt="chuck" 
                                          style="cursor: pointer" onclick="picPgInfo(24); chooseCut('leg', 24)" 
                                          >
                                          </map>
                                          </div>
                            <div id="pic-info">
                        
                            </div>
                                          `;
      let picturePageChicken = `<div class="picture-page"> 
                                    <button class="buttonPic" onclick="changeAnimal('Cattle'); picturePgView()">STORFE</button>
                                    <button class="buttonPic" onclick="changeAnimal('Pork'); picturePgView()">SVIN</button>
                                    <button class="buttonPic" onclick="changeAnimal('Chicken'); picturePgView()">KYLLING</button> 
                                    <button id="picReturnbtn" 
                                          class="fa fa-home" 
                                          onclick="buttonPgView(); defaultChosen()"
                                          style="top:0vw;left:-34vw;"></button>
                                          </div>
      
                              <div id="chiggen" style="text-align: center"><img src="images/chickun.png" width="1132" height"676" alt="heileKyllingen" usemap="#chiggenMap">
                                    <map id="chiggenMap" name="chiggenMap">
                                    <h2 class="neck-txt ${model.cuts[15].chosen}"
                                          onclick="picPgInfo(15); chooseCut('neck', 15)">Neck</h2>
                                   <area class="neck"
                                        shape="poly"
                                        coords="387,58, 350,96, 377,127, 391,147, 361,235, 397,245, 430,243, 464,223, 470,213, 460,141, 443,105, 425,88, 431,75, 415,50"
                                        alt="neck"
                                        style="cursor: pointer" onclick="picPgInfo(15); chooseCut('neck', 15)">
                                    <h2 class="breast-txt ${model.cuts[12].chosen}"
                                          onclick="picPgInfo(12); chooseCut('breast', 12)">Breast</h2>
                                    <area class="breast" 
                                          shape="poly" 
                                          coords="357,241, 340,292, 339,339, 343,364, 384,412, 462,479, 500,387, 499,362, 466,348, 442,324, 443,291, 460,269, 421,247, 394,248" 
                                          alt="chuck" 
                                          style="cursor: pointer" onclick="picPgInfo(12); chooseCut('breast', 12)">
                                    <h2 class="wings-txt ${model.cuts[17].chosen}"
                                          onclick="picPgInfo(17); chooseCut('wings', 17)">Wings</h2>
                                    <area class="wing" 
                                          shape="poly" 
                                          coords="464,270, 452,280, 444,299, 448,323, 462,337, 494,351, 540,356, 565,350, 590,336, 573,332, 559,324, 551,310, 541,290, 523,272, 496,263, 474,265" 
                                          alt="chuck" 
                                          style="cursor: pointer" onclick="picPgInfo(17); chooseCut('wings', 17)">
                                    <h2 class="back-txt ${model.cuts[13].chosen}"
                                          onclick="picPgInfo(13); chooseCut('back', 13)">Back</h2>
                                    <area class="back" 
                                          shape="poly" 
                                          coords="474,221, 454,238, 424,246, 451,257, 457,266, 477,259, 497,259, 517,266, 539,282, 554,305, 568,323, 583,329, 603,325, 595,340, 576,352, 595,362, 608,370, 606,331, 597,297, 587,272, 579,256, 558,264, 538,264, 493,248, 480,232" 
                                          alt="chuck" 
                                          style="cursor: pointer" onclick="picPgInfo(13); chooseCut('back', 13)">
                                    <h2 class="chiggenleg-txt ${model.cuts[14].chosen}"
                                          onclick="picPgInfo(14); chooseCut('chiggenleg', 14)">Leg</h2>
                                    <area class="leg" 
                                          shape="poly" 
                                          coords="514,405, 494,428, 483,457, 483,482, 501,509, 514,509, 550,497, 572,478, 586,468, 583,426, 565,403, 548,396, 525,402" 
                                          alt="chuck" 
                                          style="cursor: pointer" onclick="picPgInfo(14); chooseCut('chiggenleg', 14)">
                                    <h2 class="thigh-txt ${model.cuts[16].chosen}"
                                          onclick="picPgInfo(16); chooseCut('thigh', 16)">Thigh</h2>
                                    <area class="thigh" 
                                          shape="poly" 
                                          coords="508,362, 503,391, 489,424, 460,483, 467,499, 498,515, 545,508, 570,503, 597,486, 634,441, 639,428, 639,411, 611,376, 590,363, 571,355, 540,364" 
                                          alt="chuck" 
                                          style="cursor: pointer" onclick="picPgInfo(16); chooseCut('thigh', 16)">
                                    <area class="huehue" 
                                          shape="poly" 
                                          coords="585,252, 609,307, 640,406, 705,358, 708,227, 682,181, 632,171" 
                                          alt="chuck" 
                                          style="cursor: pointer" href="./reeeee.html">
                                          </map>
                                          </div>
                            <div id="pic-info">
                        
                            </div>
                                          `;
      if(model.chosenAnimal == "Cattle"){
             appHTML.innerHTML = picturePageCattle;
      } else if(model.chosenAnimal == "Pork"){  
            appHTML.innerHTML = picturePagePork;
      } else if(model.chosenAnimal =="Chicken"){
            appHTML.innerHTML = picturePageChicken;
      }
}

function picPgInfo(index){
    const picInfoDiv = document.getElementById("pic-info");
    const cut = model.cuts[index];
    pictureInfo = `
    <h1>${cut.name}</h1>
    <img src="${cut.picture}"/>
    <h2>Bruksområder:</h2><p id="cut-uses">${cut.use}</p>
    `;
    picInfoDiv.innerHTML = pictureInfo;
}

function quizPgView(index) {
    const cut = model.cuts[index];
    let quizPage = `
                    <button id="returnbtn" class="fa fa-home" onclick="buttonPgView()"></button>
                    <div class="picture-page"> 
                                <button class="buttonPicQuiz">STORFE</button>
                                <button class="buttonPicQuiz">SVIN</button>
                                <button class="buttonPicQuiz">KYLLING</button> 
                                <h2 id="quizHeadline">Quiz Mode</h2>
                            </div>
                            <div id="cow" style="text-align: center"><img src="images/ku2.png" width="1132" height"676" alt="heileKua" usemap="#cowMap">
                                <map id="cowMap" name="cowMap">
                                <h2 class="chuck-txt ">${model.quiz[1].ifTrue}</h2>
                                <area class="chuck"
                                      shape="poly" 
                                      coords="260,55, 253,90, 280,300, 445,300, 440,100 " 
                                      alt="chuck" 
                                      style="cursor: pointer">
                                <h2 class="rib-txt ">${model.quiz[0].ifTrue}</h2>
                                <area class="rib" 
                                      shape="poly" 
                                      coords="450,100, 460,297, 666,298, 675,185, 655,104, 558,109" 
                                      alt="rib"
                                      style="cursor: pointer">
                                <h2 class="brisket-txt ">${model.quiz[2].ifTrue}</h2>
                                <area class="brisket" 
                                      shape="poly" 
                                      coords="295,318, 333,400, 445,403, 450,312" 
                                      alt="brisket"                                      
                                      style="cursor: pointer">
                                <h2 class="plate-txt ">${model.quiz[3].ifTrue}</h2>
                                <area class="plate" 
                                      shape="poly" 
                                      coords="458,309, 460,403, 660,388, 657,340, 660,312" 
                                      alt="plate"                                        
                                      style="cursor: pointer" >
                                <h2 class="shortloin-txt ">${model.quiz[11].ifTrue}</h2>
                                <area class="shortloin" 
                                      shape="poly" 
                                      coords="670,103, 685,168, 689,231, 675,297, 805,315, 820,254, 815,173, 700,172, 730,152, 805,135, 793,89" 
                                      alt="shortloin"                                       
                                      style="cursor: pointer" >
                                <h2 class="sirloin-txt ">${model.quiz[4].ifTrue}</h2>
                                <area class="sirloin" 
                                      shape="poly" 
                                      coords="800,87, 810,134, 900,119, 918,106, 907,73"                                   
                                      style="cursor: pointer" >
                                <h2 class="tenderloin-txt ">${model.quiz[6].ifTrue}</h2>
                                <area class="tenderloin" 
                                      shape="poly" 
                                      coords="720,167, 800,146, 881,132, 920,120, 930,150, 830,165" 
                                      alt="tenderloin"                                       
                                      style="cursor: 
                                      pointer" >
                                <h2 class="topsirloin-txt ">${model.quiz[5].ifTrue}</h2>
                                <area class="topSirloin" 
                                      shape="poly" 
                                      coords="823,173, 825,200, 925,198, 942,203, 933,159"
                                      alt="topSirloin"                                        
                                      style="cursor: pointer" >
                                <h2 class="bottomsirloin-txt ">${model.quiz[8].ifTrue}</h2>
                                <area class="bottomSirloin" 
                                      shape="poly" 
                                      coords="826,208, 826,257, 822,288, 813,317, 900,343, 925,355, 937,360, 947,296, 942,214, " 
                                      alt="bottomSirloin"                                      
                                      style="cursor: pointer" >
                                <h2 class="flank-txt ">${model.quiz[7].ifTrue}</h2>
                                <area class="flank" 
                                      shape="poly" 
                                      coords="672,310, 668,347, 673,386, 832,374, 912,359, 861,336" 
                                      alt="flank"                                       
                                      style="cursor: pointer" >
                                <h2 class="rounds-txt ">${model.quiz[9].ifTrue}</h2>
                                <area class="round" 
                                      shape="poly" 
                                      coords="916,75, 951,197, 958,280, 954,321, 948,359, 1040,359, 1069,275, 1073,177, 1047,91, 1050,54" 
                                      alt="round" 
                                      style="cursor: pointer" >
                                <h2 class="shankR-txt"> ${model.quiz[10].ifTrue}</h2>
                                <area class="shankR" 
                                      shape="poly" 
                                      coords="925,370, 995,446, 1050,450, 1045,367" 
                                      alt="shankR"                                    
                                      style="cursor: pointer" >
                                <h2 class="shankF-txt ">${model.quiz[10].ifTrue}</h2>
                                <area class="shankF" 
                                      shape="poly" 
                                      coords="369,412, 395,488, 437,488, 455,414" 
                                      alt="shankF"  
                                      style="cursor: pointer" >
                                </map>
                            </div>
                            <div id="quiz-info">
                              <h1>${model.question}</h1>
                              <img src="${cut.picture}"/>
                              <h2>Svaralternativer: 
                                 <li onclick="resultView(this.innerHTML)" style="cursor: pointer">${model.choices[0]}</li>
                                 <li onclick="resultView(this.innerHTML)" style="cursor: pointer">${model.choices[1]}</li>
                                 <li onclick="resultView(this.innerHTML)" style="cursor: pointer">${model.choices[2]}</li>
                                 <li onclick="resultView(this.innerHTML)" style="cursor: pointer">${model.choices[3]}</li>
                              </h2>
                            </div>
                
    `;
    appHTML.innerHTML = quizPage;
}

function resultView(answer){
if(answer == model.rightAnswer){
      appHTML.innerHTML = `
      <h1 id="answerHeadline">Du svarte riktig!</h1>
      <button id="newQuizBtn" onclick="findRandomCut()">Nytt spørsmål</button>
      `;
}else {
      appHTML.innerHTML = `
      <h1 id="answerHeadline">Du svarte feil. </h1>
      <h2 id="rightAnswerIs">Riktig svar er: ${model.rightAnswer}</h2>
      <button id="newQuizBtn" onclick="findRandomCut()">Nytt spørsmål</button>
      `;
}
}