/*
* @Author: Administrator
* @Date:   2017-05-14 09:54:44
* @Last Modified by:   Administrator
* @Last Modified time: 2017-05-14 23:06:13
*/

'use strict';
window.onload=function(){

	// 轮播图
	let wheel=document.querySelector('.wheel');
	let win=document.querySelector('.win');
	let imgBox=document.querySelector('.imgBox',win);
	let imgs=document.querySelectorAll('.imgBox li');
	let imgWidth=parseInt(getComputedStyle(imgBox,null).width);
	let btns=document.querySelectorAll('.btn li');
	let flag=true;
	

	//初始化状态
	let current=0,next=0;
	for(let i=0;i<imgs.length;i++){
		if(i==0){
			continue;//退出本次循环，让图片都在右方
		}
		imgs[i].style.left=imgWidth+'px';

	}
	let t=setInterval(move,4000);


	function move(){
		next++;
		if(next==imgs.length){//为了下标不越界，到最后一张图片时，next返回第一张
			next=0;
		}
		//按钮
		btns[next].className='hot';
		btns[current].className='';

		imgs[next].style.left=imgWidth+'px';//下一张图片在右边
		animate(imgs[current],{left:-imgWidth});//动画，当前的图片往左移
		animate(imgs[next],{left:0},function(){flag=true});//动画，下一张图片到中间位置

		current=next;//可互换


	}


	//移入某一区域
	win.onmouseenter=function(){
		clearInterval();
	}
	win.onmouseleaver=function(){
		t=setInterval(move,4000);
	}


	//按钮点击操作
	//方法一
	//btns=Array.from(btns);
	//Array(0).forEach.call(btns,function(value,index,obj)[])
	/*btns.forEach(function(value,index,obj){
		value.onclick=function(value,index,obj){
			if(current==index){
				return;
			}
			btns[current].className='';
			this.className='hot';
			if(index>current){
				//right->left
				imgs[index].style.left=imgWidth+'px';
				animate(imgs[current],{left:-imgWidth});
				animate(imgs[next],{left:0});
			}else if(index<current){
				//left->right
				imgs[index].style.left=-imgWidth+'px';
				animate(imgs[current],{left:0});
			}
			current=next=index;
		}
	})*/

	// 方法2
	for(var i=0;i<btns.length;i++){
		//let保存每一个值
		//2添加自定义属性
		btns[i].index=i;
		btns[i].onclick=function(){
			if(this.index==current){
				return;
			}
			btns[current].className='';
			this.className='hot';
			if(this.index>current){
				//右->左
				imgs[this.index].style.left=imgWidth+'px';
				animate(imgs[current],{left:-imgWidth});
				animate(imgs[this.index],{left:0});
			}else if(this.index<current){
				//左->右
				imgs[this.index].style.left=-imgWidth+'px';
				animate(imgs[current],{left:imgWidth});
				animate(imgs[this.index],{left:0});
			}
			current=next=this.index;

		}

		//背景色
		switch(i){
			case 0 :wheel.style.background='#F0ECE6';break;
			case 1 :wheel.style.background='#DD3809';break;
			case 2 :wheel.style.background='#e8e8e8';break;
			case 3 :wheel.style.background='#4C3A9A';break;
			case 4 :wheel.style.background='#F5C15B';break;
			case 5 :wheel.style.background='#A30E1E';break;
		}
	}



	//按需加载
	let ch=window.innerHeight;
	let floors=document.querySelectorAll('.floor');//获取所有楼层
	let arr=[];
	floors.forEach(function(value,index){
		arr.push(value.offsetTop);//遍历 将每一个楼层距顶部的高度push到数组中
	})
	window.onscroll=function(){
		let tops=document.body.scrollTop;//获取当前文档滚动堆得距离
		arr.forEach(function(value,index){
			if(tops+ch>value+200){
				let floor=document.getElementsByClassName('floor')[index];//获取
				let imgs=floor.getElementsByTagName('img');
				for(let i=0;i<imgs.length;i++){
					imgs[i].src=imgs[i].title;
				}
			}
		})
	}
	
	
}