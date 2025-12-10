const http = require("http");
const empdata = require("./empdata"); //ye file se data ko yaha pr import kr raha hai

http.createServer((req, res) => {  //pehla parameter request, dusra parameter response
    res.writeHead(200, { "Content-Type": "application/json" });  //200 is the status code ye server resppont kare ga k jo b ab wo jo data ye respond kare ga os ki info yaha aye gi k brrwoser ache se render kr sake, content type ye bataye ga k jo b data ye respond kare ga html, json, xml etc
    // res.write(JSON.stringify({ name: "kahaf sameer", age: 20, city: "karachi" }));
    res.write(JSON.stringify(empdata)); //ye data browser pr render kr deta hai
    res.end();
}).listen(1000);  //port number  