document.getElementById("topic").innerHTML="Advanced Map"


let sampleArr = [0.1,12,-3]

let sqofNum = sampleArr.map(num => {
    return num*num
})

console.log(sqofNum)