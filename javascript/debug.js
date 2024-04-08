//document.getElementById("topic").innerHTML="statements :debugging in vs-code"

function one(){
    console.log('one')
}

function two(radius){
   area = 3.14 * radius *radius
   console.log(area)
}

function three(){
    let arr = [['key','value'],['index','element']]
    for (let i = 0; i < arr.length;i++){
        console.log("i :",i,"arr[i] :",arr[i])
        for (let j=0;j<arr[i].length;j++){
            console.log("j :",j,"arr[j] :",arr[j])
        }
    }
}

one()

two(5)

three()