// function addLinkScript(src) {
//     return new Promise(function (resolve, reject) {
//         let script = document.createElement("script"); // <script>
//         script.src = src; // <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js">
//         script.onload = function () {
//             resolve(script);
//         };
//         script.onerror = function () {
//             reject("cút");
//         };
//         document.head.append(script); // <head><script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></head>
//     });
// }

// addLinkScript(
//     "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js",
//     function (data) {
//         const a = data;
//         addLinkScript(a, function () {
//             const b = a;
//             addLinkScript(b, function () {
//                 // callback hell
//             });
//         });
//     }
// );

// myPromise
//     .then((data) => data + "suy nghĩ đã")
//     .then((result) => console.log(result + "Quyết định"))
//     .catch((error) => console.log(error));

// setTimeout
// const myPromise = addLinkScript(
//     "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
// );

// myPromise
//     .then((data) => data + "suy nghĩ đã")
//     .then((result) => console.log(result + "Quyết định"))
//     .catch((error) => console.log(error));

// Fetch API

// fetch("https://reqres.in/api/users")
//     .then((response) => response.json())
//     .then(({ data }) => console.log(data));
