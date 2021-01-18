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
                            <h2 onclick="addSomething()">cuts:</h2>
                            ${model.li}
                            </ul>
                        </div>
                    </div>`;
    appHTML.innerHTML = listPage;
}

function picturePgView(){
    let picturePage = `
                            <div class="picture-page">
                                <button class="buttonPic button5">Storfe</button>
                                <button class="buttonPic">Gris</button>
                                <button class="buttonPic">Kylling</button>
                                <button id="returnbtn" onclick="buttonPgView()">return</button>
                            </div>
                        `;
    appHTML.innerHTML = picturePage;
}