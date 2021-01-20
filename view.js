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
                        <button id="returnbtn" onclick="buttonPgView()">return</button>
                        <div class="list">
                            <ul id="list-elements">
                            <h2>Choose a cut:</h2>
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
            list += `<li id="list-${i}">${cut.name}</li>`;
        }
    }
    liElements.innerHTML += list;

}


function picturePgView(){
    let picturePage = `
                            <div class="picture-page">
                                <button class="buttonPic">Storfe</button>
                                <button class="buttonPic">Gris</button>
                                <button class="buttonPic">Kylling</button>
                                <button id="picReturnbtn" onclick="buttonPgView()">return</button>
                            </div>
                            <div id="cow">
                            <img class="cow" src="SVGpics/wholeCow.svg" />
                            <img class="chuck" src="SVGpics/chuck2.svg" />
                            <img class="brisket" src="SVGpics/brisket.svg" />
                            <img class="rib" src="SVGpics/rib.svg" />
                            <img class="plate" src="SVGpics/plate.svg" />
                            <img class="shortloin" src="SVGpics/shortLoin2.svg" />
                            <img class="flank" src="SVGpics/flank.svg" />
                            <img class="tenderloin" src="SVGpics/tenderloin2.svg" />
                            <img class="sirloin" src="SVGpics/sirloin.svg" />
                            <img class="topSirloin" src="SVGpics/topSirloin.svg" />
                            <img class="bottomSirloin" src="SVGpics/bottomSirloin.svg" />
                            <img class="round" src="SVGpics/round.svg" />
                            <img class="shankF" src="SVGpics/shankFront.svg" />
                            <img class="shankR" src="SVGpics/shankRear.svg" />
                            </div>
                        `;
    appHTML.innerHTML = picturePage;
}