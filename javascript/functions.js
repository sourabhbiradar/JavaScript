document.getElementById("topic").innerHTML="statements :functions "

function oldFunc (){
    console.log("traditional function syntax\n","its called function declaration")
}
oldFunc()



const modFunc = function(){
    console.log("modern function syntax\n","its called function expression")
}
modFunc()



var func=function(great){   // parameter
console.log(great)
}
func('hey')


var fn = function(){   // return
    return 'A'
}
console.log(fn())