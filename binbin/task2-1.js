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
		addDelEvent(showbox);	
	}else{
		alert("Please enter a number!");
	}
}, false);

right_in.addEventListener("click", function(){
	var input_num = document.getElementById("number").value;
	if((/[\d]/).test(input_num)){
		arr.push(input_num);
		show(arr);
		addDelEvent(showbox);	
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


function show(arr){	
	var str = "";
	for(var i=0; i<arr.length; i++){
	str += ('<p>' + arr[i] + '</p>');
   }
   showbox.innerHTML = str;
 }			
//闭包：只能取得包含函数中任何变量的最后一个值，可以通过创建另一个匿名函数(函数是按值传递)强制让闭包的行为符合预期。
//问题：只有第一次的点击数删除有效，暂未找到原因。
function addDelEvent(showbox){
	for(var i=0; i<showbox.children.length; i++){
		showbox.children[i].addEventListener("click",function(num){
			return function(){
				arr.splice(num,1);
	            show(arr);
				addDelEvent(showbox);
			}
		}(i),false);
	}
 }
}