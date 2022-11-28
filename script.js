let allBtn = document.querySelector("#delete")
let ul = document.querySelector("ul")
let addBtn = document.querySelector("#add")
let copyBtn = document.querySelector("#copy")
let notification = document.querySelector(".notification")
let box = document.querySelector(".box")
let no = document.querySelector(".no")
let yes = document.querySelector(".yes")
let input = document.querySelector("#inpt")
let alertNote = document.querySelector(".alert-note")
let inputAfter = document.querySelector(".input-after")

input.addEventListener("click",function(){
if(inputAfter.style.display = "block"){
    inputAfter.style.display = "none"
}
else{
    inputAfter.style.display = "block"
}
})
function showItem(){
for(let i = 0; i<ul.children.length; i++){
ul.children[i].addEventListener("click", function(e){
e.target.style.display = "none"
})
}}
showItem()
addBtn.addEventListener("click", addItem)
function addItem(){
let input = document.querySelector("#inpt")
    let ul = document.querySelector("ul")
let li = document.createElement("li")
li.innerHTML = input.value
ul.append(li)
console.log(li)
input.value = ""

showItem()
}


allBtn.addEventListener("click", deleteItem)
function deleteItem(){
for(let i = 0; i<ul.children.length;i++){
ul.innerHTML = "";
}
}



copyBtn.addEventListener("click", function(){
let input = document.querySelector("#inpt")
let alert = document.querySelector(".alert")
alert.style.top = "10px"
if(input.value == ""){
yes.setAttribute("disabled","true")
alertNote.innerHTML = "There is not input value!"
}
})


yes.addEventListener("click", yesItem)
function yesItem(){
let alert = document.querySelector(".alert")
        let notification = document.querySelector(".notification")
        let element = document.createElement("div")
        element.setAttribute("class","box")
        let copyText = document.querySelector("#inpt").value
        navigator.clipboard.writeText(copyText)
        element.innerHTML = `<strong>${copyText}</strong> - clipboarda əlavə olundu`;
        notification.append(element)
        alert.style.top = "-200px"
}

no.addEventListener("click", function(){
let alert = document.querySelector(".alert")
alert.style.top = "-200px"
})



