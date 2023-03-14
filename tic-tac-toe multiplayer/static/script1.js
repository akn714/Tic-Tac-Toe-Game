function debug(args){
    console.log(args);
}
let game = document.getElementsByClassName('game')[0];
let btns = document.getElementsByClassName('btn');
let gameOver = false;
let btnsObj = {
    '11': btns[0],
    '12': btns[1],
    '13': btns[2],
    '21': btns[3],
    '22': btns[4],
    '23': btns[5],
    '31': btns[6],
    '32': btns[7],
    '33': btns[8]
}
