getScore();

rightAnswer = document.querySelector('.right-answer');
wrongAnswer = document.querySelectorAll('.wrong');

rightAnswer.addEventListener("click", function() {
    if (localStorage.getItem("score") == '4/5'){
        alert('Congrats! You scored 100%!');
    } else {
        let score = parseInt(localStorage.getItem("score"));
        score += 1;
        str = "You scored: " +  score.toString() + "/5";
        alert(str);
    }
});

wrongAnswer.addEventListener("click", function() {
    str = "You scored: " +  localStorage.getItem("score") + "/5";
    alert(str);
});

function getScore(){
    document.querySelector(".score").textContent = localStorage.getItem("score") + "/5";
}
