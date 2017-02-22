import { HomeRoutes } from './home/home.routing';
import { PrivadoComponent } from './privado.component';
import { AuthGuard } from './../shared/common/auth.guard';
import { PublicoRoutes } from './../publico/publico.routing';
import { FundamentalistaRoutes } from './../publico/fundamentalista/fundamentalista.routing';
import { Route } from '@angular/router';

export const PrivadoRoutes: Route[] = [
    {
        path: 'privado',
        component: PrivadoComponent,
        children: [
            ...HomeRoutes,
            ...FundamentalistaRoutes
        ],
        canActivate: [AuthGuard]
    }
];
