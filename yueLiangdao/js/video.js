var top_sp=document.getElementById("top_sp");
var vdo=document.getElementsByTagName("video")[0];

top_sp.onclick=function(){
    console.log(1);
    vdo.setAttribute("controls","");
    vdo.play();
    this.style.display="none";
    
}