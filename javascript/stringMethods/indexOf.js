document.getElementById("topic").innerHTML="string methods : indexOf()"

let str = 'basic string'

console.log(str.indexOf('c'))      // 4
console.log(str.indexOf('string')) // 6
console.log(str.indexOf('stri'))   // 6 counts the first letter 
console.log(str.indexOf('blah'))   // -1 (false)
                                   // for mispelled or non exsisting
