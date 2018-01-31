import { Component, OnInit } from '@angular/core';
import {Carousel} from '../carsouel/carousel.component';
import {Slide} from '../carsouel/slide.component';
import {MyhttpService} from '../service/service.component';


@Component({
    selector: 'mynav',
    templateUrl: './nav.component.html',
    styleUrls:['assets/css/nav.css']
})

export class NavComponent implements OnInit {

    navImg:Array<any>=[];

     //图片之间轮播的间隔时间
    private NextPhotoInterval: number = 2000;
    //是否要禁用循环播放
    private noLoopSlides: boolean = false;
    //Photos
    private slides: Array<any> = [];

    constructor(private myhttp:MyhttpService) { }

    ngOnInit() {
        this.myhttp.sendRequest("http://localhost/hddata/nav.php").subscribe((result:any)=>{
            this.navImg=result;
            //动态加载轮播图片
            for(var i=0;i<this.navImg.length;i++){
                this.slides.push({image:this.navImg[i].simg});
            }    
        });        
            
        }
    }



 

   
