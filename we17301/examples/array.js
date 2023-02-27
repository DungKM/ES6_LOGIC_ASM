const projects = [
    { id: 1, name: "Du an 1" }, // value
    { id: 2, name: "Du an 2" }, // value
    { id: 3, name: "Du an tot nghiep" }, // value
];

let result = "";

// for (let i = 0; i < projects.length; i++) {
//     // result = <div>Du an 1</div><div>Du an 2</div><div>Du an tot nghiep</div>
//     result += `<div>${projects[i].name}</div>`;
// }

// for..in
// for (let index in projects) {
//     result += `<div>${projects[index].name}</div>`;
// }

// for...of
// for (let value of projects) {
//     result += `<div>${value.name}</div>`;
// }

// forEach
// projects.forEach((value, index) => {
//     result += `<div>${value.name}</div>`;
// });

// map - method
const newProjects = projects.map((value, index) => `<div>${value.name}</div>`).join("");

console.log("projects", projects);
console.log("newProjects", newProjects);
console.log("result", result);
