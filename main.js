const menuIcon = document.querySelector('.menu-icon');
const menuClose = document.querySelector('.close');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', ()=>{
  menu.classList.add('active');
})

menuClose.addEventListener('click', ()=>{
  menu.classList.remove('active');
})