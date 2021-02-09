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
                            <div id="pig" style="text-align: center"><img src="images/grisNoName.jpg" width="1132" height"676" alt="heileGrisen" usemap="#pigMap">
                                <map id="pigMap" name="pigMap">
                                <area class="head" 
                                      shape="poly" 
                                      coords="10,151, 8,205, 134,275, 262,307, 327,68, 263,57, 204,74, 183,39, 152,4, 118,38, 121,84, 140,110, 76,149 " 
                                      alt="chuck" 
                                      style="cursor: pointer" onclick="doSomething()"
                                      >
                                <area class="bladeShoulder" 
                                      shape="poly" 
                                      coords="328,66, 290,215, 427,231, 452,129, 485,64, 385,74 " 
                                      alt="chuck" 
                                      style="cursor: pointer" onclick="doSomething()"
                                      >
                                <area class="armShoulder" 
                                      shape="poly" 
                                      coords="293,220, 275,286, 265,313, 314,337, 340,368, 425,476, 469,455, 411,365, 446,361, 428,282, 430,235 " 
                                      alt="chuck" 
                                      style="cursor: pointer" onclick="doSomething()" 
                                      >
                                <area class="loin" 
                                      shape="poly" 
                                      coords="489,66, 452,139, 431,232, 434,285, 716,319, 715,270, 761,177, 814,99, 861,61, 683,55 " 
                                      alt="chuck" 
                                      style="cursor: pointer" onclick="doSomething()" 
                                      >
                                <area class="spareRib" 
                                      shape="poly" 
                                      coords="438,295, 445,362, 659,319,  " 
                                      alt="chuck" 
                                      style="cursor: pointer" onclick="doSomething()" 
                                      >
                                <area class="side" 
                                      shape="poly" 
                                      coords="450,370, 680,408, 750,395, 713,320, 654,324 " 
                                      alt="chuck" 
                                      style="cursor: pointer" onclick="doSomething()" 
                                      >
                                <area class="hock" 
                                      shape="poly" 
                                      coords="425,482, 469,561, 482,558, 492,516, 470,459" 
                                      alt="chuck" 
                                      style="cursor: pointer" onclick="doSomething()" 
                                      >
                                <area class="leg" 
                                      shape="poly" 
                                      coords="860,66, 809,107, 769,162, 718,269, 719,321, 757,393, 840,433, 931,457, 1000,429, 946,381, 1004,361, 1046,292, 1054,242, 1043,210, 972,213, 945,176, 944,136, 959,112, 920,80" 
                                      alt="chuck" 
                                      style="cursor: pointer" onclick="doSomething()" 
                                      >
                        `;
    appHTML.innerHTML = picturePage;
}

function doSomething() {
    console.log('hei');
}