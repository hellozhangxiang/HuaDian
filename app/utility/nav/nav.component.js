"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var service_component_1 = require('../service/service.component');
var NavComponent = (function () {
    function NavComponent(myhttp) {
        this.myhttp = myhttp;
        this.navImg = [];
        //图片之间轮播的间隔时间
        this.NextPhotoInterval = 2000;
        //是否要禁用循环播放
        this.noLoopSlides = false;
        //Photos
        this.slides = [];
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myhttp.sendRequest("http://localhost/hddata/nav.php").subscribe(function (result) {
            _this.navImg = result;
            //动态加载轮播图片
            for (var i = 0; i < _this.navImg.length; i++) {
                _this.slides.push({ image: _this.navImg[i].simg });
            }
        });
    };
    NavComponent = __decorate([
        core_1.Component({
            selector: 'mynav',
            templateUrl: './nav.component.html',
            styleUrls: ['assets/css/nav.css']
        }), 
        __metadata('design:paramtypes', [service_component_1.MyhttpService])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map