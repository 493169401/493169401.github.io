/*
* @Author: Administrator
* @Date:   2017-05-01 16:53:13
* @Last Modified by:   Administrator
* @Last Modified time: 2017-05-13 17:28:22
*/

'use strict';




window.onload=function(){
	//下拉菜单
	let more=document.querySelector('.more');

	let ul1=document.querySelector('.ul1');
	// console.log(ul1);
	// console.log(more);
	let xiala=document.querySelectorAll('.xiala');
	let erji=document.querySelectorAll('.erji');
	ul1.onmouseenter=function(){
		more.style.height='230px';	
	}
	ul1.onmouseleave=function(){
	for(let i=0;i<xiala.length;i++){
		more.style.height='0';
		}
	}

	for(let i=0;i<xiala.length;i++){
		xiala[i].onmouseenter=function(){
			erji[i].style.display='block';
		}
		xiala[i].onmouseleave=function(){
			erji[i].style.display='none';
		}
	}

	




	//轮播图
	//获取
	let wheel=document.querySelector('.wheel');
	let imgBox=document.querySelector('.WheelBox');
	let imgs=document.querySelectorAll('.WheelImg');
	let imgWidth=parseInt(getComputedStyle(imgBox,null).width);
	let btns=document.querySelectorAll('.btn>li');
	let left=document.querySelector('.wheel>.left');
	let right=document.querySelector('.wheel>.right');
	let flag=true;
	
	//状态初始化
	let current=0,next=0;//current记录当前 next记录即将要显示的
	for(let i=0;i<imgs.length;i++){
		if(i==0){
			continue;
		}
		imgs[i].style.left=imgWidth+'px';
	}
	let t=setInterval(move,4000);

	//移入某一区域
	wheel.onmouseenter=function(){
		clearInterval(t);
	}
	wheel.onmouseleave=function(){
		t=setInterval(move,4000);
	}

	//按钮点击操作
	btns.forEach(function(value,index,obj){
		value.onclick=function(){
			if(current==index){
				return;
			}
			btns[current].className='';
			this.className='hot';
			if(index>current){
				//右->左
				imgs[index].style.left=imgWidth+'px';
				animate(imgs[current],{left:-imgWidth});
				animate(imgs[index],{left:0});
			}
			else if(index<current){
				//left->right
				imgs[index].style.left=-imgWidth+'px';
				animate(imgs[current],{left:imgWidth});
				animate(imgs[index],{left:0});
			}
			current=next=index;
		}
	})



	function move(){
		next++;
		if(next==imgs.length){//为了下标不越界
			next=0;
		}

		//按钮
		btns[next].className='hot';
		btns[current].className='';


		//就位next left:with
		imgs[next].style.left=imgWidth+'px';
		//console.log(imgs[next])
		//动画
		animate(imgs[current],{left:-imgWidth});
		animate(imgs[next],{left:0},function(){flag=true});
		current=next;
	}

	function moveL(){
		next--;
		if(next<0){//为了下标不越界
			next=imgs.length-1;
		}

		//按钮
		btns[next].className='hot';
		btns[current].className='';


		//就位next left:with
		imgs[next].style.left=-imgWidth+'px';
		//console.log(imgs[next])
		//动画
		animate(imgs[current],{left:imgWidth});
		animate(imgs[next],{left:0},function(){flag=true});
		current=next;
	}
	left.onclick=function(){
		if(!flag){
			return;
		}
		flag=false;
		moveL();
	}
	right.onclick=function(){
		if(flag){
			flag=false;
			move();
		}
		
	}


	

	//按需加载图片
	let ch=window.innerHeight;//获取浏览器的高度

	//console.log(tops);
	let floors=document.querySelectorAll('.floor');
	//console.log(floors);
	let arr=[];
	window.onscroll=function(){
		let tops=document.body.scrollTop;
		for(let i=0;i<floors.length;i++){
			arr.push(floors[i].offsetTop);
		}
		for(let i=0;i<arr.length;i++){
			if(tops+ch>arr[i]+220){
				let imgs2=floors[i].getElementsByTagName('img');
				//console.log(imgs2)
				for(let j=0;j<imgs2.length;j++){
					imgs2[j].src=imgs2[j].title;
				}
			}
		}

	}





	//明星单品 为你推荐
	let dp1=$('.dp')[0];
	lunbo(dp1,5)

	let dp2=$('.dp')[1];
	lunbo(dp2,5)





		//搭配
		let section=document.querySelector('.section');
		let change=document.querySelectorAll('.change',section);
		let show=document.querySelectorAll('.show',section);
		// console.log(show);
		for(let i=0;i<change.length;i++){
			change[i].onmouseenter=function(){
				show[i].style.zIndex='100';
				change[i].className='border';
				change[i].style.color='#FF6700'
			}
			change[i].onmouseleave=function(){
				show[i].style.zIndex='100';
				change[i].style.color=''
				change[i].className='';
			}
			
		}




		//内容
		



		let nrShows=document.querySelectorAll('.nrshow');
		for(let i=0;i<nrShows.length;i++){
			lunbo(nrShows[i],1);
		}

}

