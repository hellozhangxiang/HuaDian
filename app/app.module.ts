import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app.route';
import {HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';

import {HeaderComponent} from './utility/header/header.component';
import {FooterComponent} from './utility/footer/footer.component';
import {NotFoundComponent} from './utility/notfound/notfound.component';
import {NavComponent} from './utility/nav/nav.component';
import {IndexComponent} from './index/index.component';
import {AboutUsComponent} from './aboutUs/about_us.component';
import {ProductComponent} from './products/products.component';
import {RecruitmentComponent} from './recruitment/recruitment.component';
import {ContactComponent} from './contact/contact.component';
import {ProjectComponent} from './projects/projects.component';
import {NewsComponent} from './news/news.component';
import {Carousel} from './utility/carsouel/carousel.component';
import {Slide} from './utility/carsouel/slide.component';
import {MyhttpService} from './utility/service/service.component';
import {MyDirective} from './index/directive';



@NgModule({
 imports:      [HttpModule,AppRoutingModule,FormsModule,BrowserModule ],
  providers:[MyhttpService],
  declarations: [
    NotFoundComponent,
    NewsComponent,
    ProjectComponent,
    ContactComponent,
    RecruitmentComponent,
    MyDirective,
    Slide,
    Carousel,
    ProductComponent,
    AboutUsComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    IndexComponent,
    AppComponent
   
     ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }