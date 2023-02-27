// spread operator -> copy

const person = {
    name: "Dat",
    age: 20,
    child: {
        name: "Kien",
    },
};
// const person2 = {
//     ...person,
//     // shadow copy và deep copy
//     address: "Thai Binh",
// };

// const person2 = Object.assign({ address: "Thai Binh" }, person);
// console.log(person2);

// const products = ["Product A", "Product B"];
// // products.push("Product C");
// const newProducts = [...products, "Product C"];
// console.log("products", products);
// console.log("new products", newProducts);

// rest parameter -> Chuyển đổi tham số -> 1 mảng

// shallow copy va deep copy
// const person2 = {
//     ...person,
//     // shadow copy và deep copy
//     address: "Thai Binh",
// };

// Deep copy

// const person2 = JSON.parse(JSON.stringify(person));
const person2 = structuredClone(person);
person2.address = "abc";
person2.child.name = "Son";

console.log("person", person);
console.log("person2", person2);

// function total(...numbers) {
//     console.log(numbers);
//     for (let i = 0; i < numbers.length; i++) {
//         console.log(numbers[i]);
//     }
// }
// total(1, 2, 3, 4, 5);
