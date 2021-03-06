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
        str = "You scored: " +  perc + "%. Please Try Again.";        
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
    str = "You scored: " +  perc + "%. Please Try Again.";
    customModal(str, '.a1-body');
});
wrongAnswer2.addEventListener("click", function() {
    let answerDiv = document.querySelector('.a2');
    let score = parseInt(localStorage.getItem("score"));
    perc = score/5  * 100
    str = "You scored: " +  perc + "%. Please Try Again.";    
    customModal(str, '.a2-body');
});
wrongAnswer3.addEventListener("click", function() {
    let answerDiv = document.querySelector('.a3');
    let score = parseInt(localStorage.getItem("score"));
    perc = score/5  * 100
    str = "You scored: " +  perc + "%. Please Try Again.";    
    customModal(str, '.a3-body');
});


function getScore(){
    document.querySelector(".score").textContent = localStorage.getItem("score") + "/5";
}


function customModal(score, parentDiv){

    var q1 = localStorage.getItem("status");
    var q2 = localStorage.getItem("status2");
    var q3 = localStorage.getItem("status3");
    var q4 = localStorage.getItem("status4");
    
    if (q1 == 'incorrect'){
        var str1 = '<div><span class="red">Q1: Incorrect. </span>The surfer is not protecting his head.</div>'
    } else {
        var str1 = '<div><span class="green">Q1: Correct!</span></div>'
    }

    if (q2 == 'incorrect'){
        var str2 = '<div><span class="red">Q2: Incorrect. </span>The right answer was <em>Reef</em>.</div>'
    } else {
        var str2 = '<div><span class="green">Q2: Correct!</span></div>'
    }

    if (q3 == 'incorrect'){
        var str3 = '<div><span class="red">Q3: Incorrect. </span>The surfer is too far low on his board.</div>'
    } else {
        var str3 = '<div><span class="green">Q3: Correct!</span></div>'
    }

    if (q4 == 'incorrect'){
        var str4 = '<div><span class="red">Q4: Incorrect. </span>The surfer on the right is cutting off the other surfer.</div>'
    } else {
        var str4 = '<div><span class="green">Q4: Correct!</span></div>'
    }

    if (parentDiv == '.a4-body'){
        var str5 = '<div><span class="green">Q5: Correct!</span></div>'
    } else {
        var str5 = '<div><span class="red">Q5: Incorrect. </span>The right answer was <em>Longboard</em>.</div>'
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


    localStorage.setItem("q1", 'unanswered');
    localStorage.setItem("q2", 'unanswered');
    localStorage.setItem("q3", 'unanswered');
    localStorage.setItem("q4", 'unanswered');
    localStorage.setItem("status1", 'incorrect');
    localStorage.setItem("status2", 'incorrect');
    localStorage.setItem("status3", 'incorrect');
    localStorage.setItem("status4", 'incorrect');
    localStorage.setItem("score", "0");

    
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
    localStorage.setItem("score", "0");
});