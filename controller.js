function picturePgInfo(pos) {
    let index = model.cuts[pos];
    console.log(index);
}

function testFn(thing){
if(thing != null){
    console.log(thing)
}else {
    console.log("null parameter");
}
}
function changeAnimal(animal){
    model.chosenAnimal = animal;
}

function defaultChosen(){
    const rib = model.cuts[0];
    const chuck = model.cuts[1];
    const brisket = model.cuts[2];
    const plate = model.cuts[3];
    const sirloin = model.cuts[4];
    const topSirloin = model.cuts[5];
    const tenderloin = model.cuts[6];
    const flank = model.cuts[7];
    const bottomSirloin = model.cuts[8];
    const rounds = model.cuts[9];
    const shank = model.cuts[10];
    const shortLoin = model.cuts[11];
            rib.chosen = "defaultChosen";
            chuck.chosen = "defaultChosen";
            brisket.chosen = "defaultChosen";
            plate.chosen = "defaultChosen";
            sirloin.chosen = "defaultChosen";
            topSirloin.chosen = "defaultChosen";
            tenderloin.chosen = "defaultChosen";
            flank.chosen = "defaultChosen";
            bottomSirloin.chosen = "defaultChosen";
            rounds.chosen = "defaultChosen";
            shank.chosen = "defaultChosen";
            shortLoin.chosen = "defaultChosen";

    const head = model.cuts[18];
    const bladeShoulder = model.cuts[19];
    const armShoulder = model.cuts[20];
    const loin = model.cuts[21];
    const spareRib = model.cuts[22];
    const side = model.cuts[23];
    const leg = model.cuts[24];
    const hock = model.cuts[25];
            head.chosen = "defaultChosen";
            bladeShoulder.chosen = "defaultChosen";
            armShoulder.chosen = "defaultChosen";
            loin.chosen = "defaultChosen";
            spareRib.chosen = "defaultChosen";
            side.chosen = "defaultChosen";
            leg.chosen = "defaultChosen";
            hock.chosen = "defaultChosen";

    const breast = model.cuts[12];
    const back = model.cuts[13];
    const chiggunleg = model.cuts[14];
    const neck = model.cuts[15];
    const thigh = model.cuts[16];
    const wings = model.cuts[17];
            breast.chosen = "defaultChosen";
            back.chosen = "defaultChosen";
            chiggunleg.chosen = "defaultChosen";
            neck.chosen = "defaultChosen";
            thigh.chosen = "defaultChosen";
            wings.chosen = "defaultChosen";

}

function chooseCut(cut, index){
    const rib = model.cuts[0];
    const chuck = model.cuts[1];
    const brisket = model.cuts[2];
    const plate = model.cuts[3];
    const sirloin = model.cuts[4];
    const topSirloin = model.cuts[5];
    const tenderloin = model.cuts[6];
    const flank = model.cuts[7];
    const bottomSirloin = model.cuts[8];
    const rounds = model.cuts[9];
    const shank = model.cuts[10];
    const shortLoin = model.cuts[11];

    const head = model.cuts[18];
    const bladeShoulder = model.cuts[19];
    const armShoulder = model.cuts[20];
    const loin = model.cuts[21];
    const spareRib = model.cuts[22];
    const side = model.cuts[23];
    const leg = model.cuts[24];
    const hock = model.cuts[25];

    const breast = model.cuts[12];
    const back = model.cuts[13];
    const chiggunleg = model.cuts[14];
    const neck = model.cuts[15];
    const thigh = model.cuts[16];
    const wings = model.cuts[17];

    switch(cut){
        case "chuck":
            rib.chosen = "not-chosen";
            chuck.chosen = "chosen";
            brisket.chosen = "not-chosen";
            plate.chosen = "not-chosen";
            sirloin.chosen = "not-chosen";
            topSirloin.chosen = "not-chosen";
            tenderloin.chosen = "not-chosen";
            flank.chosen = "not-chosen";
            bottomSirloin.chosen = "not-chosen";
            rounds.chosen = "not-chosen";
            shank.chosen = "not-chosen";
            shortLoin.chosen = "not-chosen";
            picturePgView();
            picPgInfo(index)
            break;
        case "rib":
            chuck.chosen = "not-chosen";
            rib.chosen = "chosen";
            brisket.chosen = "not-chosen";
            plate.chosen = "not-chosen";
            sirloin.chosen = "not-chosen";
            topSirloin.chosen = "not-chosen";
            tenderloin.chosen = "not-chosen";
            flank.chosen = "not-chosen";
            bottomSirloin.chosen = "not-chosen";
            rounds.chosen = "not-chosen";
            shank.chosen = "not-chosen";
            shortLoin.chosen = "not-chosen";
            picturePgView();
            picPgInfo(index)
            break;
        case "brisket":
            rib.chosen = "not-chosen";
            chuck.chosen = "not-chosen";
            brisket.chosen = "chosen";
            plate.chosen = "not-chosen";
            sirloin.chosen = "not-chosen";
            topSirloin.chosen = "not-chosen";
            tenderloin.chosen = "not-chosen";
            flank.chosen = "not-chosen";
            bottomSirloin.chosen = "not-chosen";
            rounds.chosen = "not-chosen";
            shank.chosen = "not-chosen";
            shortLoin.chosen = "not-chosen";
            picturePgView();
            picPgInfo(index)
            break;
        case "plate":
            rib.chosen = "not-chosen";
            chuck.chosen = "not-chosen";
            brisket.chosen = "not-chosen";
            plate.chosen = "chosen";
            sirloin.chosen = "not-chosen";
            topSirloin.chosen = "not-chosen";
            tenderloin.chosen = "not-chosen";
            flank.chosen = "not-chosen";
            bottomSirloin.chosen = "not-chosen";
            rounds.chosen = "not-chosen";
            shank.chosen = "not-chosen";
            shortLoin.chosen = "not-chosen";
            picturePgView();
            picPgInfo(index)
            break;
        case "sirloin":
            rib.chosen = "not-chosen";
            chuck.chosen = "not-chosen";
            brisket.chosen = "not-chosen";
            plate.chosen = "not-chosen";
            sirloin.chosen = "chosen";
            topSirloin.chosen = "not-chosen";
            tenderloin.chosen = "not-chosen";
            flank.chosen = "not-chosen";
            bottomSirloin.chosen = "not-chosen";
            rounds.chosen = "not-chosen";
            shank.chosen = "not-chosen";
            shortLoin.chosen = "not-chosen";
            picturePgView();
            picPgInfo(index)
            break;
        case "topsirloin":
            rib.chosen = "not-chosen";
            chuck.chosen = "not-chosen";
            brisket.chosen = "not-chosen";
            plate.chosen = "not-chosen";
            sirloin.chosen = "not-chosen";
            topSirloin.chosen = "chosen";
            tenderloin.chosen = "not-chosen";
            flank.chosen = "not-chosen";
            bottomSirloin.chosen = "not-chosen";
            rounds.chosen = "not-chosen";
            shank.chosen = "not-chosen";
            shortLoin.chosen = "not-chosen";
            picturePgView();
            picPgInfo(index)
            break;
        case "tenderloin":
            rib.chosen = "not-chosen";
            chuck.chosen = "not-chosen";
            brisket.chosen = "not-chosen";
            plate.chosen = "not-chosen";
            sirloin.chosen = "not-chosen";
            topSirloin.chosen = "not-chosen";
            tenderloin.chosen = "chosen";
            flank.chosen = "not-chosen";
            bottomSirloin.chosen = "not-chosen";
            rounds.chosen = "not-chosen";
            shank.chosen = "not-chosen";
            shortLoin.chosen = "not-chosen";
            picturePgView();
            picPgInfo(index)
            break;
        case "flank":
            rib.chosen = "not-chosen";
            chuck.chosen = "not-chosen";
            brisket.chosen = "not-chosen";
            plate.chosen = "not-chosen";
            sirloin.chosen = "not-chosen";
            topSirloin.chosen = "not-chosen";
            tenderloin.chosen = "not-chosen";
            flank.chosen = "chosen";
            bottomSirloin.chosen = "not-chosen";
            rounds.chosen = "not-chosen";
            shank.chosen = "not-chosen";
            shortLoin.chosen = "not-chosen";
            picturePgView();
            picPgInfo(index)
            break;
        case "bottomsirloin":
            rib.chosen = "not-chosen";
            chuck.chosen = "not-chosen";
            brisket.chosen = "not-chosen";
            plate.chosen = "not-chosen";
            sirloin.chosen = "not-chosen";
            topSirloin.chosen = "not-chosen";
            tenderloin.chosen = "not-chosen";
            flank.chosen = "not-chosen";
            bottomSirloin.chosen = "chosen";
            rounds.chosen = "not-chosen";
            shank.chosen = "not-chosen";
            shortLoin.chosen = "not-chosen";
            picturePgView();
            picPgInfo(index)
            break;
        case "rounds":
            rib.chosen = "not-chosen";
            chuck.chosen = "not-chosen";
            brisket.chosen = "not-chosen";
            plate.chosen = "not-chosen";
            sirloin.chosen = "not-chosen";
            topSirloin.chosen = "not-chosen";
            tenderloin.chosen = "not-chosen";
            flank.chosen = "not-chosen";
            bottomSirloin.chosen = "not-chosen";
            rounds.chosen = "chosen";
            shank.chosen = "not-chosen";
            shortLoin.chosen = "not-chosen";
            picturePgView();
            picPgInfo(index)
            break;
        case "shank":
            rib.chosen = "not-chosen";
            chuck.chosen = "not-chosen";
            brisket.chosen = "not-chosen";
            plate.chosen = "not-chosen";
            sirloin.chosen = "not-chosen";
            topSirloin.chosen = "not-chosen";
            tenderloin.chosen = "not-chosen";
            flank.chosen = "not-chosen";
            bottomSirloin.chosen = "not-chosen";
            rounds.chosen = "not-chosen";
            shank.chosen = "chosen";
            shortLoin.chosen = "not-chosen";
            picturePgView();
            picPgInfo(index)
            break;
        case "shortloin":
            rib.chosen = "not-chosen";
            chuck.chosen = "not-chosen";
            brisket.chosen = "not-chosen";
            plate.chosen = "not-chosen";
            sirloin.chosen = "not-chosen";
            topSirloin.chosen = "not-chosen";
            tenderloin.chosen = "not-chosen";
            flank.chosen = "not-chosen";
            bottomSirloin.chosen = "not-chosen";
            rounds.chosen = "not-chosen";
            shank.chosen = "not-chosen";
            shortLoin.chosen = "chosen";
            picturePgView();
            picPgInfo(index)
            break;
    //piggy
        case "head":
            head.chosen = "chosen";
            bladeShoulder.chosen = "not-chosen";
            armShoulder.chosen = "not-chosen";
            loin.chosen = "not-chosen";
            spareRib.chosen = "not-chosen";
            side.chosen = "not-chosen";
            leg.chosen = "not-chosen";
            hock.chosen = "not-chosen";
            picturePgView();
            picPgInfo(index)
            break;
        case "bladeshoulder":
            head.chosen = "not-chosen";
            bladeShoulder.chosen = "chosen";
            armShoulder.chosen = "not-chosen";
            loin.chosen = "not-chosen";
            spareRib.chosen = "not-chosen";
            side.chosen = "not-chosen";
            leg.chosen = "not-chosen";
            hock.chosen = "not-chosen";
            picturePgView();
            picPgInfo(index)
            break;
        case "armshoulder":
            head.chosen = "not-chosen";
            bladeShoulder.chosen = "not-chosen";
            armShoulder.chosen = "chosen";
            loin.chosen = "not-chosen";
            spareRib.chosen = "not-chosen";
            side.chosen = "not-chosen";
            leg.chosen = "not-chosen";
            hock.chosen = "not-chosen";
            picturePgView();
            picPgInfo(index)
            break;
        case "loin":
            head.chosen = "not-chosen";
            bladeShoulder.chosen = "not-chosen";
            armShoulder.chosen = "not-chosen";
            loin.chosen = "chosen";
            spareRib.chosen = "not-chosen";
            side.chosen = "not-chosen";
            leg.chosen = "not-chosen";
            hock.chosen = "not-chosen";
            picturePgView();
            picPgInfo(index)
            break;
        case "sparerib":
            head.chosen = "not-chosen";
            bladeShoulder.chosen = "not-chosen";
            armShoulder.chosen = "not-chosen";
            loin.chosen = "not-chosen";
            spareRib.chosen = "chosen";
            side.chosen = "not-chosen";
            leg.chosen = "not-chosen";
            hock.chosen = "not-chosen";
            picturePgView();
            picPgInfo(index)
            break;
        case "side":
            head.chosen = "not-chosen";
            bladeShoulder.chosen = "not-chosen";
            armShoulder.chosen = "not-chosen";
            loin.chosen = "not-chosen";
            spareRib.chosen = "not-chosen";
            side.chosen = "chosen";
            leg.chosen = "not-chosen";
            hock.chosen = "not-chosen";
            picturePgView();
            picPgInfo(index)
            break;
        case "leg":
            head.chosen = "not-chosen";
            bladeShoulder.chosen = "not-chosen";
            armShoulder.chosen = "not-chosen";
            loin.chosen = "not-chosen";
            spareRib.chosen = "not-chosen";
            side.chosen = "not-chosen";
            leg.chosen = "chosen";
            hock.chosen = "not-chosen";
            picturePgView();
            picPgInfo(index)
            break;
        case "hock":
            head.chosen = "not-chosen";
            bladeShoulder.chosen = "not-chosen";
            armShoulder.chosen = "not-chosen";
            loin.chosen = "not-chosen";
            spareRib.chosen = "not-chosen";
            side.chosen = "not-chosen";
            leg.chosen = "not-chosen";
            hock.chosen = "chosen";
            picturePgView();
            picPgInfo(index)
            break;

            //chiggen
        case "breast":
            breast.chosen = "chosen";
            back.chosen = "not-chosen";
            chiggunleg.chosen = "not-chosen";
            neck.chosen = "not-chosen";
            thigh.chosen = "not-chosen";
            wings.chosen = "not-chosen";
            picturePgView();
            picPgInfo(index)
            break;
        case "back":
            breast.chosen = "not-chosen";
            back.chosen = "chosen";
            chiggunleg.chosen = "not-chosen";
            neck.chosen = "not-chosen";
            thigh.chosen = "not-chosen";
            wings.chosen = "not-chosen";
            picturePgView();
            picPgInfo(index)
            break;
        case "chiggenleg":
            breast.chosen = "not-chosen";
            back.chosen = "not-chosen";
            chiggunleg.chosen = "chosen";
            neck.chosen = "not-chosen";
            thigh.chosen = "not-chosen";
            wings.chosen = "not-chosen";
            picturePgView();
            picPgInfo(index)
            break;
        case "neck":
            breast.chosen = "not-chosen";
            back.chosen = "not-chosen";
            chiggunleg.chosen = "not-chosen";
            neck.chosen = "chosen";
            thigh.chosen = "not-chosen";
            wings.chosen = "not-chosen";
            picturePgView();
            picPgInfo(index)
            break;
        case "thigh":
            breast.chosen = "not-chosen";
            back.chosen = "not-chosen";
            chiggunleg.chosen = "not-chosen";
            neck.chosen = "not-chosen";
            thigh.chosen = "chosen";
            wings.chosen = "not-chosen";
            picturePgView();
            picPgInfo(index)
            break;
        case "wings":
            breast.chosen = "not-chosen";
            back.chosen = "not-chosen";
            chiggunleg.chosen = "not-chosen";
            neck.chosen = "not-chosen";
            thigh.chosen = "not-chosen";
            wings.chosen = "chosen";
            picturePgView();
            picPgInfo(index)
            break;
    }

}
// PORK view thing, yes.

//quizmode stoofs
function findRandomCut(){
 model.selectedRandomCut = Math.floor(Math.random() * model.quiz.length);
 pushChoices(model.quiz[model.selectedRandomCut].name, model.selectedRandomCut);
 randomCut(model.quiz[model.selectedRandomCut].name, model.selectedRandomCut);
}

function pushChoices(answer, answerIndex){
    model.choices = [];
    model.tempArr = [];
    model.rightAnswer = answer;
    for (let i=0;i<12;i++){model.tempArr.push(model.cuts[i])}
    model.tempArr.splice(answerIndex ,1);
    for (let j=0;j<3;j++){
        let tempArrLength = Math.floor(Math.random()*model.tempArr.length);
        model.choices.push(model.tempArr[tempArrLength].name)
        model.tempArr.splice(tempArrLength,1);
    }
    model.choices.push(answer);
    shuffle(model.choices)
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

function randomCut(selected, index) {
    const rib = model.quiz[0]; 
    const chuck = model.quiz[1];
    const brisket = model.quiz[2];
    const plate = model.quiz[3];
    const sirloin = model.quiz[4];
    const topSirloin = model.quiz[5];
    const tenderloin = model.quiz[6];
    const flank = model.quiz[7];
    const bottomSirloin = model.quiz[8];
    const rounds = model.quiz[9];
    const shank = model.quiz[10];
    const shortLoin = model.quiz[11];

    switch(selected){
        case "Chuck":
            rib.selected = false;
            chuck.selected = true;
            brisket.selected = false;
            plate.selected = false;
            sirloin.selected = false;
            topSirloin.selected = false;
            tenderloin.selected = false;
            flank.selected = false;
            bottomSirloin.selected = false;
            rounds.selected = false;
            shank.selected = false;
            shortLoin.selected = false;
            quizPgView(index);
            ifSelected(index);
            break;
        case "Rib":
            rib.selected = true;
            chuck.selected = false;
            brisket.selected = false;
            plate.selected = false;
            sirloin.selected = false;
            topSirloin.selected = false;
            tenderloin.selected = false;
            flank.selected = false;
            bottomSirloin.selected = false;
            rounds.selected = false;
            shank.selected = false;
            shortLoin.selected = false;
            ifSelected(index);
            quizPgView(index);
            break;
        case "Brisket":
            rib.selected = false;
            chuck.selected = false;
            brisket.selected = true;
            plate.selected = false;
            sirloin.selected = false;
            topSirloin.selected = false;
            tenderloin.selected = false;
            flank.selected = false;
            bottomSirloin.selected = false;
            rounds.selected = false;
            shank.selected = false;
            shortLoin.selected = false;
            ifSelected(index);
            quizPgView(index);
            break;
        case "Plate":
            rib.selected = false;
            chuck.selected = false;
            brisket.selected = false;
            plate.selected = true;
            sirloin.selected = false;
            topSirloin.selected = false;
            tenderloin.selected = false;
            flank.selected = false;
            bottomSirloin.selected = false;
            rounds.selected = false;
            shank.selected = false;
            shortLoin.selected = false;
            ifSelected(index);
            quizPgView(index);
            break;
        case "Sirloin":
            rib.selected = false;
            chuck.selected = false;
            brisket.selected = false;
            plate.selected = false;
            sirloin.selected = true;
            topSirloin.selected = false;
            tenderloin.selected = false;
            flank.selected = false;
            bottomSirloin.selected = false;
            rounds.selected = false;
            shank.selected = false;
            shortLoin.selected = false;
            ifSelected(index);
            quizPgView(index);
            break;
        case "Top sirloin":
            rib.selected = false;
            chuck.selected = false;
            brisket.selected = false;
            plate.selected = false;
            sirloin.selected = false;
            topSirloin.selected = true;
            tenderloin.selected = false;
            flank.selected = false;
            bottomSirloin.selected = false;
            rounds.selected = false;
            shank.selected = false;
            shortLoin.selected = false;
            ifSelected(index);
            quizPgView(index);
            break;
        case "Tenderloin":
            rib.selected = false;
            chuck.selected = false;
            brisket.selected = false;
            plate.selected = false;
            sirloin.selected = false;
            topSirloin.selected = false;
            tenderloin.selected = true;
            flank.selected = false;
            bottomSirloin.selected = false;
            rounds.selected = false;
            shank.selected = false;
            shortLoin.selected = false;
            ifSelected(index);
            quizPgView(index);
            break;
        case "Flank":
            rib.selected = false;
            chuck.selected = false;
            brisket.selected = false;
            plate.selected = false;
            sirloin.selected = false;
            topSirloin.selected = false;
            tenderloin.selected = false;
            flank.selected = true;
            bottomSirloin.selected = false;
            rounds.selected = false;
            shank.selected = false;
            shortLoin.selected = false;
            ifSelected(index);
            quizPgView(index);
            break;
        case "Bottom sirloin":
            rib.selected = false;
            chuck.selected = false;
            brisket.selected = false;
            plate.selected = false;
            sirloin.selected = false;
            topSirloin.selected = false;
            tenderloin.selected = false;
            flank.selected = false;
            bottomSirloin.selected = true;
            rounds.selected = false;
            shank.selected = false;
            shortLoin.selected = false;
            ifSelected(index);
            quizPgView(index);
            break;
        case "Rounds":
            rib.selected = false;
            chuck.selected = false;
            brisket.selected = false;
            plate.selected = false;
            sirloin.selected = false;
            topSirloin.selected = false;
            tenderloin.selected = false;
            flank.selected = false;
            bottomSirloin.selected = false;
            rounds.selected = true;
            shank.selected = false;
            shortLoin.selected = false;
            ifSelected(index);
            quizPgView(index);
            break;
        case "Shank":
            rib.selected = false;
            chuck.selected = false;
            brisket.selected = false;
            plate.selected = false;
            sirloin.selected = false;
            topSirloin.selected = false;
            tenderloin.selected = false;
            flank.selected = false;
            bottomSirloin.selected = false;
            rounds.selected = false;
            shank.selected = true;
            shortLoin.selected = false;
            ifSelected(index);
            quizPgView(index);
            break;
        case "shortloin":
            rib.selected = false;
            chuck.selected = false;
            brisket.selected = false;
            plate.selected = false;
            sirloin.selected = false;
            topSirloin.selected = false;
            tenderloin.selected = false;
            flank.selected = false;
            bottomSirloin.selected = false;
            rounds.selected = false;
            shank.selected = false;
            shortLoin.selected = true;
            ifSelected(index);
            quizPgView(index);
            break;
        
    } 
}

function ifSelected(index){
    const rib = model.quiz[0]; 
    const chuck = model.quiz[1];
    const brisket = model.quiz[2];
    const plate = model.quiz[3];
    const sirloin = model.quiz[4];
    const topSirloin = model.quiz[5];
    const tenderloin = model.quiz[6];
    const flank = model.quiz[7];
    const bottomSirloin = model.quiz[8];
    const rounds = model.quiz[9];
    const shank = model.quiz[10];
    const shortLoin = model.quiz[11];

    rib.ifTrue = "";
    chuck.ifTrue = "";
    brisket.ifTrue = "";
    plate.ifTrue = "";
    sirloin.ifTrue = "";
    topSirloin.ifTrue = "";
    tenderloin.ifTrue = "";
    flank.ifTrue = "";
    bottomSirloin.ifTrue = "";
    rounds.ifTrue = "";
    shank.ifTrue = "";
    shortLoin.ifTrue = "";
    if(model.quiz[index].selected == true){
        model.quiz[index].ifTrue = "X";
    }
}
