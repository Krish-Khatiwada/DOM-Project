let img = document.querySelector("img")
let h1 = document.querySelector("h1")
let h5 = document.querySelector("h5")
let add = document.querySelector(".add")
let remove = document.querySelector(".remove")

let click = 1
add.addEventListener("click", function(){
    if(click === 1){
    h1.innerHTML = "CoolBiralo"
    h5.innerHTML = "2 Mutual Friends"
    add.innerHTML = "Confirm"
    remove.innerHTML = "Delete"
    img.setAttribute("src", "https://images.unsplash.com/photo-1585699777545-355976789272?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D")
    click++
    }
    else {
    h5.innerHTML = "You are now friends"
    add.innerHTML = ""
    remove.innerHTML = ""
    add.style.visibility = "hidden"
    remove.style.visibility = "hidden"
    }
})

remove.addEventListener("click", function(){
    h5.innerHTML = "you're not interested"
    add.innerHTML = ""
    remove.innerHTML = ""
    add.style.visibility = "hidden"
    remove.style.visibility = "hidden"
})
