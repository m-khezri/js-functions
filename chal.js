let bandNumber = 1

const takeNumber = (bandName) => {
    const bandString = `<h3>${bandNumber}. ${bandName}</h3>`;
    bandNumber++;
   printToDom(bandString, 'bandz');
};

takeNumber("Galactic Scum") // This should display "1. Galactic Scum" in the DOM
takeNumber("Underdogs") // This should display "2. Underdogs" in the DOM