// Can you translate this driver code to unit tests?

var cc = require("./creditCheck");

console.log(cc.checkCredit('5541808923795240') === "The number is valid!");
console.log(cc.checkCredit("4024007136512380") === "The number is valid!");
console.log(cc.checkCredit("6011797668867828") === "The number is valid!");

console.log(cc.checkCredit("5541801923795240") === "The number is invalid!");
console.log(cc.checkCredit("4024007106512380") === "The number is invalid!");
console.log(cc.checkCredit("6011797668868728") === "The number is invalid!");
