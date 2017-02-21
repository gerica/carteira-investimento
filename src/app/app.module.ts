import { AuthService } from './shared/service/auth.service';
import { DashboardModule } from './dashboard/dashborad.module';
import { LoginModule } from './login/login.module';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { AngularFireModule } from 'angularfire2';
import { FundamentalistaComponent } from './publico/fundamentalista/fundamentalista.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDhNUrO6kuDGg0jVJucTY0UWJQ49vHv10Q",
  authDomain: "carteira-investimento.firebaseapp.com",
  databaseURL: "https://carteira-investimento.firebaseio.com",
  storageBucket: "carteira-investimento.appspot.com",
  messagingSenderId: "810679544393"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    LoginModule,
    DashboardModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
