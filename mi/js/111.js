/*
* @Author: Administrator
* @Date:   2017-04-28 12:42:35
* @Last Modified by:   Administrator
* @Last Modified time: 2017-05-06 15:03:15
*/

'use strict';
	function $(selector,ranger=document){  //ranger  指定的范围   默认值是docunment   不传的话是undefined
		let type=typeof selector;
		if(type=='string'){
			let select=selector.trim();
			let first=select.charAt(0);
			if(first=='.'){
				return ranger.getElementsByClassName(select.substring(1));
			}
			else if(first=='#'){
				return document.getElementById(select.substring(1));
			}
			else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(select)){
				return ranger.getElementsByTagName(select);
			}
			else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(select)){
				//<div>
				return document.createElement(select.slice(1,-1));  //创建元素   $("<div>")
			}
		}else if(typeof selector=='function'){
			//添加事件
			// window.onload=function(){
			// 	selector();    //回调函数
			// }
			addEvent(window,"load",selector);
		}
	}

/*正则表达式  开始必须是字母开头  第一位是a-zA-Z  第二位a-zA-Z1-6 第三位 8位
(/^[a-zA-Z][a-zA-Z1-6]{0,8} $/.test(select)) 判断一个字符串是否是以这些开头  如果是  执行select  不是的话返回false
判断是否符合标签规则    正则表达式不需要截取*/ 


/*############################*/

/*
getComputedStyle(obj, null).attr;   //W3c浏览器获取
obj.currentStyle.attr;   //IE浏览器获取
window.getComputedStyle  如果浏览器属性有这个方法的话 =function(){}  true  没有的话undefined   false  W3C浏览器有   IE没有

1、判断浏览器 当前浏览器支持哪一种方法  
	ie  ie
	w3c 
如何判断浏览器呢？
	getStyle(obj,attr)//获取某一个对象指定的样式属性  

	obj  对象  attr 样式


*/                  //obj  对象  attr 属性
 	function getStyle(obj,attr){
 		if(window.getComputedStyle){
 			return getComputedStyle(obj, null)[attr];  //attr  字符串传进来的  所以要加[];
 		}else{
 			return obj.currentStyle[attr];
 		}
 	}



/*#########################################*/


/*html(obj[,content])

设置或者是获取某一个元素的内容

obj  指定对象 
[content] 即将设置的内容  
没有传的时候  获取obj  内容  
传了  设置obj内容*/


	function html(obj,content){
		if(content){
			//设置
			obj.innerHTML=content;
		}else{
			//获取
			return obj.innerHTML
		}
	}

		//获取指定元素的子元素节点
//getChild()
//1、获取所有的子节点
//2、筛选

	function getChilds(obj){
		let childs=obj.childNodes;
		let arr=[];
		childs.forEach(function(value){
			if(value.nodeType==1){
				arr.push(value);
			}
		})
		return arr;
	}



//getFirst   获取某一个元素节点
	function getNum(obj,num){
		let childs=getChilds(obj);
		return childs[num];
	}


//第一个元素
	function getFirst(obj,num=0){
		let childs=getChilds(obj);
		return childs[num];
	}

	//最后一个元素
	function getLast(obj,num){
		let childs=obj.lastElementChild;
		return childs;
	}
//获取下一个兄弟节点  元素节点  getNext
	/*
	1.下一个兄弟节点
	2.判断是不是兄弟节点a   
		不是 a下一个兄弟节点
		直到找到为止*/

	function getNext(obj){
		let a=obj.nextSibling;
		if(a===null){
			return false;
		}
		while(a.nodeType!=1){
			a=a.nextSibling;
			if(a===null){
				return false;
			}
		}
		return a;
	}

//    子元素插入到父元素里面
Node.prototype.appendTo=function (parent) {
    parent.appendChild(this)
}
//子元素插入到某一个元素前面
Node.prototype.insertAfter=function(ele){
    let next=this.nextElementSibling;
    let parent=this.parentNode;
    parent.insertBefore(ele,next);
}

Node.prototype.pretend=function(ele){
    let first=this.firstElementChild;
    this.insertBefore(ele,first);
}

//添加事件  给任意对象添加事件
function addEvent(obj,type,fn) {
	obj.addEventListener(type,fn,false);
}



