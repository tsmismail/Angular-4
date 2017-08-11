import { ModuleWithProviders } from '@angular/core';
import { RouterModule} from '@angular/router';

import { adminComponent } from './admin.component';

export const adminRouting: ModuleWithProviders = RouterModule.forChild([
    {path:'adminDashboard', component: adminComponent}
]);
