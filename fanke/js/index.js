/**
 * Created by Administrator on 2017/5/25.
 */
$(function(){

    //下拉
    let items=$('.item');
    // console.log(items);
    let erji=$('.erji');
    // console.log(erji)
    /*items.hover(function(){
        $(this).find('.erji').stop();
        $(this).find('.erji').slideDown();
    },
    function(){
        $(this).find('.erji').stop();
        $(this).find('.erji').slideUp();
    })*/
    items.hover(function(){
        $(this).find('.erji').stop();
        $(this).find('.erji').slideToggle();
    })


    //轮播
    //获取
    let wheel=$('.wheel');
    let imgbox=$('.imgbox');
    let imgs=document.querySelectorAll('.wheelimg');
    let imgwidth=imgbox.width();
    let left=$('.wheel>.left');
    let right=$('.wheel>.right');
    let btns=$('.btn>li')
    console.log(btns)
    let flag=true;

    //状态初始化
    let current=0,next=0;
    for(let i=0;i<imgs.length;i++){
        if(i==0){
            continue;
        }
        imgs[i].style.left=imgwidth+'px';
    }

    //移入到某一区域
    let t=setInterval(move,4000);
    wheel.onmouseenter=function(){
        clearInterval(t);
    }
    wheel.onmouseleave=function(){
        t=setInterval(move,4000)
    }

    //按钮点击操作
    for(var i=0;i<btns.length;i++) {
        //let 保存每一个值
        //2添加自定义属性
        btns[i].index = i;
        btns[i].onclick = function () {
            //alert(this.index);
            //current this.index(next);
            if (this.index == current) {
                return;
            }
            btns[current].className = '';
            this.className = 'hot';
            if (this.index > current) {
                //右->左
                imgs[this.index].style.left = imgwidth + 'px';
                animate(imgs[current], {left: -imgwidth});
                animate(imgs[this.index], {left: 0});
            } else if (this.index < current) {
                //左->右
                imgs[this.index].style.left = -imgwidth + 'px';
                animate(imgs[current], {left: imgwidth});
                animate(imgs[this.index], {left: 0});
            }
            current = next = this.index;
        }

    }

    function move(){
        next++;
        if(next==imgs.length){//为了下标不越界
            next=0;
        }

        //按钮
        btns[next].className='hot';
        btns[current].className='';


        //就位next left:with
        imgs[next].style.left=imgwidth+'px';
        //console.log(imgs[next])
        //动画
        animate(imgs[current],{left:-imgwidth});
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
        imgs[next].style.left=-imgwidth+'px';
        //console.log(imgs[next])
        //动画
        animate(imgs[current],{left:imgwidth});
        animate(imgs[next],{left:0},function(){flag=true});
        current=next;
    }
    left.onclick=function(){
        console(1)
        if(!flag){
            return;
        }
        flag=false;
        moveL();
    }
    right.onclick=function(){
        alert(2)
        if(flag){
            flag=false;
            move();
        }

    }
})