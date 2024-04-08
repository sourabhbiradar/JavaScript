let fn=function(){
    console.log('addEventListener ( )')
}
document.addEventListener('click',fn)

let mO =function(){
    document.getElementById("demo").style.color="red"
}
document.addEventListener('mouseover',mO,true)