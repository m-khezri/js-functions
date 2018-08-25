// input = animal ex. fich
// output = animal product ex. fish stix

function nuggetizer(animal){

return `${animal} stix`;
}

const nuggetizer2 = (animal) => {
    return `${animal} jerky`
};

console.log('deer', nuggetizer2('deer'));
console.log('fish:', nuggetizer('fish'));
console.log('fish:', nuggetizer('cat'));
console.log('fish:', nuggetizer('bear'));

const nomnom = (person, food) => {
    return `${person} devoured ${food}`;
};
const bearSticks = nuggetizer('bear');
console.log(nomnom('mohammad', bearSticks));


// function numberadder that takes in a number and 
// return the number 3. so input=22, output =25

const numberAdder = (num) => {
const finalNumber = num +3;
printToDom (`<h2>${finalNumber}</h2>`, 'alltheNumbers');
};

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

console.log('num: ', numberAdder(22)); //25