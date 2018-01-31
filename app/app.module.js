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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_route_1 = require('./app.route');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var header_component_1 = require('./utility/header/header.component');
var footer_component_1 = require('./utility/footer/footer.component');
var notfound_component_1 = require('./utility/notfound/notfound.component');
var nav_component_1 = require('./utility/nav/nav.component');
var index_component_1 = require('./index/index.component');
var about_us_component_1 = require('./aboutUs/about_us.component');
var products_component_1 = require('./products/products.component');
var recruitment_component_1 = require('./recruitment/recruitment.component');
var contact_component_1 = require('./contact/contact.component');
var projects_component_1 = require('./projects/projects.component');
var news_component_1 = require('./news/news.component');
var carousel_component_1 = require('./utility/carsouel/carousel.component');
var slide_component_1 = require('./utility/carsouel/slide.component');
var service_component_1 = require('./utility/service/service.component');
var directive_1 = require('./index/directive');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [http_1.HttpModule, app_route_1.AppRoutingModule, forms_1.FormsModule, platform_browser_1.BrowserModule],
            providers: [service_component_1.MyhttpService],
            declarations: [
                notfound_component_1.NotFoundComponent,
                news_component_1.NewsComponent,
                projects_component_1.ProjectComponent,
                contact_component_1.ContactComponent,
                recruitment_component_1.RecruitmentComponent,
                directive_1.MyDirective,
                slide_component_1.Slide,
                carousel_component_1.Carousel,
                products_component_1.ProductComponent,
                about_us_component_1.AboutUsComponent,
                nav_component_1.NavComponent,
                footer_component_1.FooterComponent,
                header_component_1.HeaderComponent,
                index_component_1.IndexComponent,
                app_component_1.AppComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map