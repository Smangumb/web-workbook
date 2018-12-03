var player1;
var player2;

var player1 = prompt("Rock, Paper, Scissors");
var player2 = prompt("Rock, Paper, Scissors");

function rps (player1, player2){
    
    if(player1 === player2){
        document.write("It's a tie");
    }else if (player1 ==="Rock" && player2==="Paper"){
        document.write("Player2 Wins")
    }else if (player1 ==="Paper" && player2==="Rock"){
        document.write("Player1 Wins");
    }else if (player1==="Paper" && player2=== "Scissors"){
        document.write("Player2 Wins");
    }else if (player1==="Scissors" && player2=== "Paper"){
        document.write("Player1 Wins");
    }else if (player1==="Scissors" && player2=== "Rock"){
        document.write("Player2 Wins");
    }else if (player1==="Rock" && player2=== "Scissors"){
        document.write("Player1 Wins");
    }
}

rps(player1, player2);