document.getElementById("topic").innerHTML="string methods : slice()"

let strg = 'some random small phrase'


console.log(strg.slice())       // whole strg

console.log(strg.slice(6))      // andom...phrase

//console.log(strg.slice(_,19))   // _ not defined

console.log(strg.slice(0,19))   // s...p

console.log(strg.slice(6,19))   // andom...p

console.log(strg.slice(6,-3))   // andom...phr (index 6 to last 3rd)

console.log(strg.slice(-2))     // se (last 2 index)
