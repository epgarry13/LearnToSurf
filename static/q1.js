
getScore();

rightAnswer.addEventListener("click", function() {
    if (localStorage.getItem("q1") != 'answered'){
        if (localStorage.getItem("status") != 'correct'){
            let score = parseInt(localStorage.getItem("score"));
            score += 1;
            localStorage.setItem("score", score.toString());
            localStorage.setItem("q1", 'answered');
            localStorage.setItem("status", 'correct');
        } 
    } else if (localStorage.getItem("status") != 'correct'){
            let score = parseInt(localStorage.getItem("score"));
            score += 1;
            localStorage.setItem("score", score.toString());
            localStorage.setItem("status", 'correct');
    }
});

wrongAnswer.addEventListener("click", function() {
    if (localStorage.getItem("q1") == 'answered'){
        if (localStorage.getItem("status") == 'correct'){
            let score = parseInt(localStorage.getItem("score"));
            score -= 1;
            localStorage.setItem("score", score.toString());
            localStorage.setItem("status", 'incorrect');
        } 
    }
});

function getScore(){
    rightAnswer = document.querySelector('.kook');
    wrongAnswer = document.querySelector('.wrong-answer');
    

    if (localStorage.getItem("q1") != 'answered'){
        document.querySelector(".score").textContent = "0/5";
        localStorage.setItem("score", "0");
        localStorage.setItem("status", 'incorrect');
        localStorage.setItem("q1", 'unanswered');
    } else {
        let score = parseInt(localStorage.getItem("score"));
        localStorage.setItem("score", score.toString());
        document.querySelector(".score").textContent = localStorage.getItem("score") + "/5";

    }
}

reset = document.querySelector('.modal-ID');

reset.addEventListener("click", function() {
    localStorage.setItem("q1", 'unanswered');
    localStorage.setItem("q2", 'unanswered');
    localStorage.setItem("q3", 'unanswered');
    localStorage.setItem("q4", 'unanswered');

    localStorage.setItem("status1", 'incorrect');
    localStorage.setItem("status2", 'incorrect');
    localStorage.setItem("status3", 'incorrect');
    localStorage.setItem("status4", 'incorrect');
});