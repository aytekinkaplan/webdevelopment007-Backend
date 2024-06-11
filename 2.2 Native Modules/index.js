const fs = require("fs");
// fs.writeFile("message.txt", "Helo from Node.js", (err) => {
// if (err) throw err;
// console.log("The file has been saved!");
// })
//
// fs.readFile("message.txt", "utf8", (err, data) => {
// if (err) throw err;
// console.log(data);
// })

fs.writeFile("message.txt", "Hello from Aytekin", (err) => {
if (err) throw err;
console.log("The file has been saved!");
})

fs.readFile("message.txt", "utf8", (err, data) => {
if (err) throw err;
console.log(data);
})