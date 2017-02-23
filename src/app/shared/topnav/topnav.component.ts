import { Auth0Service } from './../service/auth0.service';
import { AuthService } from './../service/auth.service';
import { Router } from '@angular/router';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
  Input,
  ElementRef,
  Inject
} from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import * as jQuery from 'jquery';

@Component({
  selector: 'invet-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
  @Input() isAuthenticated: boolean;  
  profile: any;

  constructor(private auth0Service: Auth0Service,
    private router: Router,
    @Inject(ElementRef) private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.profile = JSON.parse(localStorage.getItem('_profile'));
  }

  onChangeVisibility(): void {    
    if (jQuery('#sidebar > ul').is(":visible") === true) {
      jQuery('#main-content').css({
        'margin-left': '0px'
      });
      jQuery('#sidebar').css({
        'margin-left': '-180px'
      });
      jQuery('#sidebar > ul').hide();
      jQuery("#container").addClass("sidebar-closed");
    } else {
      jQuery('#main-content').css({
        'margin-left': '180px'
      });

      jQuery('#sidebar > ul').show();
      jQuery('#sidebar').css({
        'margin-left': '0'
      });
      jQuery("#container").removeClass("sidebar-closed");
    }
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
