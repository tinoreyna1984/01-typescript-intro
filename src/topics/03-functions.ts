function suma(a: number, b: number): number {
    return a + b;
}

const multiply = (m: number, n:number = 1) => {
    return m * n;
}

function cadena(texto01:string, texto02?:string, separador:string = ' '){
    return `${texto01}${separador}${texto02}`;
}

console.log(suma(1,2));
console.log(multiply(3,5));
console.log(cadena('Tino', 'Reyna'));

interface Character {
    name: string;
    hp: number;
    showHp: () => void; // un procedimiento
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const linkFromZelda: Character = {
    name: 'Link',
    hp: 25,
    showHp() {
        console.log('HP: ', this.hp)
    }
}

console.log(linkFromZelda);
healCharacter(linkFromZelda, 25);
console.log('Healed!')
console.log(linkFromZelda);

export {}