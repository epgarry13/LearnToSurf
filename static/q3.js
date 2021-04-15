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
    localStorage.setItem("score", "0");
});

rightAnswer.addEventListener("click", function() {


    if (localStorage.getItem("q3") != 'answered'){   
      
        if (localStorage.getItem("status3") != 'correct'){
            
            let score = parseInt(localStorage.getItem("score"));
            score += 1;
            localStorage.setItem("score", score.toString());
            localStorage.setItem("q3", 'answered');
            localStorage.setItem("status3", 'correct');
        }
    }else if (localStorage.getItem("status3") != 'correct'){

            let score = parseInt(localStorage.getItem("score"));
            score += 1;
            localStorage.setItem("score", score.toString());
            localStorage.setItem("status3", 'correct');
        }
});



wrongAnswer1.addEventListener("click", function() {

    if (localStorage.getItem("q3") == 'answered'){
        if (localStorage.getItem("status3") == 'correct'){
            
            let score = parseInt(localStorage.getItem("score"));
            score -= 1;
            localStorage.setItem("score", score.toString());
            localStorage.setItem("status3", 'incorrect');
            localStorage.setItem("q3", 'answered');
        } 
    }
});


function getScore(){
    document.querySelector(".score").textContent = localStorage.getItem("score") + "/5";
    wrongAnswer1 = document.querySelector('.not-kook');

    rightAnswer = document.querySelector('.wrong-answer');

    if (localStorage.getItem("q3") != 'answered'){
        localStorage.setItem("q3", 'unanswered');
    }
}
