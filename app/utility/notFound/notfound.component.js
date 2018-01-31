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
var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.rn = function (min, max) {
        var n = Math.random() * (max - min) + min;
        return Math.floor(n);
    };
    NotFoundComponent.prototype.rc = function (min, max) {
        var r = this.rn(min, max);
        var g = this.rn(min, max);
        var b = this.rn(min, max);
        return "rgb(" + r + "," + g + "," + b + ")";
    };
    NotFoundComponent.prototype.showCircle = function () {
    };
    NotFoundComponent.prototype.numRand = function () {
        return Math.random();
    };
    NotFoundComponent.prototype.func = function () { };
    NotFoundComponent.prototype.ngOnInit = function () {
        var s2 = document.getElementById("s2");
        for (var i = 0; i < 30; i++) {
            var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            c.setAttribute("r", this.rn(20, 100));
            c.setAttribute("cx", this.rn(0, 2000));
            c.setAttribute("cy", this.rn(0, 1000));
            c.setAttribute("fill", this.rc(0, 255));
            c.setAttribute("fill-opacity", Math.random());
            s2.appendChild(c);
            //为当前圆绑点击事件
            c.onclick = function () {
                //为防止当前圆形再次被点击，应取消其事件监听
                this.onclick = null;
                var that = this;
                //启动定时器让当前圆变大，变淡，最后消失
                var timer = setInterval(function () {
                    //变大
                    var r = that.getAttribute("r");
                    r *= 1.05;
                    that.setAttribute("r", r);
                    //变淡
                    var p = that.getAttribute("fill-opacity");
                    p *= 0.9;
                    that.setAttribute("fill-opacity", p);
                    if (p < 0.0001) {
                        clearInterval(timer);
                        s2.removeChild(that); //删除元素
                    }
                }, 50);
            };
        }
    };
    NotFoundComponent = __decorate([
        core_1.Component({
            selector: 'notFound',
            templateUrl: './notfound.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
exports.NotFoundComponent = NotFoundComponent;
//# sourceMappingURL=notfound.component.js.map