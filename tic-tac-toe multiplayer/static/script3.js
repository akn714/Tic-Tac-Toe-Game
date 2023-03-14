let socket = io();

let name = prompt('enter your name to play with other players :');
if (name != '') {
    socket.emit('player name', name);
}
socket.on('pn', (name) => {
    alert(name + ' joined the game');
})

let iplayed = false;
let symbols = ['O', 'X'];
let idx = 0;
game.onclick = e => {
    if (e.target.tagName == 'BUTTON') {
        if (e.target.innerText != '') {
            alert('already choosen!');
        }
        else if (gameOver) {
            alert('The game has already been finished. Reset the Game to Play again.');
        }
        else {
            if (idx <= 1) {
                if (!iplayed) {
                    e.target.innerText = symbols[idx];
                    socket.emit('player selected', { idx: idx, position: e.target.id });
                    iplayed = true;
                    check();
                }
                else {
                    alert('not your turn');
                }
                if (idx == 1) {
                    idx = 0;
                }
                else {
                    idx = 1;
                }
            }
        }
    }
}

socket.on('ps', obj => {
    btnsObj[obj.position].innerText = symbols[obj.idx];
    if (obj.idx == 1) {
        idx = 0;
    }
    else {
        idx = 1;
    }
    check();
    iplayed = false;
})

socket.on('gr', () => {
    reset();
})
function reset() {
    for (let i = 0; i < 9; i++) {
        btns[i].innerText = '';
        btns[i].style.background = '#101010';
    }
    gameOver = false;
    iplayed = false;
}
function restart() {
    socket.emit('game reset');
    reset();
}
