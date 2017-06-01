'use strict'
//窗口加载完之后 执行一段程序
//alert(1);
window.onload=function(){
	var designWidth = 1080; //定义设计尺寸
	function fontSize(){
		var CM = document.documentElement.clientWidth;
		//设备尺寸 文档的宽度
		//console.log(MW); 输出文档的宽度
		var size = CM/designWidth*100+"px";
		document.querySelector("html").style.fontSize = size;
		//设置html的font-size
	}
	fontSize(); //运行函数
	window.onresize = fontSize; //检测窗口尺寸是否发生改变
}

