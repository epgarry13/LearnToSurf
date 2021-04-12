getScore();

rightAnswer = document.querySelector('.answer4');
wrongAnswer1 = document.querySelector('.answer1');
wrongAnswer2 = document.querySelector('.answer2');
wrongAnswer3 = document.querySelector('.answer3');

rightAnswer.addEventListener("click", function() {

    if (localStorage.getItem("score") == '4'){
        str = "Congratulations! You scored: 100%. You're ready to jump in the water!";
        let answerDiv = document.querySelector('.a4');
        customModal(str, '.a4-body');

    } else {
        let answerDiv = document.querySelector('.a4');
        let score = parseInt(localStorage.getItem("score"));
        score += 1;
        perc = score/5 * 100
        str = "You scored: " +  perc + "%. Please Try Again";        
        customModal(str, '.a4-body');
   
    }
    document.querySelector(".score").textContent = "0/5";
    localStorage.setItem("score", "0");
    localStorage.setItem("q1", 'unanswered');
    localStorage.setItem("q2", 'unanswered');
    localStorage.setItem("q3", 'unanswered');
    localStorage.setItem("q4", 'unanswered');
});

wrongAnswer1.addEventListener("click", function() {

    let answerDiv = document.querySelector('.a1');
    let score = parseInt(localStorage.getItem("score"));
    perc = score/5  * 100
    str = "You scored: " +  perc + "%. Please Try Again";
    customModal(str, '.a1-body');
});
wrongAnswer2.addEventListener("click", function() {
    let answerDiv = document.querySelector('.a2');
    let score = parseInt(localStorage.getItem("score"));
    perc = score/5  * 100
    str = "You scored: " +  perc + "%. Please Try Again";    
    customModal(str, '.a2-body');
});
wrongAnswer3.addEventListener("click", function() {
    let answerDiv = document.querySelector('.a3');
    let score = parseInt(localStorage.getItem("score"));
    perc = score/5  * 100
    str = "You scored: " +  perc + "%. Please Try Again";    
    customModal(str, '.a3-body');
});


function getScore(){
    document.querySelector(".score").textContent = localStorage.getItem("score") + "/5";
}


function customModal(score, parentDiv){

    var q1 = localStorage.getItem("q1");
    var q2 = localStorage.getItem("q2");
    var q3 = localStorage.getItem("q3");
    var q4 = localStorage.getItem("q4");
    
    if (q1 == 'unanswered'){
        var str1 = '<div>Q1: Incorrect. The right answer was "Kook" - the surfer is not protecting his head.</div>'
    } else {
        var str1 = '<div>Q1: Correct!</div>'
    }

    if (q2 == 'unanswered'){
        var str2 = '<div>Q2: Incorrect. The right answer was "Reef".</div>'
    } else {
        var str2 = '<div>Q2: Correct!</div>'
    }

    if (q3 == 'unanswered'){
        var str3 = '<div>Q3: Incorrect. The right answer was "Kook". The surfer is too far low on his board.</div>'
    } else {
        var str3 = '<div>Q3: Correct!</div>'
    }

    if (q4 == 'unanswered'){
        var str4 = '<div>Q4: Incorrect. The right answer was "Kook". The surfer on the right is cutting off the other surfer.</div>'
    } else {
        var str4 = '<div>Q4: Correct!</div>'
    }

    if (parentDiv == '.a4-body'){
        var str5 = '<div>Q5: Correct!</div>'
    } else {
        var str5 = '<div>Q5: Incorrect. The right answer was "Longboard".</div>'
    }
    
    let answerDiv = document.querySelector(parentDiv);
    answerDiv.innerHTML = `
    <em>${score}</em>
    <div class='mt-3'>
        <h5>Score Breakdown: </h5>
    </div>
    <div class='mt-3 scorelines'>
        ${str1}
        ${str2}
        ${str3}
        ${str4}
        ${str5}
    </div>
    `;
      
}


reset = document.querySelector('.modal-home');

reset.addEventListener("click", function() {
    localStorage.setItem("q1", 'unanswered');
    localStorage.setItem("q2", 'unanswered');
    localStorage.setItem("q3", 'unanswered');
    localStorage.setItem("q4", 'unanswered');
});