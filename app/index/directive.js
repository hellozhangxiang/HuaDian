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
var MyDirective = (function () {
    function MyDirective(el) {
        this.el = el;
        this.myLength = 0;
        console.log("custom directive is called" + this.el.nativeElement.style.width);
    }
    MyDirective.prototype.ngOnInit = function () {
        var _this = this;
        // 获取图片BOX设置产品展示轮播
        this.el.nativeElement.style.position = "relative";
        setInterval(function () {
            _this.myLength--;
            if (_this.myLength >= -170) {
                _this.el.nativeElement.style.transition = "all .8s linear";
            }
            else {
                _this.el.nativeElement.style.transition = "";
                _this.myLength = 0;
            }
            _this.el.nativeElement.style.left = _this.myLength + "%";
        }, 800);
    };
    MyDirective = __decorate([
        core_1.Directive({ selector: '[mydirective]' }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MyDirective);
    return MyDirective;
}());
exports.MyDirective = MyDirective;
//# sourceMappingURL=directive.js.map