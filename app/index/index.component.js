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
var service_component_1 = require('../utility/service/service.component');
var IndexComponent = (function () {
    function IndexComponent(myhttp) {
        this.myhttp = myhttp;
        this.myProductImg = [];
        this.myHonorImg = [];
        this.myCustomerImg = [];
        this.myDynamicImg = [];
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myhttp.sendRequest("http://localhost/hddata/index.php").subscribe(function (result) {
            //动态请求到的图片保存在本地变量中
            _this.myProductImg = result.product;
            _this.myHonorImg = result.honor;
            _this.myCustomerImg = result.customer;
            _this.myDynamicImg = result.dynamic;
        });
    };
    IndexComponent = __decorate([
        core_1.Component({
            selector: 'index',
            templateUrl: './index.component.html',
            styleUrls: ['assets/css/index.css']
        }), 
        __metadata('design:paramtypes', [service_component_1.MyhttpService])
    ], IndexComponent);
    return IndexComponent;
}());
exports.IndexComponent = IndexComponent;
//# sourceMappingURL=index.component.js.map