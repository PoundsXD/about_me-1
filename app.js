'use strict';
var correct = 0;

//question1 dog owner

/*var animalLike = prompt ('Do you think I have a dog?');
var animalLike1 = animalLike.toUpperCase();
console.log(animalLike1);
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
/*if(animalLike1 === 'YES' || 'Y' === animalLike1){
  alert('yes I use to have golden');
  correct++;
} else if (animalLike1 === 'NO' || 'N' === animalLike1) {
  alert ('NO why how could you?');
} else {
  alert ('this is a yes or no question dammit');
};*/

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
/*if(cook1 === 'YES' || 'Y' === cook1){
  alert('yes I use to be professional chef!');
  correct++;
} else if (cook1 === 'NO' || 'N' === cook1) {
  alert ('no? how do you think I cook for myself?');
} else {
  alert('THIS is a YES OR NO QUESTION DAMMIT!!!!');
}*/
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
//question3 military service
/*var military = prompt ('Do you think I use to be in the military?');
var military1 = military.toUpperCase();

console.log(military1);
if( military1 === 'YES' || 'Y' === military1){
  alert('yes, I use to serve in the united states Coast Guard');
  correct++;
} else if (military1 === 'NO' || 'N' === military1) {
  alert ('No? so you think i was a bum huh?');
} else {
  alert('PLEASE STICK TO YES OR NO ANSWERS!!!');
};*/
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
//question4 my nationality
/*var nation = prompt ('Did you know that my family is from Taiwan?');
var nation1 = nation.toUpperCase();

console.log(military1);
if( nation1 === 'YES' || 'Y' === nation1 ){
  alert('yes,we are all immigrants from somewhere');
  correct++;
} else if (nation1 === 'NO' || 'N' === nation1) {
  alert ('No? so where the hell did you think I was from?');
} else {
  alert('PLEASE STICK TO YES OR NO ANSWERS!!!');
};*/

//question 5 did you know I am right handed
var writtingHand = prompt ('Did you know that I write with my right hand?');
var writtingHand1 = writtingHand.toUpperCase();

console.log(writtingHand1);
if( writtingHand1 === 'YES' || 'Y' === writtingHand1){
  alert('yes 60% of all people write with their right hand');
  correct++;
} else if (writtingHand1 === 'NO' || 'N' === writtingHand1) {
  alert ('No, well Im certainly not left handed!');
} else {
  alert('PLEASE STICK TO YES OR NO ANSWERS!!!');
};

//question 6
var i = 0;
for(i = 0; i < 4; i++){
  var guessAge = prompt('Can you guess my age?');
  var guessAgeAnswer = guessAge;
  console.log(guessAgeAnswer);
  if (guessAgeAnswer == 30){
    alert('YAH YAH YOU GUESSED CORRECTLY!!');
    correct++;
  } else if(guessAgeAnswer < 30){
    alert('you are too low');
  } else if(guessAgeAnswer > 30){
    alert('you are too high');
  } else if(guessAgeAnswer >= 28){
    alert('you are getting close');
  }
}

for (var i = 6; i > 0 ; i--) {
  var myArray = ['CHOCOLATE','VANILLA', 'BLUEBERRY'];
  var food = prompt('Can you guess what type of Ice cream I have?').toUpperCase();
  if (food === myArray[0] || food === myArray[1] || food === myArray[2]){
    alert ('this is correct!');
    correct++;
  } else {
    alert ('wrong answer!');
  }
}

console.log(correct);*/
