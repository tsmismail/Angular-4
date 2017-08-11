import { ModuleWithProviders } from '@angular/core';
import { RouterModule} from '@angular/router';
import { UserComponent } from './user.component'

export const UserRoutes:ModuleWithProviders = RouterModule.forChild([
    {path:'userDashboard', component:UserComponent}
]);
