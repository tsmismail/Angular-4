import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { adminRouting } from './admin.routing.module';

import { adminComponent } from './admin.component';
import { adminDetailsComponent} from './adminDetails/adminDetails.component';

@NgModule({
    imports:[
        CommonModule,
        adminRouting
    ],
    declarations:[
        adminComponent,
        adminDetailsComponent
    ]
})

export class adminModule{
   constructor(){
   }
}
