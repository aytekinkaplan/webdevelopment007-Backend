const fs = require("fs");

// message.txt dosyasına yaz
fs.writeFile("message.txt", "Hello Aytekin Hocam", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

// message.txt dosyasını oku
fs.readFile("message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
// index.html dosyasına yaz
fs.writeFile("main.html", "<h1>Hello My Page</h1>", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

// index.html dosyasını oku
fs.readFile("main.html", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.writeFile(
  "index.html",
  "<html><head><title>Hello World</title></head><body><h1>Hello World</h1></body></html>",
  (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  }
);

fs.readFile("index.html", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
