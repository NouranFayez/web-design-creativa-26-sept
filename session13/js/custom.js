// let const
// let x = "a" // Nan
// x*= "hello"
const log = console.log
// log(x, typeof x)

// comperision operators
// let a="5", b=5
// log(a==b) //true
// log(a===b) //false
// log(a!=b) //false
// log(a!==b) //true
// > < >= <= 
// let c = 0
// log(!c)
// logical operators
// && || !
// null undefined 0 false "" => false
// [] any number " " {} => true
// (null && 1)

// ternery operator
// let age = 21
// age<50 ? log("yes") : log("no")

// conditional statements
// if(age<50) log("yes")
// else log("No")
// let yearOfBirth = +prompt("enter year of birth")
// if(yearOfBirth <= 1997) log("Melniel")
// else if(yearOfBirth <= 2014) log("GenZ")
// else log("gen Alpha")
let mon = 5
switch(mon){
    case 1: 
        log("jan"); 
        break;
    case 2: log("feb"); break
    case 3: log("mar"); break
    default:
        log("not true")
}
// loops
// do
// while
// for 