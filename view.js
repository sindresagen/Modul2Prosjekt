buttonPgView();
function buttonPgView() {
    let buttonPage = `<div class="box">
                        <div class="button-page">
                            <img src="https://cdn.discordapp.com/attachments/796668478261297152/800658341361614858/ButcherIT_logo_1.png" alt="ButcherIT Logo">
                            <button class="button button5" onclick="picturePgView()">Bilde modus</button>
                            <button class="button button5" onclick="quizPgView()">Quiz</button>
                            <button class="button button5" onclick="listPgView()">Liste modus</button>
                        </div>
                      </div>`;
    appHTML.innerHTML = buttonPage;
}

function listPgView() {
    let listPage = `<div id="listDiv">
                        <button id="returnbtn" class="fa fa-home" onclick="buttonPgView()"></button>
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
    let picturePage = `
                             <div class="picture-page"> 
                                <button class="buttonPic" 
                                        onclick="buttonPgView()">STORFE</button>
                                <button class="buttonPic">SVIN</button>
                                <button class="buttonPic">KYLLING</button> 
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
    appHTML.innerHTML = picturePage;
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

function quizPgView() {
    let quizPage = `
                    <button id="returnbtn" class="fa fa-home" onclick="buttonPgView()"></button>
                    <h1>QUIZ MODE</h1>
                    <div class="picture-page"> 
                                <button class="buttonPicQuiz">STORFE</button>
                                <button class="buttonPicQuiz">SVIN</button>
                                <button class="buttonPicQuiz">KYLLING</button> 
                            </div>
                            <div id="cow" style="text-align: center"><img src="images/ku2.png" width="1132" height"676" alt="heileKua" usemap="#cowMap">
                                <map id="cowMap" name="cowMap">
                                <h2 class="chuck-txt ${model.quiz[1].selected}"
                                    onclick="quizPgInfo(1); randomCut('chuckQuiz', 1)">Chuck</h2>
                                <area class="chuck"
                                      shape="poly" 
                                      coords="260,55, 253,90, 280,300, 445,300, 440,100 " 
                                      alt="chuck" 
                                      style="cursor: pointer" 
                                      onclick="quizPgInfo(1); randomCut('chuckQuiz', 1)">
                                <h2 class="rib-txt ${model.quiz[0].selected}"
                                    onclick="quizPgInfo(0); randomCut('ribQuiz', 0)">Rib</h2>
                                <area class="rib" 
                                      shape="poly" 
                                      coords="450,100, 460,297, 666,298, 675,185, 655,104, 558,109" 
                                      alt="rib"
                                      style="cursor: pointer" 
                                      onclick="quizPgInfo(0); randomCut('ribQuiz', 0)">
                                <h2 class="brisket-txt ${model.quiz[2].selected}"
                                    onclick="quizPgInfo(2); randomCut('brisketQuiz', 2)">Brisket</h2>
                                <area class="brisket" 
                                      shape="poly" 
                                      coords="295,318, 333,400, 445,403, 450,312" 
                                      alt="brisket"                                      
                                      style="cursor: pointer" 
                                      onclick="quizPgInfo(2); randomCut('brisketQuiz', 2)">
                                <h2 class="plate-txt ${model.quiz[3].selected}"
                                      onclick="quizPgInfo(3); randomCut('plateQuiz', 3)">Plate</h2>
                                <area class="plate" 
                                      shape="poly" 
                                      coords="458,309, 460,403, 660,388, 657,340, 660,312" 
                                      alt="plate"                                        
                                      style="cursor: pointer" 
                                      onclick="quizPgInfo(3); randomCut('plateQuiz', 3)">
                                <h2 class="shortloin-txt ${model.quiz[11].selected}"
                                      onclick="quizPgInfo(11); randomCut('shortloinQuiz', 11)">Shortloin</h2>
                                <area class="shortloin" 
                                      shape="poly" 
                                      coords="670,103, 685,168, 689,231, 675,297, 805,315, 820,254, 815,173, 700,172, 730,152, 805,135, 793,89" 
                                      alt="shortloin"                                       
                                      style="cursor: pointer" 
                                      onclick="quizPgInfo(11); randomCut('shortloinQuiz', 11)">
                                <h2 class="sirloin-txt ${model.quiz[4].selected}"
                                      onclick="quizPgInfo(4); randomCut('sirloinQuiz', 4)">Sirloin</h2>
                                <area class="sirloin" 
                                      shape="poly" 
                                      coords="800,87, 810,134, 900,119, 918,106, 907,73" 
                                      alt="sirloin"                                       
                                      style="cursor: pointer" 
                                      onclick="quizPgInfo(4); randomCut('sirloinQuiz', 4)">
                                <h2 class="tenderloin-txt ${model.quiz[6].selected}"
                                      onclick="quizPgInfo(6); randomCut('tenderloinQuiz', 6)">Tenderloin</h2>
                                <area class="tenderloin" 
                                      shape="poly" 
                                      coords="720,167, 800,146, 881,132, 920,120, 930,150, 830,165" 
                                      alt="tenderloin"                                       
                                      style="cursor: 
                                      pointer" 
                                      onclick="quizPgInfo(6); randomCut('tenderloinQuiz', 6)">
                                <h2 class="topsirloin-txt ${model.quiz[5].selected}"
                                      onclick="quizPgInfo(5); randomCut('topsirloinQuiz', 5)">Top Sirloin</h2>
                                <area class="topSirloin" 
                                      shape="poly" 
                                      coords="823,173, 825,200, 925,198, 942,203, 933,159" 
                                      alt="topSirloin"                                        
                                      style="cursor: pointer" 
                                      onclick="quizPgInfo(5); randomCut('topsirloinQuiz', 6)">
                                <h2 class="bottomsirloin-txt ${model.quiz[8].selected}"
                                      onclick="quizPgInfo(8); randomCut('bottomsirloinQuiz', 8)">Bottom Sirloin</h2>
                                <area class="bottomSirloin" 
                                      shape="poly" 
                                      coords="826,208, 826,257, 822,288, 813,317, 900,343, 925,355, 937,360, 947,296, 942,214, " 
                                      alt="bottomSirloin"                                      
                                      style="cursor: pointer" 
                                      onclick="quizPgInfo(8); randomCut('bottomsirloinQuiz', 8)">
                                <h2 class="flank-txt ${model.quiz[7].selected}"
                                      onclick="quizPgInfo(7); randomCut('flankQuiz', 7)">Flank</h2>
                                <area class="flank" 
                                      shape="poly" 
                                      coords="672,310, 668,347, 673,386, 832,374, 912,359, 861,336" 
                                      alt="flank"                                       
                                      style="cursor: pointer" 
                                      onclick="quizPgInfo(7); randomCut('flankQuiz', 7)">
                                <h2 class="rounds-txt ${model.quiz[9].selected}"
                                      onclick="quizPgInfo(9); randomCut('roundsQuiz', 9)">Rounds</h2>
                                <area class="round" 
                                      shape="poly" 
                                      coords="916,75, 951,197, 958,280, 954,321, 948,359, 1040,359, 1069,275, 1073,177, 1047,91, 1050,54" 
                                      alt="round" 
                                      style="cursor: pointer" 
                                      onclick="quizPgInfo(9); randomCut('roundsQuiz', 9)">
                                <h2 class="shankR-txt ${model.quiz[10].selected}"
                                      onclick="quizPgInfo(10); randomCut('shankQuiz', 10)">Shank</h2>
                                <area class="shankR" 
                                      shape="poly" 
                                      coords="925,370, 995,446, 1050,450, 1045,367" 
                                      alt="shankR"                                    
                                      style="cursor: pointer" 
                                      onclick="quizPgInfo(10); randomCut('shankQuiz', 10)">
                                <h2 class="shankF-txt ${model.quiz[10].selected}"
                                      onclick="quizPgInfo(10); randomCut('shankQuiz', 10)">Shank</h2>
                                <area class="shankF" 
                                      shape="poly" 
                                      coords="369,412, 395,488, 437,488, 455,414" 
                                      alt="shankF"  
                                      style="cursor: pointer" 
                                      onclick="quizPgInfo(10); randomCut('shankQuiz', 10)">
                                </map>
                            </div>
                            <div id="quiz-info">
                        
                            </div>
                
    `;
    appHTML.innerHTML = quizPage;
}

function quizPgInfo(index){
      const quizInfoDiv = document.getElementById("quiz-info");
      const cut = model.cuts[index];
      quizInfo = `
      <h1>${model.question}</h1>
      <img src="${cut.picture}"/>
      <h2>Svaralternativer: <p id="cut-uses">${model.choices}</p></h2>
      `;
      quizInfoDiv.innerHTML = quizInfo;
  }