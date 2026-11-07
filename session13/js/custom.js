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
// let mon = 5
// switch(mon){
//     case 1: 
//         log("jan"); 
//         break;
//     case 2: log("feb"); break
//     case 3: log("mar"); break
//     default:
//         log("not true")
// }

// let yearOfBirth = prompt("year"), result = "";
// switch(yearOfBirth % 12){
//     case 0: result = "a"; break;
//     case 1: result = "b"; break;
//     case 2: result = "c"; break;
//     case 3: result = "d"; break;
//     case 4: result = "e"; break;
//     case 5: result = "f"; break;
//     case 6: result = "g"; break;
//     case 7: result = "h"; break;
//     case 8: result = "i"; break;
//     case 9: result = "j"; break;
//     case 10: result = "x"; break;
//     case 11: result = "y"; break;
//     default: result="not a number"
// }
// log(result)

// const data = ["a", "b", "c", 5, true, null, undefined, 0, 1.5]
// let yearOfBirth = prompt("year")
// let res = data[yearOfBirth%12] || "not valid"
// log(res)

const arr = [1,2,3]
// let a = arr.push(5)
// log(arr , a)
// let z = arr.pop()
// log(arr, z)
// a = arr.unshift(7)
// a=arr.shift()
// log(arr,a)

// loops
// do => while
// do{
//     log("test")
// }while(false)
let choices = []
// do{
//     ch = prompt("ch")
//     choices.push(ch)
// }while(ch!=0)
// while(true){
//     let ch = prompt("ch")
//     if(ch==0) break
//     choices.push(ch)
// }

// while
// for 
// for(;;){
//     log(i)
// }


// forEach high ordered function
 
// const data = [
//     [1, "marwa"],
//     ["nouran", 2]
// ]
// const obj = [
//     {"id":1, "name":"marwa"},
//     {"name":"nouran", "id":2}
// ]

const users = [
  { id: 100, name: 'Alice Smith', email: 'alice@example.com', role: 'Admin', isActive: true },
  { id: 211, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', isActive: true },
  { id: 310, name: 'Charlie Brown', email: 'charlie@example.com', role: 'User', isActive: false },
  { id: 405, name: 'Diana Prince', email: 'diana@example.com', role: 'Editor', isActive: true },
  { id: 5, name: 'Ethan Hunt', email: 'ethan@example.com', role: 'User', isActive: true },
  { id: 6, name: 'Fiona Gallagher', email: 'fiona@example.com', role: 'User', isActive: false },
  { id: 7, name: 'George Clark', email: 'george@example.com', role: 'Editor', isActive: true },
  { id: 8, name: 'Hannah Abbott', email: 'hannah@example.com', role: 'User', isActive: true },
  { id: 9, name: 'Ian Malcolm', email: 'ian@example.com', role: 'User', isActive: true },
  { id: 10, name: 'Julia Roberts', email: 'julia@example.com', role: 'Admin', isActive: false },
  { id: 11, name: 'Kevin Bacon', email: 'kevin@example.com', role: 'User', isActive: true },
  { id: 12, name: 'Laura Croft', email: 'laura@example.com', role: 'Editor', isActive: true }
];

// for(let i = 0 ; i< users.length; i++){
//     log(users[i])
// }
let name="x"
users.forEach((z, ww)=>{
    if(ww==10) log(z.name, ww)
    // log(z["name"])
   // log(z[name])    // u["x"]
})