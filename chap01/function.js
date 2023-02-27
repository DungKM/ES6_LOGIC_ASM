// 1. function name || function declaration
function sum(a, b) {
    // checking
    if (typeof a === "string" || typeof b === "string") return "";
    // processing // return
    return a + b;
}
console.log("function name", sum("30", 20));
// 2. function expression
const sum2 = function (a, b) {
    return a + b;
};
console.log("function expression", sum2(30, 20));
// 3. arrow function
const sum3 = (a, b) => a + b;
console.log("arrow function", sum3(30, 20));
// 4. IIFE (Immediately Invoked Function Expression)
((a, b) => console.log(a + b))(30, 20);

const products = ["product A", "product B"];
const showProduct = (products) => {
    // checking
    if (!Array.isArray(products) || products.length === 0) return "";
    // processing
    let result = "";
    for (let i = 0; i < products.length; i++) {
        result += `<div>${products[i]}</div>`;
    }
    // return
    return result;
};

showProduct(10);
