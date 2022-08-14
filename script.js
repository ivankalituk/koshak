let burger = document.getElementById('burger')
let nav = document.getElementById('nav')

burger.onclick = function(){
    console.log('burger mobile')
    nav.classList.toggle('_active')
    
}