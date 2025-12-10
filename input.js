// console.log(process.argv[2]); //ye process.argv ko show kr deta hai

const fs = require("fs"); //file system module iska istmal kr k  hum file create kr sakte hai

const action = process.argv[2]; //ye action ko store kr deta hai
const fileName = process.argv[3]; //ye file name ko store kr deta hai
const data = process.argv[4]; //ye data ko store kr deta hai
if (action == 'create') {
    //ye file create kr deta hai, pehle parameter me file action kya kare ga create, read, update, delete 2nd me file ka name aye ga. 3rd me data ko add krna hai
    fs.writeFileSync(fileName, data) // is me file name or data ho ga 

} else if (action == 'delete') { //ye file delete kr deta hai
    fs.unlinkSync(fileName) // is me file name ho ga
} else {
    console.log("invalid action")  //ye invalid action show kr deta hai
}



