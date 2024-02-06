//Task-1:
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const reverseColors = [];
for (const color of colors) {
    reverseColors.unshift(color);
}
console.log(reverseColors);

console.log("==================================================================");

//Task-2:
const numbers = [12, 98, 5, 41, 23, 78, 46];

for (const iterator of numbers) {
    if(iterator % 2 == 0){
        console.log(iterator);
    }
}
console.log("==================================================================");

//Task-3:
var names = ['Tom', 'Tim', 'Tin', 'Tik'];
let fullName = '';

for (const name of names) {
    fullName += name;
}
console.log(fullName);
console.log("==================================================================");

//Task-4:
const statement = 'I am a hard working person';

let sentence = statement.split(' ');
let rev_sentence = [];
for (const word of sentence) {
    rev_sentence.unshift(word); 
}
console.log(rev_sentence.join(' '));

console.log("==================================================================");