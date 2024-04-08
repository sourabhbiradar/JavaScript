inHTML.innerHTML="html added via js"


let newDiv = document.createElement("div")
newDiv.className="newElm"
newDiv.innerHTML="<p> para </p>"
document.body.append(newDiv)


let a = document.getElementsByTagName("div")[0]
let newChild = document.createElement("span")
newChild.id="newC"
newChild.innerHTML="new child &lt;span&gt; via js"

// a.appendChild(newChild)

// a.append(newChild)

// a.prepend(newChild)

// a.before(newChild)

a.after(newChild)

let rWith = document.getElementById("apnd")
let rElm = document.createElement("span")
rWith.appendChild(rElm)
rElm.replaceWith(div)