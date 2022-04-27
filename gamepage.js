

    
    player1id = localStorage.getItem("player1id");
player2id = localStorage.getItem("player2id");

player1idscore=0;
player2idscore=0;

document.getElemnentById("player1id").innerHTML =player1id +" :";
document.getElemnentById("player2id").innerHTML =player2id +" :";

document.getElementById("player1idscore").innerHTML =player1idscore;
document.getElementById("player2idscore").innerHTML =player2idscore;

document.getElementById("player_question").innerHTML="Question Turn - " + player1id;
document.getElementById("player_answer").innerHTML="Answer Turn - " + player2id;


    function send() {
        number1 = document.getElementById("number1").value;
        number2 = document.getElementById("number2").value;
        actual_answer = parseInt(number1) * parseInt(number2);
        console.log(actual_answer);

        question_word = "<h5>" + number1 + " X " + number2 + "</h5>";
        input_box = "<br>Answer : <input type='text' id='input_check_box'>";
        check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
        row = question_word + input_box + check_button;
        document.getElementById("output").innerHTML = row;
        document.getElementById("number1").value = "";
        document.getElementById("number2").value = "";
    }

    question_turn = "player1";
    answer_turn = "player2";

    function check()
{
get_answer = document.getElementById("input_check_box").value;
if(get_answer == actual_answer)
{
if(answer_turn == "player1")
{
player1score = player1idscore + 1;
document.getElementById("player1idscore").innerHTML = player1idscore;

}
else
{
player2idscore = player2idscore + 1;
document.getElementById("player2idscore").innerHTML = player2idscore;
}
}
if(question_turn == "player1")
{
question_turn="player2"
document.getElementById("player_question").innerHTML = "Question Turn - " + player2id;
}
else
{
question_turn="player1"
document.getElementById("player_question").innerHTML = "Question Turn - " + player1id;
}
if(answer_turn == "player1")
{
    answer_turn = "player2"
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2id;
}
else
{
answer_turn = "player1"
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1id;
}
document.getElementById("output").innerHTML = "";
}




    
