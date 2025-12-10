// asynchronous programming
// synchronous programming
//define asynchronous programming is defined as the process of executing multiple tasks

//synchronous programming me sabs e pehle pehli statement ko execute krta hai or phir dusri statement ko execute krta hai or jab tk 1 statement execute nahi hota hai tab tk dusri statement execute nahi hoti hai execute to chodo load tk nai honge.
//disadvantages of synchronous programming: is me ye he k agar 1 bada function he or baki chote to jb tk bada execute nai hota chote walo ki bari nai ayee  gi halake onhe to time b kam chahye tha. 
// console.log("a") //pehla statement
// console.log("b") //dusra statement
// console.log("c") //teesra statement

//lekin java asynchrnous way me kam krti  hai .
// to is me jab kisi 1 ko time lagta hai to to chalo agae wali file ko run kr do .
let firstname = "Kahaf";
let lastname = "Sameer";
setTimeout(() => { //ye function ko delay kr deta hai
    // console.log("bilal") //ye function ko delay kr deta hai is me time mili second me delay kr deta hai
    lastname = "Bilal";
}, 2000) //ye function ko delay kr deta hai 2 sec  k lye
console.log(firstname + " " + lastname);//ye function ko delay kr deta hai


//dissadvantages of asynchronous programing or drawbacks
// akasar kisi statement k lye oska flow matter krnta he to waha masla hota hai 



