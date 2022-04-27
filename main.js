function Adduser() {
    player1id = document.getElementById("player1id").value;
    player2id = document.getElementById("player2id").value;

    localStorage.setitem("player1id", player1id);
    localStorage.setitem("player2id", player2id);

    window.location.replace="2index.html";
}
    
    