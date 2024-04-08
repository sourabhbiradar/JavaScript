let p =prompt("enter stn , ppr or srs")

let user = {
    stn:0,
    ppr:1,
    srs:2
}

let cpu = Math.floor(Math.random()*3)

if (user===cpu){
    document.write("nobody wins")
}








