window.addEventListener("load",(event)=>{
var s = document.getElementById("current-speed").innerHTML;
var t = document.getElementById("current-temp").innerHTML;
t = parseInt(t);
s = parseInt(s);
var f = document.getElementById("wind");
var chill = (35.74+0.6215*t-35.75*Math.pow(s,0.16)+0.4275*t*Math.pow(s,0.16)).toFixed(2);
if(t < 50 && s > 3 ){
    f.textContent = Math.round(chill, 2);
}
else{
    f.textContent = "N/A"
}
});