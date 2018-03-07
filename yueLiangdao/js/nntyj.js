var li1 = document.getElementsByClassName('li1').innerText;
var lis = document.getElementsByClassName('li1');
var tj1 = document.getElementById('tj1');
var tj2 = document.getElementById('tj2');
var tags = document.getElementById('tags');
var arg=[];

for(var i = 0;i < lis.length;i++){
	var flag = true;
	lis[i].onclick = function(){
		var text = this.innerText;
		for(var j = 0;j < tags.children.length;j++){
			var t = tags.children[j].innerText;
			if(text == t){
				flag = false;
				break;
			}else{
				flag = true;
			}
		}
		if(flag != false){
			var li = document.createElement('li');
			li.className = 'f_l zt13 lb tag-block';
			li.innerText = text;
			tags.appendChild(li);	
		}
	}
}
function f1(x){
	// var yc = document.getElementById('d'+x);
	var aa = document.getElementById('a'+x);
	var bb = document.getElementById('b'+x);

	aa.className='xianshi f_l zt13 goum';
	bb.className='xianshi shouc zt13 f_l';
}
function f2(y){
	// var yc = document.getElementById('d'+y);
	var aa = document.getElementById('a'+y);
	var bb = document.getElementById('b'+y);
	aa.className='yinc';
	bb.className='yinc';
}


