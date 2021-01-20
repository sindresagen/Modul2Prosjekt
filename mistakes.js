// let animals= [{
//         cuts: {
//             rib: {info:"",
//                   picture:""}, 
//             chuck: {info:"",
//                     picture:""}, 
//             brisket: {info:"",
//                       picture:""}, 
//             plate: {info:"",
//                     picture:""},
//             sirloin: {info:"",
//                       picture:""}, 
//             topsirloin: {info:"",
//                          picture:""}, 
//             tenderloin: {info:"",
//                          picture:""}, 
//             flank: {info:"",
//                     picture:""}, 
//             bottomsirloin: {info:"",
//                             picture:""}, 
//             rounds: {info:"",
//                      picture:""}, 
//             shank: {info:"",
//                      picture:""}, 
//             shortloin: {info:"",
//                         picture:""},
//         },
//         //{ cut: 'Rib', info: '', use: '' }
//     },
//     pork: {},
//     chicken: {}
// }],


//--------------------------------------
list = ``;
    for(i=0;i<model.cuts.length;i++){
        list += createList(i);
        //createList(i);
    }
    liElements.innerHTML += list;
    function createList(i){
        const listing = model.cuts[i];
        let output = model.cuts.filter(cuts => cuts.animal =="cattle")
        return `<li>${output[i].name}</li>`;
    }