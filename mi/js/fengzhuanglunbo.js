/*
* @Author: Administrator
* @Date:   2017-05-06 15:45:32
* @Last Modified by:   Administrator
* @Last Modified time: 2017-05-13 10:42:37
*/

'use strict';

$(function(){

	let win=$('.win');

	Array.from(win).forEach(function(value,index){
		lunbo(value,index+1)
	})
})
function lunbo(obj,num){
	let imgBox=$('.imgBox',obj)[0];
	let lis=$('li',imgBox);
	let btnL=$('.btnL')[0];
	let btnR=$('.btnR')[0];
	let flag=true;
	let widths=parseInt(getStyle(lis[0],'width')+getStyle(lis[0],'marginRight'));
	let t; 
	t=setInterval(move,2000);
			function move(){
				animate(imgBox,{left:-num*widths},function(){
					for(let i=0;i<2;i++){
						let first=getFirst(imgBox);
						imgBox.appendChild(first);
						imgBox.style.left=0;
						flag=true;
					}
					
				})
			}

			function moveR(){
				let last=getLast(imgBox);
				let first=getFirst(imgBox);
				imgBox.insertBefore(last,first);
				imgBox.style.left=-num*widths+'px';
				animate(imgBox,{left:0},function(){	flag=true;
				})
			}


			obj.onmouseenter=function(){
				clearInterval(t);
			}
			obj.onmouseleave=function(){
				t=setInterval(move,2000)
			}

			
			btnL.onclick=function(){
				if(!flag){
					return;
				}
				flag=false;
				move();
				// alert(1);
			}
			btnR.onclick=function(){
				if(!flag){
					return;
				}
				flag=false;
				moveR();
				
			}


}




	