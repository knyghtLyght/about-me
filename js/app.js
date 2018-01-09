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
