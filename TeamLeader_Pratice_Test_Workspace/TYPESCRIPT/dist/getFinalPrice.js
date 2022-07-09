"use strict";
function getFinalPrice(price, discount) {
    return price - price / discount;
}
console.log(getFinalPrice(100, 10));
// tsc exam0.ts --noEmitOnError true
