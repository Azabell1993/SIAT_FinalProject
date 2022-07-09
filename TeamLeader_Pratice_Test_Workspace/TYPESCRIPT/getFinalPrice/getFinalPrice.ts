function getFinalPrice(price:number, discount: number) {
    return price - price/discount;
}

console.log(getFinalPrice(100,10));
// tsc exam0.ts --noEmitOnError true