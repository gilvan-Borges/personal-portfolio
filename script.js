//seleção do DOM
//selecionando o "botão menu"

var btnMenu = document.querySelector('.btn-menu');
var btnMenu1 = document.querySelector('.btn-menu1');

var menu = document.querySelector('.nav');


function controlMenu(){
   menu.classList.toggle('menu-open')
   btnMenu.classList.toggle('x')
}

btnMenu.addEventListener('click',controlMenu)
menu.addEventListener('click',controlMenu)