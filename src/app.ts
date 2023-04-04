// console.log("abdullah");

// const inputs = document.querySelectorAll("input");
// console.log(inputs);

// console.log("usman");
















//------------------------------ BASIC TYPES ------------------------------//



// let names = "Abdullah";
// let age = 10;
// let isAvai = true;

// // names = 123; xxx typescript give an error because the names type is string.
// names = "usman"


// const circ = (diameter : number)=>{
//     return diameter * Math.PI;
// }

// console.log(circ(52));





















//------------------------------ ARRAY ------------------------------//



// var names = ['abdullah', 'usman', 'uzair'];
// names.push('ammar');
// // names.push(3);
// // names[1] = 3;
// var numbers = [10, 20, 12, 15];
// numbers.push(25);
// // numbers.push('ammar');
// // numbers[0] = 'usman';
// var mixed = ['uzair', 4, 'abdullah', 8, 9];
// mixed.push('usman');
// mixed.push(10);
// mixed[0] = 3;







// let ninjas: string[] = [];
// let ninjas: (string | Boolean)[] = [];

// ninjas.push('ryu');
// ninjas.push('chun-li');
// ninjas.push(true);
// console.log(ninjas);









//------------------------------ OBJECT ------------------------------//


// var ninja = {
//     name: 'Muhammad',
//     belt: 'black',
//     age: 30
// };
// ninja.age = 40;
// ninja.name = 'abdullah';
// // ninja.age = '30';
// // ninja.skills = ['fighting', 'sneaking']
// ninja = {
//     name: 'Usman',
//     belt: 'orange',
//     age: 40
// };






// let names: {
//     name: String,
//     age: Number,
//     isBoolean: Boolean,
//     isArr: (String | Number)[]
// }

// names = {
//     name: "Abdullah",
//     age: 10,
//     isBoolean: true,
//     isArr: ["Name", 5]
// }

// console.log(names);






//------------------------------ Functions ------------------------------//

// let greet: Function;
// // greet = (a: number, b: number, c: number|string = 10) :number =>{
// //     return a + b

// // }

// greet = (a: number, b: number, c: number|string = 10) :void =>{
//     console.log(a+b);
//     console.log(c);


// }


// greet(10 , 20 , "hello");




//------------------------------ type aliases ------------------------------//



// type strOrNum = string | number
// type obj = {
//     name:string,
//     age:number
// }
// const getVal = (a:strOrNum , b:strOrNum , c:obj)=>{
//     console.log(a , b , c);
// }
// getVal(6 , "abdullah" , {
//     name:"abdullah",
//     age:23
// })



//------------------------------ Function Signature ------------------------------//

// let greet: (a: string, b: string) => string;
// greet = (a:string , b:string)=>{
//     return `${a} ${b}`;

// }

// console.log(greet("abdullah" , "hello"));





//------------------------------ Interfaces ------------------------------//

interface Person {
    name: string;
    age: number;
    speak(a: string): void;
}

const me: Person = {
    name:"abdullah",
    age:20,
    speak(a) {
        console.log(a);
    },
}

console.log(me);
