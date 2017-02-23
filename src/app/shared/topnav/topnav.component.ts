import { Auth0Service } from './../service/auth0.service';
import { AuthService } from './../service/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'invet-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
  @Input() isAuthenticated: boolean;
  @Output() toggleMenuEmitter = new EventEmitter();
  profile: any;

  constructor(private auth0Service: Auth0Service,
    private router: Router) {
  }

  ngOnInit() {
    this.profile = JSON.parse(localStorage.getItem('_profile'));
  }

  onChangeVisibility(): void {
    this.toggleMenuEmitter.emit();
  }

  login(): void {
    this.auth0Service.login();
  }

  onLogout(): void {
    this.auth0Service.logout();
    localStorage.removeItem('_profile');
    this.router.navigate(['publico']);
  }

}
