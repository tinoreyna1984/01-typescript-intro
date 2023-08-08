export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: "Noka 3390",
    price: 25,
}

const tablet: Product = {
    description: "iPad Air",
    price: 250
}

export interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

// función con desestructuración de argumentos
export function taxCalculation(options: TaxCalculationOptions): number[]{
    const {products, tax} = options;
    let total = 0;
    products.forEach(( { price } ) => {
        total += price;
    });
    return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const result = taxCalculation({
    products: shoppingCart,
    tax,
})

const[products, tx] = result;

console.log(`Total: ${products}, Tax: ${tx}`);
