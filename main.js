const bananaDiv = document.getElementById("bananas");
bananaDiv.innerHTML = 'Im a banana';

let counter = 0;
counter == 1;
counter++;

// counter = 3
console.log('counter: ', counter);

const firstname = 'Mohammad';
const lastName = 'Khezri';

const greetingElement = document.getElementById("greeting");

greetingElement.innerHTML = `Hello my name is ${firstname} ${lastName}`;

// object shorthand notation

// let name = 'callan';
// let age = '100000000000';

let person = {name, age};

console.log('person: ' , person.name);