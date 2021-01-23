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
                            <div id="cow">
                            <img id="wholeCowSVG" class="cow" src="SVGpics/wholeCow.svg" />
                            <img id="chuckSVG" class="chuck"  src="SVGpics/chuck2.svg" />
                            <img id="brisketSVG" class="brisket" src="SVGpics/brisket.svg" />
                            <img id="ribSVG" class="rib" src="SVGpics/rib.svg" />
                            <img id="plateSVG" class="plate" src="SVGpics/plate.svg" />
                            <img id="shortloinSVG" class="shortloin" src="SVGpics/shortLoin2.svg" />
                            <img id="flankSVG" class="flank" src="SVGpics/flank.svg" />
                            <img id="tenderloinSVG" class="tenderloin" src="SVGpics/tenderloin2.svg" />
                            <img id="sirloinSVG" class="sirloin" src="SVGpics/sirloin.svg" />
                            <img id="topSirloinSVG" class="topSirloin" src="SVGpics/topSirloin.svg" />
                            <img id="bottomSirloinSVG" class="bottomSirloin" src="SVGpics/bottomSirloin.svg" />
                            <img id="roundSVG" class="round" src="SVGpics/round.svg" />
                            ${cowPics[1].shankF};
                            ${cowPics[0].shankR};
                            </div>
                        `;
    appHTML.innerHTML = picturePage;
}