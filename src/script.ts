//classes
class Invoice {
    client:string;
    details:string;
    amount:number;

    constructor(c:string , d:string , a:number){
        this.client= c;
        this.details = d;
        this.amount = a;
    }

    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

const invOne = new Invoice ('abdullah' , 'work as a junior developer' , 250);
const invTwo = new Invoice ('usman' , "work as a designer" , 500);


let invoices : Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);






const select = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom')as HTMLInputElement;
const detail = document.querySelector('#details')as HTMLInputElement;
const amount = document.querySelector('#amount')as HTMLInputElement;
const button = document.querySelector('button')as HTMLButtonElement;

button.addEventListener('click' , (e)=>{
    e.preventDefault()
    console.log(select.value ,toFrom.value , detail.value , amount.valueAsNumber);
})