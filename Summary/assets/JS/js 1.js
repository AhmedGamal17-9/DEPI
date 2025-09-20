/*
HTML Link :
inline : onclick ondbclick ="..."
external :<script src=""></script>
internal :<script></script>

massege :

1-alert("ok");

2-confirm("ok / cancle");

3-prompt("ok +input / cancle"); */

console.log('----------------------------------variables------------------------------------');

var x = "value1" ;// re-declare<overwrite> + re-assign<overwrite> + not block-scope + Function Scope 

console.log(x); // Accessing a variable before it's defined (Hosting)
var x = 5;

let y = "value" ; // not re-declare + re-assign + block-scope

const z = "value" ; // not overwrite + block-scope
//- When you declare an non-primitive variable with const, you can change the elements inside it,
//  but you cannot reassign the variable itself to a new value.
console.log('----------------------------------primitive datatypes : 7----------------------');
// It is stored by value directly
let a = 5;
let b = a;
b = 10;
console.log(a);

console.log("a=5");
console.log("b=a=5");
console.log("b=10");
/*
number - BigInt [big numbers] - string - boolean - 

null [object][Deliberately empty value  قيمة فارغة عمدا ] -

undefined[The default value for any variable that has not been assigned a value] -

symbol[A completely specific and unique value even if you write the same value inside it] 
*/

console.log('-------------Symbol--------------------');
let s1 = Symbol("id");
let s2 = Symbol("id");
console.log(s1 === s2); // false

//typeof();

console.log('----------------------------------non-primitive datatypes----------------------');
// It isn't stored by value directly, but by reference of the value in memory
let obj1 = { name: "Ali" };
let obj2 = obj1;
obj2.name = "Said";
console.log(obj1.name);

console.log("obj1 => name: Ali");
console.log("obj2 => obj1 => name: Ali");
console.log("obj2 => obj1 => name: Said");
console.log('-------------object--------------------');
// : A set of {key:value}
var obj = {
  name:"ahmed" ,
  age:22
};
console.log(obj);
console.log('-------------Array---------------------');
//Array : A special type of object used to store an ordered list of values using an index
var array1 = [12,"aaa",true,null];
//لو كتبت عنصر واحد رقم بس هيتفهم انه طول الأراي
var array2 = Array(12,"aaa",true,null);
var array3 = new Array(12,"aaa",true,null);

console.log(array1);
console.log(typeof(array1));
console.log('----------------------------------function-------------------------------------');
var function_variable =function function_name (parameter) {

};
function function_name2 (parameter) {

};
console.log(function_variable);
console.log(typeof(function_variable));

//console.log(function_name);
//console.log(typeof(function_name));

console.log(function_name2);
console.log(typeof(function_name2));
/*
1- Accessing a function before it's defined (Hosting)
2- return
*/
console.log('----------------------------------arrow function--------------------------------');
/*
1- The Arrow Function itself doesn't have a direct "name."
2- You write an anonymous function, then store it in a variable, which is its name.
3- Can not accessing a function before it's defined (No hosting)
4-If you write expression without {} or in (), the expression will automatically return.
  ex : expression
  ex : (expression)
5-If you use {} (block body), you must write the return yourself.
  ex : {expression}
*/
/*---------------without Parameter-----------------*/
var fun1 = 
() => expression;
/*---------------one Parameter---------------------*/
var fun2 = 
(parameter) => expression;
/*---------------one Parameter---------------------*/
var fun3 = 
parameter => expression;
/*---------------many Parameter--------------------*/
var fun4 = 
(parameter1,parameter2) => expression ;
/*------------------------------------*/
console.log(fun1);
console.log(typeof(fun1));

console.log('----------------------------------DOM------------------------------------------');
/*
document.getElementById("id")
document.getElementsByClassName("class")
document.getElementsByTagName("tag")
document.getElementsByName("attribute-name") عنصر في الفورم مثلا
*/
document.getElementById("pid").innerText="new text1";
// بتستبدل كل المحتوي الموجود جوة العنصر بالنص الجديد
document.getElementById("divid2").innerText="newtext2";


document.getElementById("divid3").innerHTML="newtext3<h4>h4</h4>";
// بتستبدل كل المحتوي الموجود جوة العنصر بالكود الجديد

document.write('<h2>new elemnt W</h2>');//add HTML element

document.getElementById("idinput1").value=55;// change value-attribute
document.getElementById("idinput1").name=55;

// all data comes from html form is string
parseInt(); // casting to number
parseFloat(); // casting to fraction number

//example 
const input=document.getElementById("idinput2");// html element is an object /html element is const 
console.log(input);//the entire html element 
console.log(typeof(input));// html element is an object
let num =input.value;
console.log(num); console.log(typeof(num));// all data comes from html form is string
let total1 =num + 10; console.log(total1);
let total2 =parseInt(num) + 10; console.log(total2);
console.log( parseInt("a"), typeof(parseInt("a")) );// NaN is a number

