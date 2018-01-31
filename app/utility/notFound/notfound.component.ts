import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'notFound',
    templateUrl: './notfound.component.html'
})

export class NotFoundComponent implements OnInit {
    constructor() { }

     rn(min:number,max:number){
          let n = Math.random()*(max-min)+min;
          return Math.floor(n);
       }
    rc(min:number,max:number){
          let r = this.rn(min,max);
          let g = this.rn(min,max);
          let b = this.rn(min,max);
          return `rgb(${r},${g},${b})`;
       }
    showCircle(){


    }
    numRand(){
        return Math.random();
    }
    myRandom(){
        return Math.random();
    }
    func(){}
    ngOnInit() {    
    var s2=document.getElementById("s2");
       for(let i=0;i<30;i++){
         let c = document.createElementNS(
             "http://www.w3.org/2000/svg",
             "circle");
         c.setAttribute("r",String(this.rn(20,100)));
         c.setAttribute("cx",String(this.rn(0,2000)));
         c.setAttribute("cy",String(this.rn(0,1000)));
         c.setAttribute("fill",this.rc(0,255));
         c.setAttribute("fill-opacity",String(this.myRandom()));
         //为当前圆绑点击事件
          c.onclick = function(){
           //为防止当前圆形再次被点击，应取消其事件监听
            this.onclick = null;
            let that = this;
           //启动定时器让当前圆变大，变淡，最后消失
          let timer = setInterval(function(){
             //变大
             let r = that.getAttribute("r");
             this.r *= 1.05;
             that.setAttribute("r",r);
             //变淡
             let p = that.getAttribute("fill-opacity");
             this.p *= 0.9;
             that.setAttribute("fill-opacity",p);
             if(this.p<0.0001){
               clearInterval(timer);
               s2.removeChild(that);//删除元素
              }
            },50);

          }
        }
     }
   
}