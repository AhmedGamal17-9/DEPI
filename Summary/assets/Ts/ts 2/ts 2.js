let firstnumber = "aly";
let age = 33;
let weight = 3333.555;
let isMarried = true;
let address = { city: "cairo", street: "nasr" };
let salary = { amount: 1235.5, currency: "EGP" };
let children = ["ahmed", "sara"];
let info = "can be any thing" + 5.5 + true;
let data = 123;
function showdata() {
    const outputdv = document.getElementById('output');
    outputdv.innerHTML = `
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
  `;
}
showdata();
export {};
//# sourceMappingURL=ts%202.js.map