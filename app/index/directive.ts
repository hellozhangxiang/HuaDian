import { Directive,ElementRef ,OnInit } from '@angular/core';

@Directive({ selector: '[mydirective]' })
export class MyDirective {
    myLength:number=0;
    constructor(private el:ElementRef) { 
        console.log("custom directive is called"+this.el.nativeElement.style.width);
    }

    ngOnInit(){
      // 获取图片BOX设置产品展示轮播
      this.el.nativeElement.style.position="relative";
      setInterval(()=>{
          this.myLength--;
        if(this.myLength>=-170){
            this.el.nativeElement.style.transition="all .8s linear";
        }else{
            this.el.nativeElement.style.transition="";
            this.myLength=0;
        }
       this.el.nativeElement.style.left=this.myLength+"%";
    },800);
       
    }

    
}