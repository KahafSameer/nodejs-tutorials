let firstname = "Kahaf"; //first name
let lastname = "Sameer"; //last name
const setLastName = new Promise((resolve, reject) => { //promise create kr deta hai
    setTimeout(() => { //ye function ko delay kr deta hai
        lastname = "ali"; //last name update kr deta hai
        resolve(lastname); //promise resolve kr deta hai
    }, 2000) //ye function ko delay kr deta hai 2 sec  k lye
});
// setLastName.then(() => { //promise then kr deta hai
//     console.log(firstname + " " + lastname); //output print ho jaye gi promise resolve hone k baad
// }) //promise then kr deta hai
// console.log("waiting for last name");

//async await
const displayFullName = async () => { //async function create kr deta hai
    lastname = await setLastName; //await keyword use kr k  hum promise ko wait kr sakte hai
    console.log(firstname + " " + lastname); //output print ho jaye gi promise resolve hone k baad
} //async function create kr deta hai
displayFullName(); //async function call kr deta hai
console.log("waiting for last name");

