/**
 * Var, let, const
 * Khi nào sử dụng
 * Tham chiếu và tham trị
 * Cách khai bao biến
 */

var a = 1;
var a = 2;

let b = 1;
b = 2; // Error
const c = 1;
console.log(c);
// mặc định: không sử dụng var để khai báo biến,
// thay vào đó sử dụng const
// Khi xác định giá trị của biến sẽ thay đổi

const products = ["product A", "product B"];
// B1: Tạo 1 biến lưu giá trị mỗi vòng lặp
let result = "";
for (let i = 0; i < products.length; i++) {
    result += "<div>" + products[i] + "</div>";
}
// B2: Hiển thị kết quả ra ngoài màn hình
document.querySelector("#app").innerHTML = result;
// Tham trị: string, number, boolean, null, undefined
products.push("Product C");
const productItem = {
    name: "Product A",
};
productItem.price = 200;

console.log(productItem);
