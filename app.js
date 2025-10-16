let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



const getCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>
{
    msg.innerText ="Game was draw. play again";
   
}

const showWinner=(userWin,userchoice,compchoice) =>{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText =`You Win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor ="#008000";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText =`You Lost! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "#ff0000";
    }
}

const playGame =(userchoice)=>{
    const compchoice = getCompChoice();
    if(userchoice===compchoice)
    {
        drawGame();
    }
    else{
        let userWin = true;
        if(userchoice==="rock")
        {
            //paper,scissor
            userWin = compchoice ==="paper" ? false : true;
        }
        else if(userchoice === "paper")
        {
            userWin = compchoice ==="scissor" ?false : true;
        }
        else{
            userWin =compchoice ==="rock" ?false:true;
        }
        showWinner(userWin, userchoice, compchoice);
        
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
       playGame(userchoice);
    });
});