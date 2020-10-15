window.addEventListener("load",(event)=>{
var mainnav = document.querySelector(".navigation");
var newbutton = document.querySelector(".ham");
newbutton.addEventListener("click", function(){
mainnav.classList.toggle("responsive")},false);
const mb = document.querySelector('#new');
    today = new Date().getDay();
    if(today==3){
      mb.style.display = 'block';
    }
});
window.addEventListener('load', (event)=>{
    const lu = document.querySelector("#lastupdated");
    lu.textContent = document.lastModified;

    const cry = document.querySelector("#copyrightyear");
    cry.textContent = new Date().getFullYear();
  });
