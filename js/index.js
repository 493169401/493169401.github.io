$(function(){
    $('#dowebok').fullpage({
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4','page5'],
        afterLoad: function(anchorLink, index) {


            if (index == 2) {

            }
            if (index == 3) {
                function percentage(obj,ctx,num,n=0){
                    ctx.lineWidth=10;
                    ctx.strokeStyle="#EF4C89";
                    ctx.lineCap="round";
                    ctx.font="40px bold 宋体";
                    ctx.textAlign="center";
                    ctx.textBaseline="middle";
                    let s=setInterval(keyframe,20);
                    function keyframe(){
                        n++;
                        console.log(n,num)
                        if(n>=num){
                            clearInterval(s);
                            return;
                        }
                        else{
                            ctx.clearRect(0,0,obj.width,obj.height);
                            ctx.beginPath();
                            let anglue=(n*360/100-90)*Math.PI/180;
                            ctx.arc(obj.width/2,obj.height/2,80,-Math.PI/2,anglue,false);
                            ctx.stroke();
                            ctx.fillText(`${n}%`,obj.width/2,obj.height/2);
                        }
                    }
                }
                let canvas1=document.querySelector('.canvas1');
                let ctx1=canvas1.getContext('2d');
                percentage(canvas1,ctx1,85,n=0);

                let canvas2=document.querySelector('.canvas2');
                let ctx2=canvas2.getContext('2d');
                percentage(canvas2,ctx2,80,n=0);

                let canvas3=document.querySelector('.canvas3');
                let ctx3=canvas3.getContext('2d');
                percentage(canvas3,ctx3,95,n=0);

                let canvas4=document.querySelector('.canvas4');
                let ctx4=canvas4.getContext('2d');
                percentage(canvas4,ctx4,93,n=0);

                let canvas5=document.querySelector('.canvas5');
                let ctx5=canvas5.getContext('2d');
                percentage(canvas5,ctx5,85,n=0);


                let canvas6=document.querySelector('.canvas6');
                let ctx6=canvas6.getContext('2d');
                percentage(canvas6,ctx6,74,n=0);
            }
            if (index == 4) {

            }
        },
            onLeave: function(index, direction){
                if(index == '2'){

                }
                if(index == '3'){

                }
                if(index == '4'){

                }
            }
    });
    // setInterval(function(){
    //     $.fn.fullpage.moveSectionDown();
    // }, 5000);
})



