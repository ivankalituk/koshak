// burger menu
let burger = document.getElementById('burger')
let nav = document.getElementById('nav')
let body = document.getElementById('body')

burger.onclick = function(){
    console.log('burger mobile')
    nav.classList.toggle('_active')
    body.classList.toggle('_lock')
}

let button = document.getElementById('slidermob')
let button_inner = document.getElementById('button_inner')


button.onclick = function(){
    console.log('change cat buttin')
    button_inner.classList.toggle('_active')

}