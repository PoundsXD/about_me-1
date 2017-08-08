'use strict';
//question1 dog owner
var animalLike = prompt ('Do you think I have a dog?');
var animalLike1 = animalLike.toUpperCase();

console.log(animalLike1);
if(animalLike1 === 'YES' || 'Y' === animalLike1){
  alert('yes I use to have golden');
} else if (animalLike1 === 'NO' || 'N' === animalLike1) {
  alert ('NO why how could you?');
} else {
  alert ('this is a yes or no question dammit');
};
//question2 professional cook
var cook = prompt ('Do you think I use to be a professional Chef?');
var cook1 = cook.toUpperCase();

console.log(cook1);
if(cook1 === 'YES' || 'Y' === cook1){
  alert('yes I use to be professional chef!');
} else if (cook1 === 'NO' || 'N' === cook1) {
  alert ('no? how do you think I cook for myself?');
} else {
  alert('THIS is a YES OR NO QUESTION DAMMIT!!!!');
}

//question3 military service
var military = prompt ('Do you think I use to be in the military?');
var military1 = military.toUpperCase();

console.log(military1);
if( military1 === 'YES' || 'Y' === military1){
  alert('yes, I use to serve in the united states Coast Guard');
} else if (military1 === 'NO' || 'N' === military1) {
  alert ('No? so you think i was a bum huh?');
} else {
  alert('PLEASE STICK TO YES OR NO ANSWERS!!!');
};
//question4 my nationality
var nation = prompt ('Did you know that my family is from Taiwan?');
var nation1 = nation.toUpperCase();

console.log(military1);
if( nation1 === 'YES' || 'Y' === nation1 ){
  alert('yes,we are all immigrants from somewhere');
} else if (nation1 === 'NO' || 'N' === nation1) {
  alert ('No? so where the hell did you think I was from?');
} else {
  alert('PLEASE STICK TO YES OR NO ANSWERS!!!');
};

//question 5 did you know I am right handed
var writtingHand = prompt ('Did you know that I write with my right hand?');
var writtingHand1 = writtingHand.toUpperCase();

console.log(writtingHand1);
if( writtingHand1 === 'YES' || 'Y' === writtingHand1){
  alert('yes 60% of all people write with their right hand');
} else if (writtingHand1 === 'NO' || 'N' === writtingHand1) {
  alert ('No, well Im certainly not left handed!');
} else {
  alert('PLEASE STICK TO YES OR NO ANSWERS!!!');
};
