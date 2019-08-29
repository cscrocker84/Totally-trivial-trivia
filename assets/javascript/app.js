// Declare Variables
var correctans = 0;
var incorrectans = 0;
var timer = 30;
var intervalId;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;


// Create an array of objects with questions and answers

var game = [

    question = {
        q     : "Which is the most expensive football player?",
        option1: "Lionel Messi",
        option2: "Cristiano Ronaldo",
        option3: "Neymar Jr",
        option4: "Gareth Bale",
        Answer: "Cristiano Ronaldo",
    },

    question = {
        q     : "Which club has won the most champions league Trophies?",
        option1: "Real Madrid",
        option2: "Barcelona FC",
        option3: "Liverpool FC",
        option4: "Manchester United",
        Answer: "Real Madrid",
    },

    question = {
        q     : "Who was best FIFA Men's Player for year 2018?",
        option1: "Lionel Messi",
        option2: "Cristiano Ronaldo",
        option3: "Luka Modric",
        option4: "Mohamed Salah",
        Answer: "Luka Modric",
    },

    question = {
        q     : "Who was best FIFA Men's Coach for year 2018?",
        option1: "Didier Deschamps",
        option2: "Zlatko Dalic",
        option3: "Zinedine Zidane",
        option4: "Massimiliano Allegri",
        Answer: "Didier Deschamps",
    },

    question = {
        q     : "Who was best FIFA Men's Goalkeeper for year 2018?",
        option1: "Hugo LLORIS",
        option2: "Thibaut Courtois",
        option3: "David De Gea",
        option4: "Kasper SCHMEICHEL",
        Answer: "Thibaut Courtois",
    }
]

var i = 0;

// Start the game and hide everything other than answers and timer

$("#start").on("click", function(){
    document.getElementById("start").style.display = "none";
    document.getElementById("main").style.display = "block";
    document.getElementById("header").style.display = "block";
    html();
})

// If/Else statements for wrong and correct answers

$("#option1").on("click", function(){
    if (document.getElementById("option1").textContent == game[i].Answer){
        anssectionC(); 
        clearInterval(intervalId);
        setTimeout(increment, 1000*5);
       
    } else{
        anssectionW();
        clearInterval(intervalId);
        setTimeout(increment, 1000*5);
        
    }
})

$("#option2").on("click", function(){
    if (document.getElementById("option2").textContent == game[i].Answer){
        anssectionC();
        clearInterval(intervalId);
        setTimeout(increment, 1000*5);
    } else{
        anssectionW();
        clearInterval(intervalId);
        setTimeout(increment, 1000*5);
        
    }
})

$("#option3").on("click", function(){
    if (document.getElementById("option3").textContent == game[i].Answer){
        anssectionC();
        clearInterval(intervalId);
        setTimeout(increment, 1000*5);
        
    } else{
        anssectionW();
        clearInterval(intervalId);
        setTimeout(increment, 1000*5);
    }
})

$("#option4").on("click", function(){
    if (document.getElementById("option4").textContent == game[i].Answer){
        anssectionC();
        clearInterval(intervalId);
        setTimeout(increment, 1000*5);
    } else{
        anssectionW();
        clearInterval(intervalId);
        setTimeout(increment, 1000*5);
    }
})

//Created a function to loop through the array of objects and trigger the end of the game


function increment(){

    if(i<game.length-1){
        i = i+1;
        timer = 30;
        reset();
    }else{
        completion();
    }
}

//Function for creating the HTML for the questions and the timer

function html(){
    run();
    document.getElementById("question").textContent = game[i].q;
    document.getElementById("option1").textContent = game[i].option1;
    document.getElementById("option2").textContent = game[i].option2;
    document.getElementById("option3").textContent = game[i].option3;
    document.getElementById("option4").textContent = game[i].option4;
    //document.getElementById("ans_img").setAttribute("src", game[i].img);

}

//Function for displaying the html if answer is correct

function anssectionC(){
    document.getElementById("QA").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("msg").textContent = "Correct Answer"
    clearInterval(intervalId);
}

//function for displaying the html if answer is wrong

function anssectionW(){
    document.getElementById("QA").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("msg").textContent = "Incorrect Answer"
    clearInterval(intervalId);
}

//function for displaying the html when the game is completed

function completion(){
    document.getElementById("QA").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("msg").textContent = "You completed the Q&A"
    document.getElementById("score").style.display = "You got "+correctans+" guesses correct out of 5!";
    clearInterval(intervalId);
}






//function for recreating Q&A Section

function reset(){
    document.getElementById("QA").style.display = "block";
    document.getElementById("header").style.display = "block";
    document.getElementById("result").style.display = "none";
    html();
}

//Functions for the Timer

function run() {
    intervalId = setInterval(time, 1000);       
      
  }

function time() {

    timer= timer-1;
    document.getElementById("count").textContent = timer;

    if(timer === 0){
        clearInterval(intervalId);
    }
  }