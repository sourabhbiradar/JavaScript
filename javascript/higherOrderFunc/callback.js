document.getElementById("topic").innerHTML="Higher order functions <br/> callback function"

const callbackFunc= function (text){
    console.log('callbackFunc()')
   text ()
   text ()
   text ()
}

const text = function (){
    
    console.log('callback function example')
}

text()
callbackFunc(text)
