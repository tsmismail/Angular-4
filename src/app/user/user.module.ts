import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutes } from './user.routing.module';

import { UserComponent } from './user.component'

@NgModule({
    imports:[
        CommonModule,
        UserRoutes
    ],
    declarations:[
        UserComponent
    ]
})

export class UserModule{}
