title.innerHTML="setTimeout"
topic.innerHTML="setTimeout and setInterval"

let c = confirm("ok or cancel")
if (c){
   setTimeout(function(){
     document.write("setTimeout of 3sec")
    },3000)
}else{
    document.write("error")
}


let fn = function(a,b){
     document.write(a+b)
}
setTimeout(fn,5000,3,-8)


let sT=setTimeout(()=>{
    alert("alert")
},4000)

clearTimeout(sT)

let sI = setInterval(()=>{
    alert("setInterval")
},6000)

clearInterval(sI)