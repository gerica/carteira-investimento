import { Auth0Service } from './../service/auth0.service';
import { AuthService } from './../service/auth.service';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Injectable()
export class AuthGuard implements CanActivate {

  private temServidor = false;

  constructor(private auth0Service: Auth0Service,
    private router: Router) {

  }

  canActivate() {
    if (this.auth0Service.authenticated()) {
      return true;
    } else {
      this.router.navigate(['publico']);
      return false;
    }
  }


}
