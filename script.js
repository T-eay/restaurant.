

let menu = document.querySelector('.menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx bx-x');
    navbar.classList.toggle('active');
}


window.onscroll = () =>{

    menu.classList.remove('bx bx-x');
    navbar.classList.toggle('active');
}