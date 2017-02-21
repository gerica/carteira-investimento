import { PublicoComponent } from './publico.component';
import { FundamentalistaRoutes } from './../publico/fundamentalista/fundamentalista.routing';

import { Route } from '@angular/router';

export const PublicoRoutes: Route[] = [
    {
        path: 'publico',
        component: PublicoComponent

    }
];
