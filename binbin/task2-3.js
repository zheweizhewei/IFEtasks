/*
*js的执行是从上到下的，在html中引入外部的js文件，js就会在一开始执行，
*而要获取的id还在后面！所以此处获取到的是null！
*解决方法就是添加window.onload()事件处理
*/
window.onload = function(){
var input_text = document.getElementById("input_text");
var left_in = document.getElementById("left-in");
var right_in = document.getElementById("right-in");
var left_out = document.getElementById("left-out");
var right_out = document.getElementById("right-out");
var search = document.getElementById("search");
			
var arr = [];

left_in.addEventListener("click", function(){
	var input_text = document.getElementById("input_text").value;
	//替换各种非字符分隔符
	input_text = input_text.replace(/[^0-9a-zA-Z]/g, ' ');
	var input_arr = input_text.split(' ');
	for(var i=0; i<input_arr.length; i++){
		arr.unshift(input_arr[i]);
		show(arr);
		addDelEvent(showbox);	
	}
}, false);

right_in.addEventListener("click", function(){
	var input_text = document.getElementById("input_text").value;
	input_text = input_text.replace(/[^0-9a-zA-Z]/g, ' ');
	var input_arr = input_text.split(' ');
	for(var i=0; i<input_arr.length; i++){
		arr.push(input_arr[i]);
		show(arr);
		addDelEvent(showbox);	
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
search.onclick = function(){
	
	var search_text = document.getElementById("search_text").value;
	//正则表达式构造函数(添加全局模式“g”之后不能匹配全部选项，
	//原因：只创建了一个regexp的实例，因此后一次调用会从上一次匹配的末尾开始，所以会可能找不到，可以观察lastIndex的变化。)
	//var reg_search = RegExp(search_text,"g");
	for(var i=0; i<arr.length; i++){
		var reg_search = RegExp(search_text,"g");
		showbox.childNodes[i].style.color = "#fff";
		if(reg_search.test(arr[i])){
			//特别标记
			showbox.childNodes[i].style.color = "#00f";
		}
	}
}	
var showbox = document.getElementById("showbox");


function show(arr){	
	var str = "";
	for(var i=0; i<arr.length; i++){
	str += ('<p>' + arr[i] + '</p>');
   }
   showbox.innerHTML = str;
 }			
//闭包：只能取得包含函数中任何变量的最后一个值，可以通过创建另一个匿名函数(函数是按值传递)强制让闭包的行为符合预期。
//问题：只有第一次的点击数删除有效，暂未找到原因。(添加递归解决)
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