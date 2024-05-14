// let counter=0;
// let computerNumber=5;
// while(counter<3){
//     let userGuessed=prompt("Please Enter a Number");
//     if (userGuessed==computerNumber){
//         alert("Wohoo You Guessed Correct Number");
//         break;
//     }
//     else{
//         alert("Sorrry Wrong Number");
//     }

//     if(counter==2){
//         alert("Last chance");
//     }
//     counter++;
// }

const containers=document.querySelector(".container");
const hint =document.getElementById("hint");
const noOfGuessesRef=document.getElementById("no-of-guesses");
const guessedNumsRef =document.getElementById("guessed-nums");
const restartButton = document.getElementById("restart");
const game = document.getElementById("game");
const guessInput =document.getElementById("guess");
const checkButton = document.getElementById("check-btn");
console.log(containers);

let answer,guess=0, noOfGuesses=10, GuessedNumsArr=[];

const play=()=>{
    console.log("called the play button");
    const userguess=guessInput.value; 
    if(userguess<1 || userguess>100 || isNaN(userguess)){
        alert("Please enter a valid number between 1-100");
        return;

    }

   
    GuessedNumsArr.push(userguess);
    noOfGuesses--;
    guess++;
    if(userguess!=answer){
        if(userguess<answer){
            if(noOfGuesses==0){
                game.style.display="none";
                restartButton.style.display="block";
                restartButton.innerText="Try Again";
                hint.classList.add("error");
                hint.innerHTML="GAMEOVER";
                hint.style.paddingTop= "20px";
                hint.style.paddingBottom= "25px";
                console.log("Gameover");

                return;
        
            }
            const soClose=answer-userguess;
            if(soClose<=10){
                hint.innerHTML="So Close. Try Again";
                
            }
            if(soClose>10){
                hint.innerHTML="Too low. Try Again";
            }
            

        }
        else{
            if(noOfGuesses==0){
                game.style.display="none";
                restartButton.style.display="block";
                restartButton.innerText="Try Again";
                hint.classList.add("error");
                hint.innerHTML="GAMEOVER";
                hint.style.paddingTop = "20px";
                hint.style.paddingBottom = "18px";
                console.log("Gameover");
                return;
        
            }
            const soClose1=userguess-answer;
            if(soClose1<=10){
                hint.innerHTML="So Close. Try Again";
                
            }
            if(soClose1>10){
                hint.innerHTML="Too High. Try Again";
            }
        }
        noOfGuessesRef.innerHTML=`<span>No. Of Guesses Remaining:</span>${noOfGuesses}`;
        guessedNumsRef.innerHTML=`<span>Guessed Numbers Are:</span>${GuessedNumsArr.join(",")}`;
        hint.classList.remove("error");
        setTimeout(() => {
            hint.classList.add("error");
        }, 10);
       
    }

    else{
        hint.innerHTML=`Congratulation:<br>The Number Was ${ answer}<span>,<br>You Guessed The Number In  ${ guess}</span> Tries`;
        hint.classList.add("success");
        game.style.display="none";
        restartButton.style.display="block";
        restartButton.innerText="Play Again";
    }

   
    };


    const init=()=>{
        console.log("Game Started");
        answer=Math.floor(Math.random()*100+1);
        console.log(answer);
        noOfGuesses=10;
        guess=0;
        GuessedNumsArr=[];
        noOfGuessesRef.innerHTML="Guessed Numbers are: None";
        guessedNumsRef.innerHTML="";
        guessInput.value="";
        hint.classList.remove("success","error");
     
            containers.style.transition = "padding 2s ease";
          
        
                console.log("gameintialized");
}


guessInput.addEventListener("keydown", (event)=>{
    if(event.keyCode===13){
            event.preventDefault();
            play();
    }
})


restartButton.addEventListener("click",()=>{
    game.style.display="grid";
    restartButton.style.display="none";
    hint.innerHTML="";
    hint.classList.remove("success");
    init();
})

checkButton.addEventListener("click",play);
window.addEventListener("load",init);


