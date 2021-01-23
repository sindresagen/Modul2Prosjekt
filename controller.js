function addSomething() {
    model.li += ` <li>kuashdgfljkaisgdfjkl</li>`;
    listPgView();
}

function selectedImg(imgID) {
    if (imgID == chosenImg) {
        chosenImg = '';
    } else {
        chosenImg = imgID;
    }
    picturePgView();
}

function createBorder(imgID) {
    let border = 'none';
    if (imgID == chosenIMG) {
        border = 'white';
    }

    return ``;
}

function chooseCut(){
    console.log("hei");
}