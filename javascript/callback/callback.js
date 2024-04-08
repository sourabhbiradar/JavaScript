let fn = function (cbFn){
   
    console.log(cbFn)
}

function callFn(x){
    alert("fn called callback func callFn()")
    return x
}

fn(callFn(5))