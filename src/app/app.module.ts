import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import{HttpClientModule} from '@angular/common/http';
import{ApiservicesService} from './service/apiservices.service';
import { TopnewsComponent } from './topnews/topnews.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
