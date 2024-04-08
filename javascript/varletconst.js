document.getElementById("topic").innerHTML='var let const'

console.log(a)   // undefined as d&i in ln7 (hoisting)
//console.log(x)   // uncaught ReferenceError: 
                 // Cannot access 'x' before initialization
//console.log(age) // same 

var a= 9
var a = 8  // varible can be redeclared

console.log(a)

let x='hey'
//let x='hi' // Uncaught SyntaxError:
             // Identifier 'x' has already been declared

console.log(x)

const age=33
//const age =88 // same error as let x ='hi'

console.log(age)

function varletconst (){
    console.log(a)
    console.log(x)
    console.log(age)
}
varletconst()
