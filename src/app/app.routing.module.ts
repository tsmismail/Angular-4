import { ModuleWithProviders } from '@angular/core';
import { RouterModule} from '@angular/router';
import { homeComponent } from './home/home.component';
import {loginComponent} from './login/login.component';
import {pageNotFoundComponent} from './pageNotFound/pageNotFound.component';

export const AppRoutingModule :ModuleWithProviders = RouterModule.forRoot( [
    {path:'', component:homeComponent},
    {path:'login', component:loginComponent},
    {path:'userDashboard', loadChildren:'app/user/user.module#UserModule'},
    {path:'adminDashboard', loadChildren:'app/admin/admin.module#adminModule'},
    {path:'**', component:pageNotFoundComponent}]);

