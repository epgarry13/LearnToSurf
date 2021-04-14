getScore();



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

rightAnswer.addEventListener("click", function() {


    if (localStorage.getItem("q4") != 'answered'){   
      
        if (localStorage.getItem("status4") != 'correct'){

            let score = parseInt(localStorage.getItem("score"));
            score += 1;
            localStorage.setItem("score", score.toString());
            localStorage.setItem("q4", 'answered');
            localStorage.setItem("status4", 'correct');
        }
    }else if (localStorage.getItem("status4") != 'correct'){

            let score = parseInt(localStorage.getItem("score"));
            score += 1;
            localStorage.setItem("score", score.toString());
            localStorage.setItem("status4", 'correct');
        }
});



wrongAnswer1.addEventListener("click", function() {

    if (localStorage.getItem("q4") == 'answered'){
        if (localStorage.getItem("status4") == 'correct'){
            
            let score = parseInt(localStorage.getItem("score"));
            score -= 1;
            localStorage.setItem("score", score.toString());
            localStorage.setItem("status4", 'incorrect');
            localStorage.setItem("q4", 'answered');
        } 
    }
});


function getScore(){
    document.querySelector(".score").textContent = localStorage.getItem("score") + "/5";
    wrongAnswer1 = document.querySelector('.kook');

    rightAnswer = document.querySelector('.right-answer');

    if (localStorage.getItem("q4") != 'answered'){
        localStorage.setItem("q4", 'unanswered');
    }
}