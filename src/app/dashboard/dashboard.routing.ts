import { AuthGuard } from './../shared/common/auth.guard';
import { PublicoRoutes } from './../publico/publico.routing';
import { FundamentalistaRoutes } from './../publico/fundamentalista/fundamentalista.routing';
import { DashboardComponent } from './dashboard.component';
import { Route } from '@angular/router';

export const DashboardRoutes: Route[] = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            ...PublicoRoutes
        ]
    }
];
