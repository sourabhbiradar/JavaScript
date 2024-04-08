document.getElementById("topic").innerHTML="statements :for in "

var arr = [-1,-2,-3,-4]

for (let indx in arr){
    console.log(indx)
}

for (let idx in "string"){
    console.log(idx)
}

let obj ={
    name :'xyz',
    age:22,
    height:5.10
}

for (let i in obj){
    console.log(i,obj[i])
}

