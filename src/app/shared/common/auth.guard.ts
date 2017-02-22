import { AuthService } from './../service/auth.service';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Injectable()
export class AuthGuard implements CanActivate, OnDestroy {

  private temServidor = false;
  private _isAuthenticated = false;
  private sub: Subscription;

  constructor(private authService: AuthService,
    private router: Router) {

    this.sub = this.authService.getAuth().subscribe(
      authStatus => {

        if (authStatus) {
          this._isAuthenticated = true;
        } else {
          this._isAuthenticated = false;
        }
      }
    );
  }

  isAuth(): boolean {
    return this._isAuthenticated;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  canActivate() {

    // if (this.isAuth()) {

      return true;
    // }
    // this.router.navigate(['publico']);
    // return false;


  }
}
