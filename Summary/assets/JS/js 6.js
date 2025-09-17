//              callback => asynchronous => promise => async + await

console.log("----------------------------------Call back------------------------------------");
function total(a,b,c){ // a, b, c parameters متغيرات يتم تعريفها في الفانكشن
    console.log(a+b+c);
}
function times(){return 5;}
console.log("----------------directly without ()---------------");
total(20,34,times);
console.log(times,typeof(times));     
console.log("----------------directly with ()------------------");
total(20,34,times());
console.log(times(),typeof(times()));
console.log("----------------store it in a variable------------");
let d = times();
console.log(typeof(d));
total(20,34,d)
console.log("----------------------------------asynchronous---------------------------------");

console.log("----------------setInterval-----------------");
var countDownDate = new Date("Sep 18, 2025 00:00:00").getTime();
console.log(countDownDate);


// Update the count down every 1 second
var x = setInterval(y,1000);
function y () {
  // Get today's date and time
  var now = new Date().getTime();
  //console.log(new Date(),now);

// Find the distance between now and the count down date
  var distance = countDownDate - now;


  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));  
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);



  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(y);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
};

console.log("----------------setTimeout------------------");

console.log("----------------------------------Promise--------------------------------------"); 
// function pro(x){
//     console.log(x);
// }
// let promiseObject = new Promise(
//   function(s,r){
//     let q = "2"; 
//     if(q=="1"){
//         s("1");
//     }
//     else if(q=="2"){
//         r("2");
//     }
// }).then(
//   function(val1) {pro(val1);    console.log("val1",val1);},
//   function(val2) {pro(val2);    console.log("val2",val2);},
// )
// console.log("----------------------------------");
// let myPromise = new Promise(function(resolve, reject) {
// let success = true; // or false to simulate failure
// if (success) {
//   resolve("Operation done successfully"); } 
// else {
//   reject("Something went wrong"); }
//     }
// ).then(  function(message)  {console.log("Success: "+ message);} )
// .catch( function(message)  {console.log("Error: "  + message);} );
// console.log("----------------------------------");
// doSomething(
//   function(error, result) {
//     if (error) {
//         console.log(error);}
//     else {
//       doSomethingElse(result, function(error, final) {
//         if (error) {
//           console.log(error); }
//         else {
//           console.log(final);
//         }
//       });
//     }  
//   }
// ).then(result => doSomethingElse(result))
//  .then(final => console.log(final))
//  .catch(error => console.log(error));
// console.log("----------------------------------");

// console.log("1: الكود العادي");

// let promise = new Promise((resolve, reject) => {
//   resolve("2: الكود الي جوه then");
// });

// promise.then(msg => console.log(msg));

// console.log("3: الكود العادي");
// console.log("----------------------------------async and await------------------------------");
// console.log("---------------async---------------");

// let r = async function asfun(){
//     let x = 10;
//     console.log(x , typeof(x));
//     return x;
// }
// //console.log(r(), typeof(r()));
// //console.log(r, typeof(r));
// // console.log(r())
// //r();
// //console.log(asfun(), typeof(asfun()));
// //console.log(asfun, typeof(asfun));

// console.log("------------without await---------------");
// function getNumber() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(42), 2000);
//   });
// }

// getNumber().then(num => {
//   console.log("The number is:", num);
// });

// console.log("This line runs before the number");
// console.log("---------------with await---------------");
// function getNumber() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(42), 2000);
//   });
// }
// async function showNumber() {
//   console.log("Before await");
//   let num = await getNumber(); // هنا الكود هيستنى 2 ثانية
//   console.log("After await");
//   console.log("The number is:", num);
// }
// showNumber();
//------------------------------------------
// function pro(x){
//     console.log(x);
// } 
// async function fun1(){
//     let fun2 = new Promise(function(s,r){
//         let d = "welcomee";
//         if(d=="welcome"){
//             s("welcome");
//         }else{
//             r("not welcome");
//         }
//     }).then(
//         function(val) {pro(val);},
//         function(err) {pro(err);},);
//         await fun2;
//         console.log("ggggggggg");
             
// }
// fun1();
console.log("-----------------------------Example-----------------------------------");

const btn = document.getElementById("btn");
 
let run = ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>{
        if(!res.ok){
            throw new error("can not load data"); }// to line 192
        return res.json();
    })
    .then(data=>{
        const ul = document.getElementById("ul");
        data.forEach(user=>{
            const li = document.createElement("li");
            li.innerHTML = `Name :${user.name} <br>Email :${user.email}`;
            ul.appendChild(li);

            const hr = document.createElement("hr");
            ul.appendChild(hr);
        });
    })
    .catch(error=>{
        console.error(error);
        alert("process failed")
    })
}
btn.addEventListener("click", run);