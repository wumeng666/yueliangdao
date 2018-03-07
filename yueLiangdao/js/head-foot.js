var hp=document.getElementById("help");
var hp_xl=document.getElementsByClassName("help")[0];
hp.onclick=function(EV){
    var ev=EV||window.event;
    hp_xl.style.display="block";
    ev? ev.cancelBubble = true : ev.stopPropagation();
    return false;
}
document.onclick=function(){
    hp_xl.style.display="none";
}
var pers=document.getElementById("person");
var per_img=document.getElementById("xiala");
pers.onmouseover=function(){
    per_img.src="img/sl.png";
}
pers.onmouseout=function(){
    per_img.src="img/xl.png";
}