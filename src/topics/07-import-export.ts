import { Product, taxCalculation } from "./06-function-destructuring";

const shoppingCart: Product[] = [
  {
    description: "Noka 3390",
    price: 25,
  },
  {
    description: "iPad Air",
    price: 250,
  },
];

const [total, tax] = taxCalculation({ tax: 15, products: shoppingCart });

console.log('Total: ', total);
console.log('Tax: ', tax);