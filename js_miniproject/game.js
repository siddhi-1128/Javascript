let gameseq = [];
let userseq = [];
let btns = ["yellow","red","purple","green"];


let start = false;
let level = 0 ;
let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function(){
    if(start == false){
        console.log("Game is started");
        start = true;

        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },1000);
}

function levelup(){
    userseq = [];
    level++;
    h2.innerText =`Level  ${level}`;


    //random button
    let randomidx = Math.floor(Math.random() * 3);
    let randomcolor = btns[randomidx];
    let randombtn = document.querySelector(`.${randomcolor}`);
    // console.log(randomidx);
    // console.log(randomcolor);
    // console.log(randombtn);
    gameseq.push(randomcolor);
    console.log(gameseq);
    gameflash(randombtn);
}

function checkAns(idx){
    //console.log("curr level :" ,level);

    //let idx = level - 1 ;

    if (userseq[idx] === gameseq[idx]) {
        if(userseq.length == gameseq.length){
            setTimeout(levelup , 1000);
        }
    } else {
        h2.innerHTML = `Game over... Your score was <b>${level}</b> <br>Press any key to start again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnpress(){
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length - 1);
}

let btnsall = document.querySelectorAll(".btn");
for(btn of btnsall){
    btn.addEventListener("click", btnpress);
}

function reset(){
    start = false;
    gameseq = [];
    userseq = [];
    level = 0 ;
    
}