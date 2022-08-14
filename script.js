let burger = document.getElementById('burger')
let nav = document.getElementById('nav')
let body = document.getElementById('body')


burger.onclick = function(){
    console.log('burger mobile')
    nav.classList.toggle('_active')
    body.classList.toggle('_lock')
}