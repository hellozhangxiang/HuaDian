import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {IndexComponent} from './index/index.component';
import {AboutUsComponent} from './aboutUs/about_us.component';
import {ProductComponent} from './products/products.component';
import {RecruitmentComponent} from './recruitment/recruitment.component';
import {ContactComponent} from './contact/contact.component';
import {ProjectComponent} from './projects/projects.component';
import {NewsComponent} from './news/news.component';
import {NotFoundComponent} from './utility/notfound/notfound.component';



const routes: Routes = [
{path:'',redirectTo:'/index',pathMatch:'full'},
{path:'index',component:IndexComponent},
{path:'about',component:AboutUsComponent},
{path:'product',component:ProductComponent},
{path:'contact',component:ContactComponent},
{path:'recruitment',component:RecruitmentComponent},
{path:'project',component:ProjectComponent},
{path:'news',component:NewsComponent},
{path:'404',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }