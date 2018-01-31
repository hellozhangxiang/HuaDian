import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'myheader',
    templateUrl: './header.component.html',
    styleUrls:['assets/css/header.css','assets/css/nav.css']
})

export class HeaderComponent implements OnInit {
    constructor(private myRouter:Router) { }

    ngOnInit() { }

    jumpToContact(){
        this.myRouter.navigateByUrl("contact");
     }
     jumpToAbout(){
        this.myRouter.navigateByUrl("about");
     }
     jumpToProduct(){
        this.myRouter.navigateByUrl("product");
     }
     jumpToRecruitment(){
        this.myRouter.navigateByUrl("recruitment");
     }
     jumpToIndex(){
        this.myRouter.navigateByUrl("index");
     }
     jumpToProject(){
        this.myRouter.navigateByUrl("project");
     }
     jumpToNews(){
        this.myRouter.navigateByUrl("news");
     }
     jumpToNotFound(){
        this.myRouter.navigateByUrl("404");
     }
}