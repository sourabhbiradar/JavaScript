document.getElementById("topic").innerHTML="objects"

let obj = {
    name : "abc",
    age : 26,
    emp : true,
    address : [11,'k nagar','klb',102],
    obj2:{
        salary:35000,
        PF:1500,
        basic : 15000
    }
    
}

let objA={
    fn:function(x){
      return x
    }
}
console.log(objA.fn('obj.func'))


console.log(obj.name)  //reads name field

console.log(obj["age"]) // not recomd

console.log(obj.address[2])  // reads klb

console.log(obj.age = 28) //updates age

delete obj.emp     // deletes emp field

console.log(obj)

console.log(obj.obj2.PF)   // obj within obj

