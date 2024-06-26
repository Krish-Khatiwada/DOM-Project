let img = document.querySelector("img")
let h1 = document.querySelector("h1")
let h5 = document.querySelector("h5")
let add = document.querySelector(".add")
let remove = document.querySelector(".remove")

add.addEventListener("click", function(){
    h1.innerHTML = "Will Byers"
    h5.innerHTML = "2 Mutual Friends"
    add.innerHTML = "Confirm"
    remove.innerHTML = "Delete"
})

remove.addEventListener("click", function(){
    h1.innerHTML = "Lucas Warner"
    h5.innerHTML = "Friend"
    add.innerHTML = "Add Friend"
    remove.innerHTML = "Remove"
})