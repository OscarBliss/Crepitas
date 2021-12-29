const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu(){
    menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu)
closeMenuBtn.addEventListener("click", toggleMenu);


 var openModal = document.querySelector('.show') 
 const modal = document.querySelector('.modal')
 var closeModal = document.querySelector('.modal-close')
 const cloMod = document.getElementById('btn-close')

 openModal.addEventListener('click',()=>{
      
      modal.classList.add('modal-show')
 })

 closeModal.addEventListener('click',()=>{
     
     modal.classList.remove('modal-show')
 })

 cloMod.addEventListener('click',()=>{
  modal.classList.remove('modal-show')
 })