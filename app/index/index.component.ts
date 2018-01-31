import { Component, OnInit } from '@angular/core';
import {MyhttpService} from '../utility/service/service.component';



@Component({
    selector: 'index',
    templateUrl: './index.component.html',
    styleUrls:['assets/css/index.css']
})

export class IndexComponent implements OnInit {
    myProductImg:Array<any>=[];
    myHonorImg:Array<any>=[];
    myCustomerImg:Array<any>=[];
    myDynamicImg:Array<any>=[];
    constructor(private myhttp:MyhttpService) { }

    ngOnInit() {
        this.myhttp.sendRequest("http://localhost/hddata/index.php").subscribe((result:any)=>{
           //动态请求到的图片保存在本地变量中
            this.myProductImg=result.product;
            this.myHonorImg=result.honor;
            this.myCustomerImg=result.customer;
            this.myDynamicImg=result.dynamic;
        });
     }
     
}