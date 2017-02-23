import { TabelaMagicaRoutes } from './tabela-magica/tabela-magica.component.routing';
import { AxiomaRoutes } from './axioma/axioma.routing';
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
            ...AxiomaRoutes,
            ...TabelaMagicaRoutes
        ],
        canActivate: [AuthGuard]
    }
];
