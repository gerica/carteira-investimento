import { PerfilRoutes } from './perfil/perfil.routing';
import { AcaoRoutes } from './acao/acao.routing';
import { SaidaRoutes } from './carteira/saida/saida.routing';
import { EntradaRoutes } from './carteira/entrada/entrada.routing';
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
            ...TabelaMagicaRoutes,
            ...EntradaRoutes,
            ...SaidaRoutes,
            ...AcaoRoutes,
            ...PerfilRoutes
        ],
        canActivate: [AuthGuard]
    }
];
