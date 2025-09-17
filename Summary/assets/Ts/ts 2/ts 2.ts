let firstnumber : string="aly";
let age :number= 33;
let weight:number= 3333.555;
let isMarried :boolean=true;
let address : {city:string,street:string} = {city:"cairo",street:"nasr"};
let salary : {amount:number,currency:string} = {amount:1235.5,currency:"EGP"};
let children : string[] = ["ahmed","sara"];
let info : any ="can be any thing"+5.5+true;
let data : unknown = 123;

function showdata (){
  const outputdv= document.getElementById('output');
  outputdv!.innerHTML =`
  <p>${firstnumber}</p>
  <p>${age}</p>
  <p>${weight}</p>
  <p>${isMarried}</p>
  <p>${address.city},${address.street}</p>
  <p>${salary.amount},${salary.currency}</p>
  <p>${children.join(", ")}</p>
  <p>${info}</p>
  <p>${data}</p>
  <p>${data}</p>
  <p>${data}</p>
  `
}
showdata();