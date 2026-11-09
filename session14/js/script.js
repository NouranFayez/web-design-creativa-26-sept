// function
// x()

// function x(){
//     console.log("test")
// }
// console.log(x)
// let x = 5

// const x = function(a=1,b=2){
//     console.log(a, b);
// }
// x(5,3)

//arrow function
// const f1 = (a, b) => {
//     return a+b
// }
// const abc = (a,b) => a+b

// let z = f1(5,3)

// const user = {
//     id:1,
//     name:"marwa",
//     printMe : () => {
//         console.log(this);
        
//     }
// }

// user.printMe()

// read inputs 
const readInput = (msg = "enter your data") => prompt(msg)

let v1 = +readInput("enter first number"), 
    op=readInput("enter operator"), 
    v2= +readInput("enter second number"),
    result

const add = (a,b) => a+b;
const sub = (a,b) => a-b
const div = (a,b) => a/b
const mul = (a,b) => a*b
const modu = (a,b) => a%b
if(isNaN(v1) || isNaN(v2)){
    alert("invalid inputs");
}
else{
    switch(op){
        case "+": result = add(v1,v2); break;
        case "*": result = mul(v1,v2); break;
        case "/": result = div(v1,v2); break;
        case "%": result = modu(v1,v2); break;
        case "-": result = sub(v1,v2); break;
        default: result="invalid operator"
    }
    alert(result)
}