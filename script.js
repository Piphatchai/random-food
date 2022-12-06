// RANDOM 1
let run = document.getElementById('run-button');
let output = document.getElementById ('output')
let stopButton = document.getElementById('stop-button')
let nickname = ['กระเพาถาด','ก๋วยเตี๋ยวเรือ','ก๋วยเตี๋ยวเป็ด','ก๋วยเตี๋ยวไก่','ข้าวมันไก่','ข้าวขาหมู','กระเพราะขาหมู','ผัดซี่อิ้ว','สุกี้'
,'เป็ดทอดกระเที่ยม',"กระเพราไข่เยี่ยมหมา",'กระเพราหมูกรอบ','หมูกระเทียม','ก๋วยเตี๋ยวต้มยำ','หอยทอด','ผัดไทย','ข้าวไข่ข้น','หมูกรอบผัดพริกเกลือ','ราดหน้า','ก็วยเตี้ยวคั่วไก่'];

    run.addEventListener('click',()=>{
        stopButton=setInterval(()=>{
            let n = nickname.length;
            let name = Math.floor(Math.random()*n);
            let showName = nickname[name]
            output.innerHTML = showName ;
        },1)   
    });
 stopButton.addEventListener('click',()=>{
    clearInterval(stopButton);
 })

// RANDOM 2 
 let runWater = document.getElementById('water-button');
 let outputWater = document.getElementById ('outputWater')
 let stopButtonWater = document.getElementById('stopWater-button')
 let water = ["โกโก้","นมเย็น",'นมสด','ชาชัก','โอวันติน','ลาเต้','มอลค่า','คาปุชิโน่','กระเจี๊ยบ','ชาอู่หลง','ชาเชียว']
     runWater.addEventListener('click',()=>{
         stopButtonWater=setInterval(()=>{
             let n = water.length;
             let name = Math.floor(Math.random()*n);
             let showName = water[name]
             outputWater.innerHTML = showName ;
         },1)   
     });
  stopButtonWater.addEventListener('click',()=>{
     clearInterval(stopButtonWater);
  }); 