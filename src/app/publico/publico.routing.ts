import { HomeRoutes } from './home/home.routing';
import { PublicoComponent } from './publico.component';
import { FundamentalistaRoutes } from './../publico/fundamentalista/fundamentalista.routing';

import { Route } from '@angular/router';

export const PublicoRoutes: Route[] = [
    {
        path: '',
        component: PublicoComponent,
        children: [
            ...FundamentalistaRoutes,
            ...HomeRoutes
        ]

    }
];
