const skills: string[] = ['Bash', 'Counter', 'Healing']; // tipado de arreglo

// interfaz: genera un tipado de objeto, en conjunto y a nivel de atributos
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; // valor opcional (por defecto es undefined)
}

const tino: Character = {
    name: "Tino",
    hp: 100,
    skills: ['Counter', 'Healing'],
}

tino.hometown = 'Exultia';

console.table(tino);


export {};