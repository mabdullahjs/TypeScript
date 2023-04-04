import { Invoice } from './classes/class.js';
const invOne = new Invoice('abdullah', 'work as a junior developer', 250);
const invTwo = new Invoice('usman', "work as a designer", 500);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
const select = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const detail = document.querySelector('#details');
const amount = document.querySelector('#amount');
const button = document.querySelector('button');
button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(select.value, toFrom.value, detail.value, amount.valueAsNumber);
});
