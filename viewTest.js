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
            list += `<li id="list-${i}" onclick="listPgInfo(${i})">${cut.name}</li>`;
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
                            <div class="picture-page"> 
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
                                   <h2 class="neck-txt" onclick="picPgInfo(15); chooseCut('neck', 15)">Neck</h2>
                                   <area class="neck"
                                        shape="poly"
                                        coords="387,58, 350,96, 377,127, 391,147, 361,235, 397,245, 430,243, 464,223, 470,213, 460,141, 443,105, 425,88, 431,75, 415,50"
                                        alt="neck"
                                        style="cursor: pointer" onclick="picPgInfo(15); chooseCut="('neck', 15)" href="">
                                    <h2 class="breast-txt" onclick="picPgInfo(12); chooseCut=""
                                    <h2 class="wings-txt "
                                          onclick="picPgInfo(17); chooseCut('wings', 17)">Wings</h2>
                                    <area class="wing" 
                                          shape="poly" 
                                          coords="464,270, 452,280, 444,299, 448,323, 462,337, 494,351, 540,356, 565,350, 590,336, 573,332, 559,324, 551,310, 541,290, 523,272, 496,263, 474,265" 
                                          alt="chuck" 
                                          style="cursor: pointer" onclick="picPgInfo(17); chooseCut('wings', 17)" href="">
                                    <h2 class="back-txt "
                                          onclick="picPgInfo(13); chooseCut('back', 13)">Back</h2>
                                    <area class="back" 
                                          shape="poly" 
                                          coords="474,221, 454,238, 424,246, 451,257, 457,266, 477,259, 497,259, 517,266, 539,282, 554,305, 568,323, 583,329, 603,325, 595,340, 576,352, 595,362, 608,370, 606,331, 597,297, 587,272, 579,256, 558,264, 538,264, 493,248, 480,232" 
                                          alt="chuck" 
                                          style="cursor: pointer" onclick="picPgInfo(13); chooseCut('back', 13)" href="">
                                    <h2 class="chiggenleg-txt "
                                          onclick="picPgInfo(14); chooseCut('chiggenleg', 14)">Leg</h2>
                                    <area class="leg" 
                                          shape="poly" 
                                          coords="514,405, 494,428, 483,457, 483,482, 501,509, 514,509, 550,497, 572,478, 586,468, 583,426, 565,403, 548,396, 525,402" 
                                          alt="chuck" 
                                          style="cursor: pointer" onclick="picPgInfo(14); chooseCut('chiggenleg', 14)" href="">
                                    <h2 class="thigh-txt "
                                          onclick="picPgInfo(16); chooseCut('thigh', 16)">Thigh</h2>
                                    <area class="thigh" 
                                          shape="poly" 
                                          coords="508,362, 503,391, 489,424, 460,483, 467,499, 498,515, 545,508, 570,503, 597,486, 634,441, 639,428, 639,411, 611,376, 590,363, 571,355, 540,364" 
                                          alt="chuck" 
                                          style="cursor: pointer" onclick="picPgInfo(16); chooseCut('thigh', 16)" href="">
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
    appHTML.innerHTML = picturePage;
}

function doSomething() {
    console.log('hei');
}

function doSomething1() {
    console.log('hei på deg');
}