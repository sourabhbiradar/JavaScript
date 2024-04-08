document.getElementById("topic").innerHTML="Scopes in javaScript"



function fnScope(){
    console.log("function scope")

    var a = 1
    let b = 2
    const c = 3

    console.log(a,b,c)   // can only b accessed in function
}
console.log(a,b,c)       // can NOT b accessed outside function
fnScope()


function blockScope(){
    console.log("Block Scope")

    if (true){
      var x = -1
      let y = -2
      const z = -3

      console.log(x,y,z)  // can only b accessed in 'if block'
    }
   console.log(x)   // outside block x can
   //console.log(y,z) // outside block y,z can NOT
}
//console.log(x,y,z) // globally can NOT
blockScope()


function lexiScope(){
    console.log("lexical scope")

    var outVar = 'oa'
    let outLet = 'ob'
    const outConst = 'oc'
    console.log(outVar,outLet,outConst)

    function innerFn(){
        console.log(outVar,outLet,outConst) // outter : var,let,const YEP

        var inVar = 'ia'
        let inLet = 'ib'
        const inConst = 'ic'
        
        console.log(inVar,inLet,inConst)   // YEP

    }
    innerFn()
    console.log(inVar,inLet,inConst)  // inner : var ,let , const NOPE

}
lexiScope()

var gVar = 'aX'
let gLet = 'bY'
const gConst = 'cZ'

function globalScope(){
    function outterFn(){

        console.log(gVar,gLet,gConst)
        
            function innerFn(){
                console.log(gVar,gLet,gConst)
            }
            innerFn()
         }
         console.log(gVar,gLet,gConst)
    outterFn() 
}
console.log(gVar,gLet,gConst)
globalScope()

