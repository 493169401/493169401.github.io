/*
* @Author: Administrator
* @Date:   2017-04-28 13:43:03
* @Last Modified by:   Administrator
* @Last Modified time: 2017-05-13 16:16:21
*/

'use strict';

		// 通过选择器查询
		//let lis=document.querySelectorAll('.list>li');指定选择的集合  querySelector指定选择器的第一个
		//let list=document.getElementsByClassName(className)



		/*${.list}
		${#list}
		${list}
		function(){}*/
		/*function $(selector，range){//range获取范围
			let type=typeof selector;//声明
			if(type == 'string'){//判断参数的数据类型
				//获取
				let select=selector.trim();//去空
				let first=select.charAt(0);	//返回字符串的第一个字符
				if(first=='.'){//判断第一个字符
					return document.getElementByClassName(select.substr(1));//  '.list'变成 'list'
				}else if(first=='#'){
					return document.getElementById(select.substr(1));
				}else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(select)){//正则 判断是否符合标签规则
					return document.getElementsByTagName(select);
				}
			}
			else if(type=='function'){
				//添加事件
				window.onload=function(){
					selector();//回调函数
				}
			}
		}*/
	

	function $(selector,range=document){//range获取范围
			let type=typeof selector;//声明
			if(type == 'string'){//判断参数的数据类型
				//获取
				let select=selector.trim();//去空
				let first=select.charAt(0);	//返回字符串的第一个字符
				if(first=='.'){//判断第一个字符
					return range.getElementsByClassName(select.substr(1));//  '.list'变成 'list'
				}else if(first=='#'){
					return range.getElementById(select.substr(1));
				}else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(select)){//正则 判断是否符合标签规则
					return range.getElementsByTagName(select);
				}
			}
			else if(type=='function'){
				//添加事件
				window.onload=function(){
					selector();//回调函数
				}
			}
		}




		/*getComputerStyle(obj,null).attr
		obj.currentStyle.attr
		判断浏览器IE ie w3c
		可以访问一个没有定义的方法 不报错 undefined 
		不可以调用一个没有定义的方法 报错
		判断浏览器是否存在某个方法,当做属性让他显示出来
		window.getComputedStyle =function(){}
		getComputedStyle(obj,attr)
		obj对象 attr样式
		getComputedStyle(box,width)

		*/
		function getStyle(obj,arrt){
			if(window.getComputedStyle){
				// alert(1);
				return getComputedStyle(obj,null)[arrt];
			}else{
				return obj.computedStyle[arrt];
			}
		}







		/*html(obj,conntent)
		设置或者是获取某一个元素的内容
		obj指定的的对象
		[content] 设置的内容 可传可不传 
		传：设置  不传：获取

		*/
		function html(obj,content){
			if(content){
				//设置
				obj.innerHTML=content;
			}else{
				//获取
				return obj.innerHTML;
			}
		}



/*getChild 获取指定元素的子元素节点
1.所有子节点  2.筛选
数组方法回忆 map映射*/



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

/*getFirst*/
function getFirst(obj){
	return getChilds(obj)[0];
}

function getLast(obj){
	let childs= getChilds(obj);
	return childs[childs.length-1]
}
function getLast(obj,num){
	let childs= getChilds(obj);
	return childs[num];
}
/*getNext 
下一个兄弟节点a
不是 a下一个兄弟节点*/
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