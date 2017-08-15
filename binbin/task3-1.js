window.onload = function(){
	var treeRoot = document.getElementsByClassName("root")[0],
		divs = document.getElementsByTagName("div"),
		btns = document.getElementsByTagName("input"),
		front = btns[0],
		middle = btns[1],
		last = btns[2];
	var treeNode = [];
	front.onclick = function(){
		frontOrder(treeRoot);
		turnColor();
	};
	middle.onclick = function(){
		middleOrder(treeRoot);
		turnColor();
	};
	last.onclick = function(){
		lastOrder(treeRoot);
		turnColor();
	};
		
		
};
function frontOrder(node){
	if(node!=null){
		treeNode.push(node);
		frontOrder(node.firstElementChild);
		frontOrder(node.lastElementChild);
	}
}
function middleOrder(node){
	if(node!=null){
		middleOrder(node.firstElementChild);
		treeNode.push(node);
		middleOrder(node.lastElementChild);
	}
}
function lastOrder(node){
	if(node!=null){
		lastOrder(node.firstElementChild);
		lastOrder(node.lastElementChild);
		treeNode.push(node);
	}
}
//超时调用的代码在全局作用域中进行，因此this的值在非严格模式下指向window，严格下为undefined
//不建议传递字符串

function turnColor(){
	var timer = setInterval(function(){
		var i=0;
		treeNode[i].style.backgroundColor = "#F55";
		i++;
        if(i<treeNode.length){
            treeNode[i-1].style.backgroundColor="#FFF";
            treeNode[i].style.backgroundColor="#F55";
        }else{
            clearInterval(timer);
            treeNode[i].style.backgroundColor="#FFF";
        }
    },700);
} 