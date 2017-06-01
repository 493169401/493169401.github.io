/**
 * Created by Administrator on 2017/5/16.
 */
//方法
/* function render(obj){
 //song显示到页面
 //author
 //audio
 //遍历每一句歌词
 //歌词先清空在显示到页面

 }*/
//获取页面中的audio
// 页面初始化：歌名 歌手 歌词（数组（对象））  audio(src)     data base第0个*/
// 获取页面中的audio, song,author

window.onload=function(){

    let audio=document.querySelector('audio'), song=document.querySelector('.song'),
        author=document.querySelector('.author'),lyrics=document.querySelector('.lyrics'),
        floor=document.querySelector('.floor');
        img=document.querySelector('img',floor);info=document.querySelector('.info'),
        playBtn = document.querySelector('.play'),
        console.log(playBtn);
        cTime=document.querySelector('.cTime'),
        dTime=document.querySelector('.dTime'),
        last=document.querySelector('.last'),
        next=document.querySelector('.next'),
        small=document.querySelector('.small');
        console.log(small);
        let index=0;


    //初始化
   render(database[0]);

    // 访问第一首歌 歌词 第一句


    //事件
    //play按钮播放暂停，并且按钮样式切换
    playBtn.onclick=function( ){
        if(audio.paused){
            audio.play();
            playBtn.classList.toggle('icon-2');
        }else{
            audio.pause();
            playBtn.classList.toggle('icon-2');
        }
    }


    //上一首
    last.onclick=function(){
        index--;
        if(index<0){
            index=database.length;
        }
        playBtn.classList.toggle('icon-2');
        render(database[index]);
    }
    //下一首
    next.onclick=function(){
        //index
        index++;
        if(index>database.length){
            index=0;
        }
        playBtn.classList.toggle('icon-2');
        render(database[index]);
    }


    //歌词
    //格式化时间
    let i=x=0;
    audio.ontimeupdate=function(){
      let current=format(audio.currentTime);
      let duration=format(audio.duration);
      let string='';
      cTime.innerText=current;
      dTime.innerText=duration;
        small.style.width=audio.currentTime/audio.duration*100+'%';
      lyrics.innerHTML='';
      database[index]['lyrics'].forEach(function(value,index){
          if(value.time==current){
              x=i=index;
          }
      })

        if(i<2){
          i=0;
        }else{
            i=x-2;
        }
        console.log(i,x);

        for(let j=i;j<database[index]['lyrics'].length;j++){
            if(j==x){
                string+=`<li class="hot">
                            ${database[index]['lyrics'][j]['lyric']}
                        </li>`;
            }else{
                string+=`<li>
                             ${database[index]['lyrics'][j]['lyric']}
                        </li>`
            }
        }
        lyrics.innerHTML=string;                    
    }

    //格式化时间
    function format(time){
        let m=Math.floor(time/60)>10?Math.floor(time/60):'0'+Math.floor(time/60);
        let s=Math.floor(time%60)>10?Math.floor(time%60):'0'+Math.floor(time%60);
        return `${m}:${s}`;
    }
    
    function render(obj) {
        let string = '';
        song.innerText = obj.songs;
        author.innerText = obj.name;
        audio.src = obj.src;

        info.innerHTML = `${obj.songs}-${obj.name}`;
        img.src = obj.photo;
        cTime.innerText = '00:00';
        dTime.innerText = obj.alltime;

        obj.lyrics .forEach(function (value, index) {
            string += `<li>${value.lyric}</li>`;
        });
        lyrics.innerHTML = '';
        lyrics.innerHTML = string;
    }



}