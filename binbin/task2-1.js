/*
*js的执行是从上到下的，在html中引入外部的js文件，js就会在一开始执行，
*而要获取的id还在后面！所以此处获取到的是null！
*解决方法就是添加window.onload()事件处理
*/
window.onload = function(){
var number = document.getElementById("number");
var left_in = document.getElementById("left-in");
var right_in = document.getElementById("right-in");
var left_out = document.getElementById("left-out");
var right_out = document.getElementById("right-out");
			
var arr = [];

left_in.addEventListener("click", function(){
	var input_num = document.getElementById("number").value;
	if((/[\d]/).test(input_num)){
		arr.unshift(input_num);
		show(arr);
	}else{
		alert("Please enter a number!");
	}
}, false);

right_in.addEventListener("click", function(){
	var input_num = document.getElementById("number").value;
	if((/[\d]/).test(input_num)){
		arr.push(input_num);
		show(arr);
	}else{
		alert("Please enter a number!");
	}
}, false);
left_out.onclick = function(){
	alert(arr.shift());
	show(arr);
};
right_out.onclick = function(){
	alert(arr.pop());
	show(arr);
};
	
var showbox = document.getElementById("showbox");
delNodes(showbox);	

function show(arr){	
	var str = "";
	for(var i=0; i<arr.length; i++){
	str += ('<p>' + arr[i] + '</p>');
   }
   showbox.innerHTML = str;
 }			

function delNodes(showbox){
	for(var i=0; i<showbox.children.length; i++){
		showbox.children.onclick = function(){
			return i;
		};
	}
	arr.splice(i,1);
	show(arr);
}

}