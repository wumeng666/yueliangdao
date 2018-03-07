   var ljdg=document.getElementById("input_in1");
   var ygd=document.getElementById("ygd");
   var guanbi=document.getElementById("guanbi");
   var main1=document.getElementById("main1");
    ljdg.onclick=function () {
	   ygd.style.display="block";
	   main1.style.display="block";
	   main4.style.display="none";
	   main3.style.display="none";
  }
  guanbi.onclick=function(){
  	   ygd.style.display="none";
  }
  var xyb=document.getElementById("xyb");
  var main2=document.getElementById("main2");
  function f(a){
  	if (a.value=="2") {
  		xyb.style.display="block";
  	}
  	if (a.value=="3" || a.value=="4" || a.value=="5") {
      main1.style.display="none";
      main2.style.display="block";
    }
  }
  var tjfa=document.getElementById("tjfa");
  var main3=document.getElementById("main3");
  tjfa.onclick=function () {
  	main2.style.display="none";
  	main3.style.display="block";
  }
  var nnn=document.getElementById("nnn");
  var main4=document.getElementById("main4");
     nnn.onclick=function () {
  	
  	main4.style.display="block";
  	main3.style.display="none";
  }
  var fhxg=document.getElementById("fhxg");
  fhxg.onclick=function () {
  	main1.style.display="block";
  	main3.style.display="none";
  }
  var xh6=document.getElementById("xh6");
  xh6.onclick=function () {
  	ygd.style.display="none";
  }
  var xh5=document.getElementById("xh5");
  xh5.onclick=function () {
  	ygd.style.display="none";

  }

 