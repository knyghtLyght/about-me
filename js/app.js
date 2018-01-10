'use strict'

// Welcome popup
alert("Welcome! Let's play a game.");
// Variable setup
var qAttemptsCounter = 0;
var qScore = 0;
var qValidAns = false;
// Question one
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
    if(qAttemptsCounter >= 4){
      alert('OK. Let\'s more on then.');
    }
  }
} while(qAttemptsCounter < 4 && qValidAns === false);
console.log('Current score: ' + qScore);

/*qOneAns = prompt('Do you think this is my first experiance coding? Please answer with a yes/no or y/n').toLocaleLowerCase();
console.log('q 1 ans: '+qOneAns);
// Answer check and reply
if(qOneAns === 'yes' || qOneAns ==='y'){
  alert('Nope. I\'ve been playing with c# for a while but this will be my first professional attempt');
  qCorrectFlag = true;
} else if(qOneAns === 'no' || qOneAns ==='n') {
  alert('Good Guess! I\'ve been playing with c# as a hobby');
} else {
  alert('I\'m sorry please answer with a yes/y or no/n');
}
// Question prompt Two
var qTwoAns = prompt('Do you think I am a coffee drinker? Please answer with a yes/no or y/n').toLocaleLowerCase();
console.log('q 2 ans: '+qTwoAns);
// Answer check and reply
if(qTwoAns === 'yes' || qTwoAns ==='y'){
  alert('Never. Can\'t stand the stuff. I\ll go for a 5-hour Energy if a I need a pick me up.');
} else {
  alert('You got it! It can smell good but I\m not a fan of the taste.');
}
// Question prompt Three
var qThreeAns = prompt('Do I drive to Code Fellows? Please answer with a yes/no or y/n').toLocaleLowerCase();
console.log('q 3 ans: '+qThreeAns);
// Answer check and reply
if(qThreeAns === 'yes' || qThreeAns ==='y'){
  alert('Correct. I live on the eastside so I need to fight traffic on my way in.');
} else {
  alert('Saddly I do drive in. My Leaf makes it but better than it could be though.');
}
// Question prompt Four
var qFourAns = prompt('Do I have pets? Please answer with a yes/no or y/n').toLocaleLowerCase();
console.log('q 4 ans: '+qFourAns);
// Answer check and reply
if(qFourAns === 'yes' || qFourAns ==='y'){
   alert('Correct. My roomates dog counts right?');
} else {
  alert('Technically correct. My roomates have a puppy though so best of both worlds.');
}
// Question prompt Five
var qFiveAns = prompt('Is mint chip the best flavor of ice cream? Please answer with a yes/no or y/n').toLocaleLowerCase();
console.log('q 5 ans: '+qFiveAns);
// Answer check and reply
if(qFiveAns === 'yes' || qFiveAns ==='y'){
  alert('Correct. By far the best.');
} else {
  alert('Wrong. Nothing competes with mint chip!.');
}
// Question prompt Six
var qSixAns = prompt('In my intro I mentioned i earned 2 distinct black belts. Can you guess what basic styles they are in?').toLocaleLowerCase();
console.log('q 5 ans: '+qSixAns);
// Answer check and reply
if(qSixAns === 'yes' || qSixAns ==='y'){
  alert('Correct. By far the best.');
} else {
  alert('Wrong. Nothing competes with mint chip!.');
}
*/