document.getElementById("topic").innerHTML="Destructuring"

let arr = ["Nano",'Purple',128000,true]

const [car,colour,price,availability]=arr

console.log(car,colour,price,availability) 

const obj ={
    one:1,
    two:2,
    three:3
}

const {one,two,three}=obj // must be same as field names
console.log(one,two,three) 

let file = {
    name:'destructuring',
    extention : '.js',
    size : '32kb'
}

const fileFn=function({name,extention,size}){
    console.log(`${name}${extention} is of ${size}`)  
}

fileFn(file)

