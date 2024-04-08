document.getElementById("topic").innerHTML="Arrays"

let arrNum=['one','two','three']

arrNum[3]='four'     // add @ [i]
arrNum[1]='TWO'      // update at [i]

arrNum.push('five')  // add as last ele

arrNum.unshift('zero') // add as [0] ele

arrNum.pop()          // deletes last ele

arrNum.shift()        // deletes first ele

arrNum[3]             // read [i] ele

arrNum.sort()         // sorts array

console.log(arrNum)