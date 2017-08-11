import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule} from './app.routing.module'
import { FormsModule } from '@angular/forms'

//custom modules
import { adminModule } from './admin/admin.module';
import { UserModule } from './user/user.module'

import { AppComponent } from './app.component';
import {loginComponent} from './login/login.component';
import {pageNotFoundComponent} from './pageNotFound/pageNotFound.component';
import { homeComponent } from './home/home.component';


import { UserService } from '../services/User.Service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    adminModule,
    UserModule
  ],
  declarations: [
    AppComponent,
    homeComponent,
    loginComponent,
    pageNotFoundComponent
  ],
  providers:[ UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
