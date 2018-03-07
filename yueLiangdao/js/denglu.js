function yanz(){
	var yz1 = document.getElementById('yz1');
	var yz2 = document.getElementById('yz2');
	yz2.style='display:block';
	yz1.style='display:none';

}
function yanzheng(){
	var yz1 = document.getElementById('yz1');
	var yz2 = document.getElementById('yz2');
	yz2.style='display:none';
	yz1.style='display:block';
}
function yzm(){
	var in3 = document.getElementById('in31');
	var n = 60;
		in3.style.backgroundColor="red";
		in3.style.borderColor="red";
		in3.value = n-- +'s后重新发送';
		var timer = setInterval(function(){
			in3.value = n-- +'s后重新发送'; 
			if(n == -2){
				in3.style.backgroundColor="#555";
				in3.style.borderColor="#555";
				in3.value = '获取验证码';
				n = 60;
				clearInterval(timer);
			}
		}, 1000);
}