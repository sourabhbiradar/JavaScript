function err(){
    let err = new Error("error occured")
    console.log(err)
}

let p =confirm("yah or nah")

if (p){
    console.log("clicked yah")
}else{
    err()
}

let random =function (error,val){
    if (val == "y"){
        console.log(val)
        
        
    }else{
      error()
    }
}
random(err,"y")
 
