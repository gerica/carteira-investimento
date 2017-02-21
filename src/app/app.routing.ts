import { FundamentalistaRoutes } from './publico/fundamentalista/fundamentalista.routing';
import { DashboardRoutes } from './dashboard/dashboard.routing';
import { LoginRoutes } from './login/login.routing';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    ...DashboardRoutes,
    ...LoginRoutes,
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);