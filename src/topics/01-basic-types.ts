let name: string = 'Tino'; // estrictamente debe ser solo texto
let hpPoints:number | string = 25; // puede ser número o texto
hpPoints = '25';

const isAlive: boolean = true;

console.log(name, hpPoints, isAlive);

export {};