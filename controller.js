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