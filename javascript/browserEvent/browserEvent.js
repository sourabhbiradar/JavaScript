title.innerHTML="broswerEvent"
topic.innerHTML="broswerEvent"

let btn = document.getElementById("btn")

let fn =function(){
    alert("alert via js")
}

btn.addEventListener("click",fn)

btn.removeEventListener("click",fn)

// btn.removeEventListener('click',function(){
//     alert("alert via js")
// })    

// doesnt work

btn2.onclick=function(e){
    console.log(e.target)
    console.log(e.type)
    console.log(e.clientX)
    console.log(e.clientY)
}

