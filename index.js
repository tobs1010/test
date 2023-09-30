let textDom = document.getElementById("text")



let wordtext = document.createElement("h1")
wordtext.textContext = "I believe in Septa"

textDom.appendChild(wordtext)


let newtext = document.querySelector("tobi")
let textnew = document.createElement("h1")
textnew.textContent = "tomorrow"
newtext.appendChild(textnew)


wordtext.style.color = "blue"
wordtext.style.fontsize = "35px"
wordtext.style.fontfamily = "calibre"
wordtext.style.backgroundColor = "green"


let getButton = document.getElementById("click")
getButton.addEventListener("mouseover", function(){
    alert("please send me some dollars")
})