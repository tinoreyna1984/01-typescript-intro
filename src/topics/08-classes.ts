export class Person {
  constructor(private firstName: string, private lastName: string, private address: string) {}
}

const tony: Person = new Person("Tony", "Stark", "New York");

//console.log(tony);

/* export class Hero extends Person {
    constructor(private alterEgo: string, private age: number, private realName: string, person: Person){
        super(realName, 'New York');
    }
} */

// una instancia de Person pasa como parámetro en el constructor de Hero
// esto es explicado en el concepto de inyección de dependencias (DI)
export class Hero {
    constructor(private alterEgo: string, private age: number, private realName: string, private person: Person){ }
}

const ironMan: Hero = new Hero('Iron Man', 45, 'Tony Stark', tony);

console.log(ironMan);


