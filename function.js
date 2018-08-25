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