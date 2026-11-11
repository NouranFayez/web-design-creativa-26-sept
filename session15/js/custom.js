// const hideBtn = document.querySelector("#hideBtn")
// const content = document.querySelector("#content")
// hideBtn.addEventListener("click", function(){
// console.log(e.target)
// e.target.textContent = "ay 7aga"
// hideBtn.textContent = "test"
// this.textContent= "test 1"
// console.log(content.classList)
// console.log(content.className)
// content.className = "d-none"
// content.classList.toggle("d-none")
// this.innerText=="show" ? this.innerText="hide" : this.innerText="show"

//     if(this.innerText=="show"){
//         this.innerText="hide" 
//         this.className= "btn btn-danger"
//     }
//     else{
//         this.innerText="show"
//         this.className= "btn btn-success"
//     }
// })

// const num = document.querySelector("#num"),
//       addToCart = document.querySelector("#addToCart"),
//       removeFromCart = document.querySelector("#removeFromCart")

// addToCart.addEventListener("click", function(){
//     let x = +num.textContent
//     x++
//     num.textContent = x
// })
// removeFromCart.addEventListener("click", function(){
//     let x = +num.textContent
//     if(x==0) alert("cart empty")
//     else{
//         x-- 
//         num.textContent = x
//     }
// })


// const more=document.querySelector("#more"),
// c = document.querySelector(".card p")

// more.addEventListener("click", function(){
//     console.log(c.style.height)
//     c.style.overflow = "visible"
//     c.style.height = "auto"
// })

const users = [
    { id: 1, name: 'Alice Smith', email: 'alice@example.com', role: 'Admin', isActive: true },
    { id: 2, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', isActive: true },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'User', isActive: false },
    { id: 4, name: 'Diana Prince', email: 'diana@example.com', role: 'Editor', isActive: true },
    { id: 5, name: 'Ethan Hunt', email: 'ethan@example.com', role: 'User', isActive: true },
    { id: 6, name: 'Fiona Gallagher', email: 'fiona@example.com', role: 'User', isActive: false },
    { id: 7, name: 'George Clark', email: 'george@example.com', role: 'Editor', isActive: true },
    { id: 8, name: 'Hannah Abbott', email: 'hannah@example.com', role: 'User', isActive: true },
    { id: 9, name: 'Ian Malcolm', email: 'ian@example.com', role: 'User', isActive: true },
    { id: 10, name: 'Julia Roberts', email: 'julia@example.com', role: 'Admin', isActive: false },
    { id: 11, name: 'Kevin Bacon', email: 'kevin@example.com', role: 'User', isActive: true },
    { id: 12, name: 'Laura Croft', email: 'laura@example.com', role: 'Editor', isActive: true }
];

const data = document.querySelector("#data")

// const div = document.createElement("div") // <div></div>
// data.appendChild(div)
// div.textContent="test"
// const createMyOwnElement = (parent, el, classes, txt) =>{
//     const ele = document.createElement(el)
//     parent.appendChild(ele)
//     if(classes) ele.className = classes
//     if(txt) ele.innerText = txt
//     return ele
// }
// users.forEach((u)=>{
//     let outer = createMyOwnElement(data, "div", "col-4 p-3", null)
// let outer = document.createElement("div")
// outer.className = "col-4 p-3"
// data.appendChild(outer)
//     let inner = document.createElement("div")
//     inner.className = "border border-1 border-dark rounded-2 overflow-hidden"
//     outer.appendChild(inner)
//     let d = document.createElement("h3")
//     d.innerText = u.name
//     inner.appendChild(d)
//     d = document.createElement("h3")
//     d.innerText = u.email
//     inner.appendChild(d)
//     d = document.createElement("h3")
//     d.innerText = u.role
//     inner.appendChild(d)
// })

// users.forEach((u)=>{
//     let outer = createMyOwnElement(data, "div", "col-4 p-3")
//     let inner = createMyOwnElement(outer, "div","border border-1 border-dark rounded-2 overflow-hidden" )
//     createMyOwnElement(inner, "h3", null, u.id)
//     createMyOwnElement(inner, "h3", null, u.name)
//     createMyOwnElement(inner, "h3", null, u.email)
//     createMyOwnElement(inner, "h3", null, u.role)
// })

// const d = document.querySelector("#d"), val = document.querySelector("#val"), add=document.querySelector("#add")

// add.addEventListener("click", function () {
// val.innerText =d.value
//     let x = document.createElement("p")
//     val.appendChild(x)
//     x.textContent=d.value
//     d.value=""
// })


