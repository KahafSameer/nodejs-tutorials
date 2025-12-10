const fs = require("fs"); //file system module iska istmal kr k  hum file create kr sakte hai
const path = require("path"); //path module iska istmal kr k  hum path ko get kr sakte hai

//getting the path
const myCRUD = path.join(__dirname, "CRUD"); //ye path ko get kr deta hai
//create a file 
const myPath = `${myCRUD}/crud.txt`; //ye path ko get kr deta hai
fs.writeFileSync(myPath, "I am the Lucifer") //ye file create kr deta hai


//read
// fs.readFile(myPath, (err, file) => {      //ye file read kr deta hai
//     console.log(file) //ye file read krta hai or os me data ko show krta hai
// })
// // ab is me hmare pass buffer out put aa jati he jise manage krna padata hai
// buffer = hexa number of the data that is not matter it i photo or any code.

//1st solution to solve buffer problem
// fs.readFile(myPath, (err, file) => {      //ye file read kr deta hai
//     console.log(file.toString()) //ye file read krta hai or os me data ko show krta hai sting ki form me jis buffer ka masla hal ho jata hai 
// })

// //2nd solution to solve buffer problem
// fs.readFile(myPath, "utf8", (err, file) => { //ye file read krta hai or os me data ko show krta hai utf8 ki form me jis buffer ka masla hal ho jata hai
//     console.log(file) //
// })


// //update
// //existing file k age koi cheze add krni he to os k lye
// fs.appendFile(myPath, "\n and the devil was me", (err) => { //ye file update kr deta hai
//     if (!err) { //agar error nahi hota hai to
//         console.log('your file updated succesfuly') //ye message show kr deta hai
//     }
// })

// //delete
// fs.unlinkSync(myPath);


//file name rename
fs.renameSync(myPath, `${myCRUD}/crud2.txt`, (err) => { //ye file rename kr deta hai
    if (!err) { //agar error nahi hota hai to
        console.log('your file renamed succesfuly') //ye message show kr deta hai
    }
});


// error = [nodemon] app crashed - waiting for file changes before starting...
// meaning = app crash ho gaya
// Ye kab aata hai?
// - Jab tumhari code me syntax error ho (e.g. galat quotes, missing bracket).
// - Jab tum invalid path use karo (jaise tumne '${myCRUD}/crud.txt' likha tha instead of backticks).
// - Jab koi module missing ho ya require galat ho.
// - Jab tum runtime error throw karte ho (undefined variable, function not found, etc.)
