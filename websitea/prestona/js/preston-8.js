window.addEventListener("load",(event)=>{
    var mainnav = document.querySelector(".navigation");
    var newbutton = document.querySelector(".ham");
    newbutton.addEventListener("click", () => {
        mainnav.classList.toggle("responsive");
      },false);
    
      const mb = document.querySelector('#new');
        today = new Date().getDay();
        if(today==5){
          mb.style.display = 'block';
        }
    });
    window.addEventListener('load', (event)=>{
        const lu = document.querySelector("#lastupdated");
        lu.textContent = document.lastModified;
    
        const cry = document.querySelector("#copyrightyear");
        cry.textContent = new Date().getFullYear();
      });

    window.addEventListener('load', (event)=>{
      const today = document.getElementById("today");
      var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var date = new Date();
      var d = day[date.getDay()];
      var m = month[date.getMonth()];
      today.innerHTML = d + ', ' + date.getDate() + ' ' + m + ' ' + date.getFullYear()
    });

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
      })
