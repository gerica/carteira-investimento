import { UsuarioService } from './shared/service/usuario.service';
import { Auth0Service } from './shared/service/auth0.service';
import { SharedModule } from './shared/shared.module';
import { PrivadoModule } from './privado/privado.module';
import { PublicoModule } from './publico/publico.module';
import { AuthGuard } from './shared/common/auth.guard';
import { AuthService } from './shared/service/auth.service';
import { LoginModule } from './login/login.module';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
// import { AUTH_PROVIDERS } from 'angular2-jwt';
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';

export const firebaseConfig = {
  apiKey: "AIzaSyDhNUrO6kuDGg0jVJucTY0UWJQ49vHv10Q",
  authDomain: "carteira-investimento.firebaseapp.com",
  databaseURL: "https://carteira-investimento.firebaseio.com",
  storageBucket: "carteira-investimento.appspot.com",
  messagingSenderId: "810679544393"
};

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({}), http, options);
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    LoginModule,
    PublicoModule,
    PrivadoModule,
    SharedModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [AuthService,
    AuthGuard,
    Auth0Service,
    UsuarioService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
