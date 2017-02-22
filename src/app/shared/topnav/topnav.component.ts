import { AuthService } from './../service/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'invet-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent {
  @Input() isAuthenticated: boolean;

  @Output() toggleMenuEmitter = new EventEmitter();

  constructor(private authService: AuthService,
    private route: Router) {
  }

  onChangeVisibility(): void {
    this.toggleMenuEmitter.emit();
  }

  onLogout(): void {
    this.authService.logout()
      .then(() => this.route.navigate([''])
      );
  }

}
