'use strict'

// Welcome popup
alert("Welcome! Let's play a game.");
// Variable setup
var userName;
var qAttemptsCounter = 0;
var qAttemptLimit = 4;
var qScore = 0;
var qValidAns = false;
var qSixAnsArry = ['karate', 'taekwondo'];
var qSevenTargetNumber = 450;

// User details
userName = prompt('Let\'s start with your name please.');

// Question one
function QuestionOne() {
  do{
    var qOneAns = prompt('Do you think this is my first experiance coding? Please answer with a yes/no or y/n').toLowerCase();
    console.log('q 1 ans: '+qOneAns);
    // Answer check and reply
    if(qOneAns === 'yes' || qOneAns ==='y'){
      alert('Nope. I\'ve been playing with c# for a while but this will be my first professional attempt');
      qValidAns = true;
    } else if(qOneAns === 'no' || qOneAns ==='n') {
      alert('Good Guess! I\'ve been playing with c# as a hobby');
      qValidAns = true;
      qScore++;
    } else {
      alert('I\'m sorry please answer with a yes/y or no/n');
      qAttemptsCounter++;
      console.log('Question attempts: ' + qAttemptsCounter);
      if(qAttemptsCounter >= qAttemptLimit){
        alert('OK. Let\'s more on then.');
      }
    }
  } while(qAttemptsCounter < qAttemptLimit && qValidAns === false);
  console.log('Current score: ' + qScore);
}
QuestionOne();
// Question two
function QuestionTwo() {
  // Reset flags and counters
  qValidAns = false;
  qAttemptsCounter = 0;
  do{
    var qTwoAns = prompt('Do you think I am a coffee drinker? Please answer with a yes/no or y/n').toLowerCase();
    console.log('q 2 ans: '+qTwoAns);
    // Answer check and reply
    if(qTwoAns === 'yes' || qTwoAns ==='y'){
      alert('Never. Can\'t stand the stuff. I\'ll go for a 5-hour Energy if a I need a pick me up.');
      qValidAns = true;
    } else if(qTwoAns === 'no' || qTwoAns ==='n') {
      alert('You got it! It can smell good but I\m not a fan of the taste.');
      qValidAns = true;
      qScore++;
    } else {
      alert('I\'m sorry please answer with a yes/y or no/n');
      qAttemptsCounter++;
      console.log('Question attempts: ' + qAttemptsCounter);
      if(qAttemptsCounter >= qAttemptLimit){
        alert('OK. Let\'s more on then.');
      }
    }
  } while(qAttemptsCounter < qAttemptLimit && qValidAns === false);
  console.log('Current score: ' + qScore);
}
QuestionTwo();
// Question three
function QuestionThree() {
  //Reset flags and counters
  qValidAns = false;
  qAttemptsCounter = 0;
  do{
    var qThreeAns = prompt('Do I drive to Code Fellows? Please answer with a yes/no or y/n').toLowerCase();
    console.log('q 3 ans: '+qThreeAns);
    // Answer check and reply
    if(qThreeAns === 'yes' || qThreeAns ==='y'){
      alert('Correct. I live on the eastside so I need to fight traffic to get here.');
      qValidAns = true;
      qScore++;
    } else if(qThreeAns === 'no' || qThreeAns ==='n') {
      alert('Saddly I do drive. My Leaf makes it a bearable though');
      qValidAns = true;
    } else {
      alert('I\'m sorry please answer with a yes/y or no/n');
      qAttemptsCounter++;
      console.log('Question attempts: ' + qAttemptsCounter);
      if(qAttemptsCounter >= qAttemptLimit){
        alert('OK. Let\'s more on then.');
      }
    }
  } while(qAttemptsCounter < qAttemptLimit && qValidAns === false);
  console.log('Current score: ' + qScore);
}
QuestionThree();
// Question Four
function QuestionFour() {
  //Reset flags and counters
  qValidAns = false;
  qAttemptsCounter = 0;
  do{
    var qFourAns = prompt('Do I have pets? Please answer with a yes/no or y/n').toLowerCase();
    console.log('q 4 ans: '+qFourAns);
    // Answer check and reply
    if(qFourAns === 'yes' || qFourAns ==='y'){
      alert('My roomates haev a dog. That counts right?');
      qValidAns = true;
      qScore++;
    } else if(qFourAns === 'no' || qFourAns ==='n') {
      alert('Technically correct but my roomates dog might disagree.');
      qValidAns = true;
      qScore++;
    } else {
      alert('I\'m sorry please answer with a yes/y or no/n');
      qAttemptsCounter++;
      console.log('Question attempts: ' + qAttemptsCounter);
      if(qAttemptsCounter >= qAttemptLimit){
        alert('OK. Let\'s more on then.');
      }
    }
  } while(qAttemptsCounter < qAttemptLimit && qValidAns === false);
  console.log('Current score: ' + qScore);
}
QuestionFour();
// Question FIve
function QuestionFive() {
  //Reset flags and counters
  qValidAns = false;
  qAttemptsCounter = 0;
  do{
    var qFiveAns = prompt('Is mint chip the best flavor of ice cream? Please answer with a yes/no or y/n').toLowerCase();
    console.log('q 5 ans: '+qFiveAns);
    // Answer check and reply
    if(qFiveAns === 'yes' || qFiveAns ==='y'){
      alert('Correct. By far the best!');
      qValidAns = true;
      qScore++;
    } else if(qFiveAns === 'no' || qFiveAns ==='n') {
      alert('Wrong. Nothing beats mint chip.');
      qValidAns = true;
    } else {
      alert('I\'m sorry please answer with a yes/y or no/n');
      qAttemptsCounter++;
      console.log('Question attempts: ' + qAttemptsCounter);
      if(qAttemptsCounter >= qAttemptLimit){
        alert('OK. Let\'s more on then.');
      }
    }
  } while(qAttemptsCounter < qAttemptLimit && qValidAns === false);
  console.log('Current score: ' + qScore);
}
QuestionFive();
// Question Six
function QuestionSix() {
  //Reset flags and counters
  qValidAns = false;
  qAttemptsCounter = 0;
  do{
    var qSixAns = prompt('In my intro I mentioned i earned 2 distinct black belts. Can you guess what basic styles they are in?').toLowerCase();
    console.log('q 6 ans: '+qSixAns);
    // Answer check and reply
    if(qSixAns === qSixAnsArry[0] || qSixAns === qSixAnsArry[1]) {
      alert('Nice job. I studied in a shudokan karate and a taekwondo based system called jungyae moo do.');
      qValidAns = true;
      qScore++;
    } else {
      alert('Nope. Try again!');
      qAttemptsCounter++;
      console.log('Question attempts inside 6: ' + qAttemptsCounter);
      if(qAttemptsCounter >= qAttemptLimit){
        alert('OK. Let\'s more on then.');
      }
    }
  } while(qAttemptsCounter < qAttemptLimit && qValidAns === false);
  console.log('Current score: ' + qScore);
}
QuestionSix();
// Question Seven
function QuestionSeven() {
  //Reset flags and counters
  qValidAns = false;
  qAttemptsCounter = 0;
  do{
    var qSevenAns = parseInt(prompt('I mentioned my love for game design. Can you guess how many steam games I own? (Hint it\'s a 3 digit number that is also a multiple of 10!)'));
    console.log('q 7 ans: '+qSevenAns);
    // Answer check and reply
    if(qSevenAns === qSevenTargetNumber) {
      alert(qSevenTargetNumber + ' is rigth! Good guess!');
      qValidAns = true;
      qScore++;
    } else if(qSevenAns > qSevenTargetNumber) {
      alert('Too high. Try Again');
    } else if(qSevenAns < qSevenTargetNumber) {
      alert('Too low! Try again!');
    } else {
      alert('Please be sure to enter an intiger number.');
      qAttemptsCounter++;
      console.log('Question attempts: ' + qAttemptsCounter);
      if(qAttemptsCounter >= qAttemptLimit){
        alert('OK. Let\'s more on then.');
      }
    }
  } while(qAttemptsCounter < qAttemptLimit && qValidAns === false);
  console.log('Current score: ' + qScore);
}
QuestionSeven();
// Give score response
function ScoreDisplay() {
alert('All done ' + userName + '. You got ' + qScore + ' out of 7!');
}
ScoreDisplay();