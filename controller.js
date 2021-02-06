function picturePgInfo(pos) {
    let index = model.cuts[pos];
    console.log(index);
}

function testFn(thing){
if(thing != null){
    console.log(thing)
}else {
    console.log("click");
}
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
    }

}
function findRandomCut(){
 model.selectedRandomCut = Math.floor(Math.random() * model.quiz.length +1);
 randomCut(model.quiz[model.selectedRandomCut].name, model.selectedRandomCut);
 console.log(model.quiz[model.selectedRandomCut].name, model.selectedRandomCut);
}
function randomCut(selected, index) {
    const rib = model.quiz[index]; 
    const chuck = model.quiz[index];
    const brisket = model.quiz[index];
    const plate = model.quiz[index];
    const sirloin = model.quiz[index];
    const topSirloin = model.quiz[index];
    const tenderloin = model.quiz[index];
    const flank = model.quiz[index];
    const bottomSirloin = model.quiz[index];
    const rounds = model.quiz[index];
    const shank = model.quiz[index];
    const shortLoin = model.quiz[index];

    switch(selected){
        case "chuckQuiz":
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
            quizPgView();
            quizPgInfo(index)
            break;
        case "ribQuiz":
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
            quizPgView();
            quizPgInfo(index)
            break;
        case "brisketQuiz":
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
            quizPgView();
            quizPgInfo(index)
            break;
        case "plateQuiz":
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
            quizPgView();
            quizPgInfo(index)
            break;
        case "sirloinQuiz":
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
            quizPgView();
            quizPgInfo(index)
            break;
        case "topsirloinQuiz":
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
            quizPgView();
            quizPgInfo(index)
            break;
        case "tenderloinQuiz":
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
            quizPgView();
            quizPgInfo(index)
            break;
        case "flankQuiz":
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
            quizPgView();
            quizPgInfo(index)
            break;
        case "bottomsirloinQuiz":
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
            quizPgView();
            quizPgInfo(index)
            break;
        case "roundsQuiz":
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
            quizPgView();
            quizPgInfo(index)
            break;
        case "shankQuiz":
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
            quizPgView();
            quizPgInfo(index)
            break;
        case "shortloinQuiz":
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
            quizPgView();
            quizPgInfo(index)
            break;
        
    }

    if(model.quiz[index].selected = true){
        model.quiz[index].ifTrue = "X";
        // model.quiz[!index].ifTrue = "nei :^)";
    };
    
}