window.addEventListener("load",(event)=>{
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var img2 = document.getElementById("myImg2");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
};
})