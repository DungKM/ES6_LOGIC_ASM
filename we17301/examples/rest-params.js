function showInfo({ a, b, ...other }) {
    console.log(a); // 1
    console.log(b); // 2
    console.log(other); // { c: 3, d: 4}
}
showInfo({ a: 1, b: 2, c: 3, d: 4 });

function total(...numbers) {
    console.log(numbers); // [1,2,3,4,5]
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}
total(1, 2, 3, 4, 5);
