window.onload = function(){
	var divs = document.getElementsByTagName("div");
	console.log(divs.length);
	function turnColor(arr){
		arr[i].style.backgroundColor = '#fff' ;
	} 
	for(var i=0; i<divs.length; i++){
		divs[i].style.backgroundColor = "#000";
		//超时调用的代码在全局作用域中进行，因此this的值在非严格模式下指向window，严格下为undefined
		//不建议传递字符串
		
		setTimeout(function(divs){
			return turnColor(divs);
		},500);
	}
}