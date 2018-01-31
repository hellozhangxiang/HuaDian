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
var router_1 = require('@angular/router');
var HeaderComponent = (function () {
    function HeaderComponent(myRouter) {
        this.myRouter = myRouter;
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.jumpToContact = function () {
        this.myRouter.navigateByUrl("contact");
    };
    HeaderComponent.prototype.jumpToAbout = function () {
        this.myRouter.navigateByUrl("about");
    };
    HeaderComponent.prototype.jumpToProduct = function () {
        this.myRouter.navigateByUrl("product");
    };
    HeaderComponent.prototype.jumpToRecruitment = function () {
        this.myRouter.navigateByUrl("recruitment");
    };
    HeaderComponent.prototype.jumpToIndex = function () {
        this.myRouter.navigateByUrl("index");
    };
    HeaderComponent.prototype.jumpToProject = function () {
        this.myRouter.navigateByUrl("project");
    };
    HeaderComponent.prototype.jumpToNews = function () {
        this.myRouter.navigateByUrl("news");
    };
    HeaderComponent.prototype.jumpToNotFound = function () {
        this.myRouter.navigateByUrl("404");
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'myheader',
            templateUrl: './header.component.html',
            styleUrls: ['assets/css/header.css', 'assets/css/nav.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map