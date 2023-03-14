let game = document.getElementsByClassName('game')[0];
let btns = document.getElementsByClassName('btn');
let gameOver = false;

let symbols = ['O','X'];
let idx = 0;
game.onclick = (e)=>{
    if(e.target.tagName=='BUTTON'){
        if(e.target.innerText!=''){
            alert('already choosen!');
        }
        else if(gameOver){
            alert('The game has already been finished. Reset the Game to Play again.');
        }
        else{
            e.target.innerText = symbols[idx];
            if(idx==1){
                idx=0;
            }
            else{
                idx++;
            }
            check();
        }
    }
}


function reset(){
    for(let i=0;i<9;i++){
        btns[i].innerText = '';
        btns[i].style.background = '#101010';
    }
    gameOver = false;
}

let obj = {x:false,xco:null,y:false,yco:null,cross:false}
function check(){
    for(let i=0;i<3;i++){
        // console.log(3*i, btns[3*i].className, btns[i].className)
        if(btns[3*i].innerText==btns[1+3*i].innerText && btns[1+3*i].innerText==btns[2+3*i].innerText && btns[3*i].innerText==btns[2+3*i].innerText){
            if(btns[3*i].innerText=='O' || btns[3*i].innerText=='X'){
                obj.x = true;
                obj.xco = btns[3*i].className[0];
                if(gameOver){
                    alert('The game has already been finished. Reset the Game to Play again.');
                }
                else{
                    highlight('x', i);
                    gameOver = true;
                }
                break;
            }
        }
        if(btns[i].innerText==btns[i+3].innerText && btns[i+3].innerText==btns[i+6].innerText && btns[i].innerText==btns[i+6].innerText){
            if(btns[i].innerText=='O' || btns[i].innerText=='X'){
                obj.y = true;
                obj.yco = btns[i].className[1];
                if(gameOver){
                    alert('The game has already been finished. Reset the Game to Play again.');
                }
                else{
                    highlight('y', i);
                    gameOver = true;
                }
                break;
            }
        }
    }
    if(btns[0].innerText==btns[4].innerText && btns[4].innerText==btns[8].innerText && btns[8].innerText==btns[0].innerText){
        if(btns[0].innerText=='O' || btns[0].innerText=='X'){
            obj.cross = true;
            obj.cco = '\\';
            if(gameOver){
                alert('The game has already been finished. Reset the Game to Play again.');
            }
            else{
                highlight('c',obj.cco);
                gameOver = true;
            }
        }
    }
    if(btns[2].innerText==btns[4].innerText && btns[4].innerText==btns[6].innerText && btns[6].innerText==btns[2].innerText){
        if(btns[2].innerText=='O' || btns[2].innerText=='X'){
            obj.cross = true;
            obj.cco = '/';
            if(gameOver){
                alert('The game has already been finished. Reset the Game to Play again.');
            }
            else{
                highlight('c',obj.cco);
                gameOver = true;
            }
        }
    }
    console.log(obj)
}

function highlight(axis, idx){
    if(axis=='x'){
        btns[3*idx].style.background = 'linear-gradient(0deg, #101010, #101010, #101010, #101010, #3300ff, #101010, #101010, #101010, #101010)';
        btns[1+3*idx].style.background = 'linear-gradient(0deg, #101010, #101010, #101010, #101010,#3300ff ,#101010, #101010, #101010, #101010)';
        btns[2+3*idx].style.background = 'linear-gradient(0deg, #101010, #101010, #101010, #101010,#3300ff, #101010, #101010, #101010, #101010)';
    }
    else if(axis=='y'){
        btns[idx].style.background = 'linear-gradient(90deg, #101010, #101010, #101010, #101010,#3300ff, #101010, #101010, #101010, #101010)';
        btns[idx+3].style.background = 'linear-gradient(90deg, #101010, #101010, #101010, #101010,#3300ff, #101010, #101010, #101010, #101010)';
        btns[idx+6].style.background = 'linear-gradient(90deg, #101010, #101010, #101010, #101010,#3300ff, #101010, #101010, #101010, #101010)';
    }
    else if(axis='c'){
        if(idx=='\\'){
            btns[0].style.background =  'linear-gradient(45deg, #101010, #101010, #101010, #101010,#3300ff, #101010, #101010, #101010, #101010)';
            btns[4].style.background =  'linear-gradient(45deg, #101010, #101010, #101010, #101010,#3300ff, #101010, #101010, #101010, #101010)';
            btns[8].style.background =  'linear-gradient(45deg, #101010, #101010, #101010, #101010,#3300ff, #101010, #101010, #101010, #101010)';
        }
        else if(idx=='/'){
            btns[2].style.background = 'linear-gradient(135deg, #101010, #101010, #101010, #101010,#3300ff, #101010, #101010, #101010, #101010)';
            btns[4].style.background = 'linear-gradient(135deg, #101010, #101010, #101010, #101010,#3300ff, #101010, #101010, #101010, #101010)';
            btns[6].style.background = 'linear-gradient(135deg, #101010, #101010, #101010, #101010,#3300ff, #101010, #101010, #101010, #101010)';
        }
    }
}