document.getElementById("topic").innerHTML="higher order functions <br/> return function"

const returnFunc=function (){
       return function (){
       return "return function example"
   }
}

//returnFunc()()

// let x = returnFunc()
// console.log(x())

"or simply"

let rF =returnFunc()()
console.log(rF)




