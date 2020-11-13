window.addEventListener("load",(event)=>{
        var modal = document.getElementById("myModal");
        var img = document.getElementsByClassName("img");
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
          for (var i = 0; i< img.length; i++) {
            var images = img[i];
            images.onclick = function(){
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            }
        }
var span = document.getElementsByClassName("close")[0];
      span.onclick = function() {
        modal.style.display = "none";
      };
    });