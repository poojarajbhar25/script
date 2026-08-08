const choices = document.querySelectorAll(".choice");

const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const result = document.getElementById("result");

const rockSound = document.getElementById("rockSound");
const paperSound = document.getElementById("paperSound");
const scissorsSound = document.getElementById("scissorsSound");

const computerChoices = ["rock","paper","scissors"];

choices.forEach((choice)=>{

    choice.addEventListener("click",()=>{

        const userChoice = choice.dataset.choice;

        if(userChoice==="rock"){
            rockSound.currentTime = 0;
            rockSound.play();
        }

        if(userChoice==="paper"){
            paperSound.currentTime = 0;
            paperSound.play();
        }

        if(userChoice==="scissors"){
            scissorsSound.currentTime = 0;
            scissorsSound.play();
        }


        const randomIndex = Math.floor(Math.random()*3);
        const computer = computerChoices[randomIndex];

        playerChoice.innerText = "Your Choice : " + userChoice;
        computerChoice.innerText = "Computer Choice : " + computer;


        if(userChoice===computer){
            result.innerText="Draw 🤝";
        }

        else if(
            (userChoice==="rock" && computer==="scissors") ||
            (userChoice==="paper" && computer==="rock") ||
            (userChoice==="scissors" && computer==="paper")
        ){
            result.innerText="You Win 🎉";
        }

        else{
            result.innerText="Computer Wins 😢";
        }

    });

});