document.getElementById("topic").innerHTML="Alert , Confirm and prompt"

//     Alert     //
alert ("Know a number if its Even or Odd")


//     Prompt      //
let num = prompt("Please Enter number :")

let promptFunc = function(){
Number.parseInt(num)
if (num%2===0){
    document.write(`${num} is an even number`)
}else {
    document.write(`${num} is an odd number`)
}
}


//     Confirm     //
let x = confirm(`is this your number : ${num}`)
if(x){
    promptFunc()
}else{
    document.write("<br/>oops!! try again")
}
