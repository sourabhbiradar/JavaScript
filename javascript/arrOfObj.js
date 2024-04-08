document.getElementById("topic").innerHTML="array of objects"

let arrObj=[
    {
        name : "xyz" ,
        age : 26 ,
        married : false
    },
   {
        plotNo:11,
        locality:"k nagar",
        city:"klb",
        pin:102585
    }
]

console.log(arrObj)

console.log(arrObj[0])

console.log(arrObj[1].city)

console.log(arrObj[0].name="Xyz")  // update

console.log(arrObj[1].country="Ind")  // add field 'country'


