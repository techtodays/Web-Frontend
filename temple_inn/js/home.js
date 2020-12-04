window.addEventListener("load",(event)=>{
    var mainnav = document.querySelector("#navigation");
    var newbutton = document.querySelector("#ham");
    newbutton.addEventListener("click", () => {
        mainnav.classList.toggle("responsive");
      },false);
    });