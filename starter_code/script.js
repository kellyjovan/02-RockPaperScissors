var userPoint = 0;
var aiPoint = 0;

// This function returns the selection of the computer
function getAISelection() {
    //TODO: randomly choose between 'rock', 'paper', or 'scissors'
    var random = Math.floor(Math.random * 3);
    var choices = ["Rock", "Paper", "Scissors"];
    return choices[random];
}

// This function picks the winner
function pickWinner(userValue, aiValue) {
    //TODO: pick the correct winner: user or ai
    //TODO: Add one point for the winner
    if(userValue == aiValue){
        return "draw";
    } else if(userValue == "Rock"){
        if(aiValue == "Paper"){
            return "cpu";
        } else {
            return "user";
        }
    } else if(userValue == "Paper"){
        if(aiValue == "Scissors"){
            return "cpu";
        } else {
            return "user";
        }
    } else if(userValue == "Scissors"){
        if(aiValue == "Rock"){
            return "cpu";
        } else {
            return "user";
        }
    }
}

// This function sets the scoreboard with the correct points
function setScore() {
    var userText = $('#userPoint');
    userText.text(userPoint);
    var aiText = $('#aiPoint');
    aiText.text(aiPoint);
}

// This function captures the click and picks the winner
function evaluate(evt) {
    var userValue = evt.target.getAttribute('id');
    var aiValue = getAISelection();

    var winner = pickWinner(userValue, aiValue);

    if ( 'user' === winner ) {
        $('#message').delay(50).text('You have won!, Click a box to play again');
        userPoint ++;
    } else if ( winner === 'draw' ) {
        $('#message').delay(50).text('Draw! Click a box to play again');
    } else {
        $('#message').delay(50).text('You have lost!, Click a box to play again');
        aiPoint++; 
    }
    setScore();
}

// This function runs on page load
$(document).ready(function(){
    
});
