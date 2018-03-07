var outer=document.getElementsByClassName("outer")[0];
var inner=document.getElementsByClassName("inner")[0];
var imgs=inner.getElementsByTagName("img");

// 大图根据屏幕大小，缩放自动进行适配
function checkedScreen(){
    var t=document.documentElement.clientWidth;
    if(t<=1350){
        inner.style.width="1350px";
        outer.style.width="1350px";
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].style.width="1350px";
        }
        inner.style.height=imgs[0].clientHeight+"px";
        outer.style.height=imgs[0].clientHeight+"px";
    }else{
        inner.style.width=t+"px";
        outer.style.width=t+"px";
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].style.width=t+"px";
        }
        inner.style.height=imgs[0].clientHeight+"px";
        outer.style.height=imgs[0].clientHeight+"px";
        if(t>1920){
            inner.style.width="1920px";
            outer.style.width="1920px";
            for (var i = 0; i < imgs.length; i++) {
                imgs[i].style.width="1920px";
            }
            inner.style.height=imgs[0].clientHeight+"px";
            outer.style.height=imgs[0].clientHeight+"px";
        }
        
    }
    gundong();
}
window.onload=function(){
    checkedScreen();
    addLis();
    right_LX();
}
window.onresize=function(){
    clearInterval(timer2);
    checkedScreen();
}
//

//大图淡入淡出
var timer1=null,tt=1,timer2=null;
var x=-1;
function in_out(){
    timer1=setInterval(function(){
        imgs[x].style.opacity=tt;
        imgs[x].style.zIndex="10";
        if(x>=imgs.length-1){
            imgs[0].style.display="block";
        }else{
            imgs[x+1].style.display="block";
            imgs[x+1].style.zIndex="0";
        }
        tt-=0.1;
        if(tt<0){
            tt=1;
            if(x>=imgs.length-1){
                imgs[x].style.zIndex="0";
                imgs[x].style.opacity="1";
                imgs[x].style.display="none";
                imgs[0].style.zIndex="10";
            }else{
                imgs[x].style.zIndex="0";
                imgs[x].style.display="none";
                imgs[x].style.opacity="1";
                imgs[x+1].style.zIndex="10";
            } 
            clearInterval(timer1);
        }  
    },200);
}
function gundong(){
    timer2=setInterval(function(){
        in_out();
        x++;
        if(x>=imgs.length){
            x=0;
        }
        li_style();
    },5000);
}
var ul_li=document.getElementsByClassName("xz-dian")[0];
var lis=ul_li.getElementsByTagName("li");
function addLis(){
    for(var i=0;i<imgs.length;i++){
        var newLi=document.createElement("li");
        ul_li.appendChild(newLi);
    }
    lis=ul_li.getElementsByTagName("li");
    lis[0].className="xz-color";
}
function li_style(){
    for(var i=0;i<lis.length;i++){
        lis[i].className="";  
    }
    lis[x].setAttribute("class","xz-color");
    
}
//

//链接地址为空是禁止跳转
var ft_imgs=document.getElementsByClassName("sy_foot2");
var ft_a=[];
for (var i = 0; i < ft_imgs.length; i++) {
    var t=ft_imgs[i].getElementsByTagName("a")[0];
    ft_a.push(t); 
}
for (var i = 0; i < ft_a.length; i++) {
   ft_a[i].onclick=function(){
       for (var j = 0; j < ft_a.length; j++) {
          if(ft_a[j]==this){
              var t=this.getAttribute("href");
              if (t=="") {
                  return false;
              }
          }
       }
   }
    
}
//
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