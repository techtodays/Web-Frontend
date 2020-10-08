const menubutton = document.querySelector('.menu');
const mainnav = document.querySelector('.nav')

menubutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};