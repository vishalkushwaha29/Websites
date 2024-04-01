let gameSeq = [];
let userSeq = [];

let btns = ["red", "blue", "yellow", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");


document.addEventListener("keypress", function() {
    if(started == false) {
        console.log("Game started");
        started = true;

        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("gameFlash")
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    }, 250)
}

function userFlash(btn){
    btn.classList.add("userFlash")
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 250)
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = ("Level " + level);

    let randomIdx = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIdx];
    let randBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx) {
    console.log("Current level : ", level);

    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000)
        }
    } else{
        h2.innerHTML = (`Game Over !! <br><br> Your Score Is <b>${level}</b> <br> <br> Press any key to Start.`);
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    } 
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0 ;
}