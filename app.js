'use strict';
var correct = 0;

//question1 dog owner
function animalName() {
  var animalLike = prompt ('Do you think I have a dog?');
  console.log(animalLike);
  if((animalLike.toUpperCase() === 'YES') || (animalLike.toUpperCase() === 'Y')){
    alert('You got it right.');
    correct++;
  } else if((animalLike.toUpperCase() === 'N') || (animalLike.toUpperCase() === 'NO')){
    alert('You got it wrong.');
  } else {
    alert('This is a question damnit!');
  }
}
animalName();

//second question
function cook() {
  var cook1 = prompt ('Do you think I use to be a professional chef?');
  console.log(cook1);
  if((cook1.toUpperCase() === 'YES') || (cook1.toUpperCase() === 'Y')){
    alert('You got it right.');
    correct++;
  } else if((cook1.toUpperCase() === 'N') || (cook1.toUpperCase() === 'NO')){
    alert('You got it wrong.');
  } else {
    alert('This is a question damnit!');
  }
}
cook();

function military() {
  var military1 = prompt ('Do you think I use to be in the military?');
  console.log(military1);
  if((military1.toUpperCase() === 'YES') || (military1.toUpperCase() === 'Y')){
    alert('You got it right.');
    correct++;
  } else if((military1.toUpperCase() === 'N') || (military1.toUpperCase() === 'NO')){
    alert('You got it wrong.');
  } else {
    alert('This is a question damnit!');
  }
}
military();

function nation() {
  var nation1 = prompt ('Did you know my family is from Taiwan?');
  console.log(nation1);
  if((nation1.toUpperCase() === 'YES') || (nation1.toUpperCase() === 'Y')){
    alert('You got it right.');
    correct++;
  } else if((nation1.toUpperCase() === 'N') || (nation1.toUpperCase() === 'NO')){
    alert('You got it wrong.');
  } else {
    alert('This is a question damnit!');
  }
}
nation();

function writtingHand() {
  var writtingHand1 = prompt ('Did you know that I write with my right hand?');
  console.log(writtingHand1);
  if((writtingHand1.toUpperCase() === 'YES') || (writtingHand1.toUpperCase() === 'Y')){
    alert('You got it right.');
    correct++;
  } else if((writtingHand1.toUpperCase() === 'N') || (writtingHand1.toUpperCase() === 'NO')){
    alert('You got it wrong.');
  } else {
    alert('This is a question damnit!');
  }
}
writtingHand();

function guessNumQues() {
  var i = 0;
  for(i = 0; i < 4; i++){
    var guessNum = prompt ('Can you guess my age?');
    console.log(guessNum);
    var guessAgeAnswer = guessNum;
    console.log(guessAgeAnswer);
    if (guessAgeAnswer == 30){
      alert('YAH YAH YOU GUESSED CORRECTLY!!');
      correct++;
      break;
    } else if(guessAgeAnswer < 30){
      alert('you are too low');
    } else if(guessAgeAnswer > 30){
      alert('you are too high');
    } else if(guessAgeAnswer >= 28){
      alert('you are getting close');
    }
  }
}
guessNumQues();

function food() {
  for (var i = 6; i > 0 ; i--) {
    var myArray = ['CHOCOLATE','VANILLA', 'BLUEBERRY'];
    var food = prompt('Can you guess what type of Ice cream I have?').toUpperCase();
    if (food === myArray[0] || food === myArray[1] || food === myArray[2]){
      alert ('this is correct!');
      correct++;
      break;
    } else {
      alert ('wrong answer!');
    }
  }
}
food();
console.log(correct);
