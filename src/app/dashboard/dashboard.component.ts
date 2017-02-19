import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { AuthService } from './../shared/service/auth.service';

@Component({
  selector: 'invet-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  isClassClose: boolean = true;
  private _isAuthenticated = false;
  private sub: Subscription;

  constructor(private authService: AuthService,
    private route: Router) {
  }


  ngOnInit() {
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

  onToogleMenu(): void {
    if (this.isAuth()) {
      this.isClassClose = !this.isClassClose;
    }
    this.isClassClose = this.isClassClose;
  }

}