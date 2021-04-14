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

    if (localStorage.getItem("q2") != 'answered'){    
        if (localStorage.getItem("status2") != 'correct'){
            let score = parseInt(localStorage.getItem("score"));
            score += 1;
            localStorage.setItem("score", score.toString());
            localStorage.setItem("q2", 'answered');
            localStorage.setItem("status2", 'correct');
        }
    }else if (localStorage.getItem("status2") != 'correct'){
            let score = parseInt(localStorage.getItem("score"));
            score += 1;
            localStorage.setItem("score", score.toString());
            localStorage.setItem("status2", 'correct');
        }
});



wrongAnswer1.addEventListener("click", function() {

    if (localStorage.getItem("q2") == 'answered'){
        if (localStorage.getItem("status2") == 'correct'){
            
            let score = parseInt(localStorage.getItem("score"));
            score -= 1;
            localStorage.setItem("score", score.toString());
        } 
    } 
    
    localStorage.setItem("status2", 'incorrect');
    localStorage.setItem("q2", 'answered');
    
});


function getScore(){
    document.querySelector(".score").textContent = localStorage.getItem("score") + "/5";
    wrongAnswer1 = document.querySelector('.wrong1');
    wrongAnswer2 = document.querySelector('.wrong2');
    wrongAnswer3 = document.querySelector('.wrong3');
    wrongAnswer4 = document.querySelector('.wrong4');
    rightAnswer = document.querySelector('.reef');


    if (localStorage.getItem("q2") != 'answered'){
        localStorage.setItem("q2", 'unanswered');
    }
}

wrongAnswer2.addEventListener("click", function() {

    if (localStorage.getItem("q2") == 'answered'){
        if (localStorage.getItem("status2") == 'correct'){
            
            let score = parseInt(localStorage.getItem("score"));
            score -= 1;
            localStorage.setItem("score", score.toString());

        } 
    }
    localStorage.setItem("status2", 'incorrect');
    localStorage.setItem("q2", 'answered');
});

wrongAnswer3.addEventListener("click", function() {

    if (localStorage.getItem("q2") == 'answered'){
        if (localStorage.getItem("status2") == 'correct'){
            
            let score = parseInt(localStorage.getItem("score"));
            score -= 1;
            localStorage.setItem("score", score.toString());

        } 
    }
    localStorage.setItem("status2", 'incorrect');
    localStorage.setItem("q2", 'answered');
});

wrongAnswer4.addEventListener("click", function() {

    if (localStorage.getItem("q2") == 'answered'){
        if (localStorage.getItem("status2") == 'correct'){
            
            let score = parseInt(localStorage.getItem("score"));
            score -= 1;
            localStorage.setItem("score", score.toString());

        } 
    }
    localStorage.setItem("status2", 'incorrect');
    localStorage.setItem("q2", 'answered');
});