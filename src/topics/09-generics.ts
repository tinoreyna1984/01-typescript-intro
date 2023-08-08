
/* export function whatsMyType<T>(argument: T): T {
    return argument;
} */

export const whatsMyType = <T>(argument: T): T => {
    return argument;
}

const amIString = whatsMyType<string>('Hola Mundo');
const amINumber = whatsMyType<number>(123);
const amINumberArray = whatsMyType<number[]>([1,2,3]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amINumberArray.join('-'));

