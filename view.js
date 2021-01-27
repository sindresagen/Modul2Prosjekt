buttonPgView();
function buttonPgView() {
    let buttonPage = `<div class="box">
                        <div class="button-page">
                            <img src="https://cdn.discordapp.com/attachments/796668478261297152/800658341361614858/ButcherIT_logo_1.png" alt="ButcherIT Logo">
                            <button class="button button5" onclick="picturePgView()">Bilde modus</button>
                            <button class="button button5">Quiz</button>
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
    const listInfo = document.getElementById("list-info")
    const cut = model.cuts[i];
    listInfo.innerHTML = `
    <h1>${cut.name}</h1>
    <h2>info:<p id="cut-info">${cut.info}</p></h2>
    <h2>bruksområder:<p id="cut-uses">${cut.use}</p></h2>
    <img src="${cut.picture}"/>
    `;
}

function picturePgView(){
    let picturePage = `
                             <div class="picture-page"> 
                                <button class="buttonPic" onclick="buttonPgView()">STORFE</button>
                                <button class="buttonPic">SVIN</button>
                                <button class="buttonPic">KYLLING</button> 
                                <button id="picReturnbtn" class="fa fa-home" onclick="buttonPgView()" style="top:0vw;left:-34vw;"></button>
                            </div>
                            <div id="cow" style="text-align: center"><img src="images/ku2.png" width="1132" height"676" alt="heileKua" usemap="#cowMap"><map id="cowMap" name="cowMap">
                            <area class="chuck" shape="poly" coords="260,55, 253,90, 280,300, 445,300, 440,100 " alt="chuck" target="_blank" href="./reeeee.html">
                            <area class="rib" shape="poly" coords="450,100, 460,297, 666,298, 675,185, 655,104, 558,109" alt="rib" target="_blank" href="./reeeee.html">
                            <area class="brisket" shape="poly" coords="295,318, 333,400, 445,403, 450,312" alt="brisket" target="_blank" href="./reeeee.html">
                            <area class="plate" shape="poly" coords="458,309, 460,403, 660,388, 657,340, 660,312" alt="plate" target="_blank" href="./reeeee.html">
                            <area class="shortloin" shape="poly" coords="670,103, 685,168, 689,231, 675,297, 805,315, 820,254, 815,173, 700,172, 730,152, 805,135, 793,89" alt="shortloin" target="_blank" href="./reeeee.html">
                            <area class="sirloin" shape="poly" coords="800,87, 810,134, 900,119, 918,106, 907,73" alt="sirloin" target="_blank" href="./reeeee.html">
                            <area class="tenderloin" shape="poly" coords="720,167, 800,146, 881,132, 920,120, 930,150, 830,165" alt="tenderloin" target="_blank" href="./reeeee.html">
                            <area class="topSirloin" shape="poly" coords="823,173, 825,200, 925,198, 942,203, 933,159" alt="topSirloin" target="_blank" href="./reeeee.html">
                            <area class="bottomSirloin" shape="poly" coords="826,208, 826,257, 822,288, 813,317, 900,343, 925,355, 937,360, 947,296, 942,214, " alt="bottomSirloin" target="_blank" href="./reeeee.html">
                            <area class="flank" shape="poly" coords="672,310, 668,347, 673,386, 832,374, 912,359, 861,336" alt="flank" target="_blank" href="./reeeee.html">
                            <area class="round" shape="poly" coords="916,75, 951,197, 958,280, 954,321, 948,359, 1040,359, 1069,275, 1073,177, 1047,91, 1050,54" alt="round" target="_blank" href="./reeeee.html">
                            <area class="shankR" shape="poly" coords="925,370, 995,446, 1050,450, 1045,367" alt="shankR" target="_blank" href="./reeeee.html">
                            <area class="shankF" shape="poly" coords="369,412, 395,488, 437,488, 455,414" alt="shankF" target="_blank" href="./reeeee.html">
                            </map>
                            </div>
                        `;
    appHTML.innerHTML = picturePage;
}