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
var index_component_1 = require('./index/index.component');
var about_us_component_1 = require('./aboutUs/about_us.component');
var products_component_1 = require('./products/products.component');
var recruitment_component_1 = require('./recruitment/recruitment.component');
var contact_component_1 = require('./contact/contact.component');
var projects_component_1 = require('./projects/projects.component');
var news_component_1 = require('./news/news.component');
var notfound_component_1 = require('./utility/notfound/notfound.component');
var routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component: index_component_1.IndexComponent },
    { path: 'about', component: about_us_component_1.AboutUsComponent },
    { path: 'product', component: products_component_1.ProductComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'recruitment', component: recruitment_component_1.RecruitmentComponent },
    { path: 'project', component: projects_component_1.ProjectComponent },
    { path: 'news', component: news_component_1.NewsComponent },
    { path: '404', component: notfound_component_1.NotFoundComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule],
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.route.js.map