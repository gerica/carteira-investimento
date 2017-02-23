import { AuthGuard } from './shared/common/auth.guard';
import { PrivadoRoutes } from './privado/privado.routing';
import { PublicoRoutes } from './publico/publico.routing';
import { FundamentalistaRoutes } from './publico/fundamentalista/fundamentalista.routing';
import { LoginRoutes } from './login/login.routing';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    ...PublicoRoutes,
    ...PrivadoRoutes,
    ...LoginRoutes,
    { path: '**', redirectTo: '', pathMatch: 'full' },

];

export const routing = RouterModule.forRoot(APP_ROUTES);