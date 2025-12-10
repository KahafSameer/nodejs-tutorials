const fs = require("fs"); //file system module iska istmal kr k  hum file create kr sakte hai
fs.writeFileSync("show.txt", "i am kahaf sameer") //ye file create kr deta hai or os me data ko add kr deta hai
// ab gar me multiple files create krna chaho? agar me kisi folder me file create krna chaho to?
// agar kisi b folder me file create krna hai to mojhe os folder ka path get krna pade ga 
// path ko get krne k lye path k core module ko add krna apde ga 
const path = require("path"); //path module iska istmal kr k  hum path ko get kr sakte hai
const myFolder = path.join(__dirname, "myfolder"); //ye path ko get kr deta hai pr var myFolder me store kr deta hai
//console.log(myFolder);

for (let i = 0; i < 3; i++) { //ye loop chal raha hai 3 bar 
    // fs.writeFileSync(myFolder + "show" + i + ".txt", "i am kahaf sameer") //ye file create kr deta hai or os me data ko add kr deta hai
    fs.writeFileSync(`${myFolder}/show${i}.txt`, `Enjoy the Pain ${i}`); //ye file create kr deta hai or os me data ko add kr deta hai

}

fs.readdir(myFolder, (err, items) => { //ye folder ko read kr deta hai
    console.log(items); //ye folder ko read krta he or os me file ko show krta hai
    // abme chahta ho k ye alag se na display ho blke me alag alag file ko iterate kr sako to os k lye me for each loop use kr sakte hai
    items.forEach((file) => { //ye folder ko read krta he or os me file ko show krta hai
        console.log(file); //ye folder ko read krta he or os me file ko show krta hai
    }) //ye folder ko read krta hai or os me file ko show krta hai
}) //ye folder ko read krta hai or os me file ko show krta hai
// interview Question: k kya is path core module ka use kr k is folder(project ki root dir) k bahir b folders access kr sakte ho? ans: nai esa nai possible hai 