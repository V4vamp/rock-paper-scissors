let gameResult = document.getElementById("result");

let [user_score, robot_score] = [0,0];

let optionsObject = {
    'rock':{
        'rock': 'draw',
        'scissors': 'win',
        'paper': 'lose'
    },
    'scissors': {
        'scissors': 'draw',
        'paper': 'win',
        'rock': 'lose'
    },
    'paper':{
        'paper':'draw',
        'rock': 'win',
        'scissors': 'lose'
    }
}

function check(input){
    var options = ["rock", "paper", "scissors"];

    var num = Math.floor(Math.random()*3);

    document.getElementById("robot_choice").innerHTML = 
    
    `Robot choose <span>${options[num].toUpperCase()}</span>`;

    document.getElementById("my_choice").innerHTML = 
    `You choose <span>${input.toUpperCase()}</span>`;

    let robotChoice = options[num];
    
    switch(optionsObject[input][robotChoice]){
        case 'win':
            gameResult.style.cssText = "background-color: #cefdce; color: #689f38";
            gameResult.innerHTML = "YOU WIN";
            user_score++;
            break;
        case 'lose':
            gameResult.style.cssText = "background-color: #ffdde0; color: #d32f2f"; 
            gameResult.innerHTML = "YOU LOSE";
            robot_score++;
            break;
        default:
            gameResult.style.cssText = "background-color: #e5e5e5; color: #808080"
            gameResult.innerHTML = "DRAW";
            break;
    }
    document.getElementById("robot_score").innerHTML = robot_score;
    document.getElementById("user_score").innerHTML = user_score;

    if (user_score === 10) {
        gameResult.style.cssText = "background-color: #cefdce; color: #689f38";
        gameResult.innerHTML = "YOU WIN THE GAME!";
        user_score = 0;
        robot_score = 0;
        celebrateWin();
      } else if (robot_score === 10) {
        gameResult.style.cssText = "background-color: #ffdde0; color: #d32f2f"; 
        gameResult.innerHTML = "YOU LOSE THE GAME!";
        user_score = 0;
        robot_score = 0;
        showSadFace();
      }
      
}

function celebrateWin() {
    fireworks();
  }
  
  function showSadFace() {
    gameResult.innerHTML = "YOU LOSE THE GAME! &#x1F622";
  }
  function restartGame() {
    user_score = 0;
    robot_score = 0;
    document.getElementById("user_score").innerHTML = user_score;
    document.getElementById("robot_score").innerHTML = robot_score;
    gameResult.innerHTML = "";
  }
  