var eAlert = document.querySelector('.alert')
var box = document.querySelector('.box')

var result = document.querySelector('.result')
var eKey = document.querySelector('.card.key p:nth-child(2)')
var eLocation = document.querySelector('.card.location p:nth-child(2)')
var eWhich = document.querySelector('.card.which p:nth-child(2)')
var eCode = document.querySelector('.card.code p:nth-child(2)')

document.addEventListener('keydown', e =>{
    result.innerText = e.which
    eKey.innerText = e.key
    eLocation.innerText = e.location
    eWhich.innerText = e.which
    eCode.innerText = e.code
    eAlert.classList.add('hide')
    box.classList.remove('hide')
})