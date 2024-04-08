let bx = document.getElementById("box")
console.log(bx.matches("#box"))

let sb = document.querySelector("span")
console.log(sb.closest(".sub2"))


console.log(bx.contains(".sub2"))

let sb2 = document.getElementsByClassName("sub2")
console.log(sb2.matches(".sub2"))