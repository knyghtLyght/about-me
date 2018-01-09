'use strict'

// Welcome popup
alert("Welcome! Let's play a game.");
// Question prompt one
var qOneAns = prompt('Do you think this is my first experiance coding? Please answer with a yes/no or y/n').toLocaleLowerCase();
console.log('q 1 ans: '+qOneAns);
// Answer check and reply
if(qOneAns === 'yes' || qOneAns ==='y'){
    alert('Nope. I\'ve been playing with c# for a while but this will be my first professional attempt');
} else {
    alert('Good Guess! I\'ve been playing with c# as a hobby');
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