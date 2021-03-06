import { Auth0Service } from './../service/auth0.service';
import { Router } from '@angular/router';
import { Component, OnInit, ElementRef, Inject } from '@angular/core';

import * as jQuery from 'jquery';

@Component({
  selector: 'invet-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  constructor(private auth0Service: Auth0Service,
    private router: Router,
    @Inject(ElementRef) private elementRef: ElementRef) { }

  ngOnInit() {

    jQuery(this.elementRef.nativeElement).find('#sidebar .menu').click(function () {
      var wSize = jQuery(window).width();
      if (wSize <= 768) {
        jQuery('#container').addClass('sidebar-close');
        jQuery('#sidebar > ul').hide();
      }
    });
    jQuery(this.elementRef.nativeElement).find('#sidebar .sub-menu > a').click(function () {
      var last = jQuery('.sub-menu.open', jQuery('#sidebar'));
      jQuery('.menu-arrow').removeClass('arrow_carrot-right');
      jQuery('.sub', last).slideUp(200);
      var sub = jQuery(this).next();
      if (sub.is(":visible")) {
        jQuery('.menu-arrow').addClass('arrow_carrot-right');
        sub.slideUp(200);
      } else {
        jQuery('.menu-arrow').addClass('arrow_carrot-down');
        sub.slideDown(200);
      }
      var o = (jQuery(this).offset());
      var diff = 200 - o.top;
      if (diff > 0) {
        jQuery("#sidebar").scrollTop();
      } else {
        jQuery('#sideba').scroll();
      }

      //      if(diff>0)
      //     jQuery("#sidebar").scrollTo("-="+Math.abs(diff),500);
      // else
      //     jQuery("#sidebar").scrollTo("+="+Math.abs(diff),500);
    });


    // sidebar menu toggle
    jQuery(function () {
      function responsiveView() {
        var wSize = jQuery(window).width();
        if (wSize <= 768) {
          jQuery('#container').addClass('sidebar-close');
          jQuery('#sidebar > ul').hide();
        }

        if (wSize > 768) {
          jQuery('#container').removeClass('sidebar-close');
          jQuery('#sidebar > ul').show();
        }
      }
      jQuery(window).on('load', responsiveView);
      jQuery(window).on('resize', responsiveView);
    });

  }

  onLogout(): void {
    this.auth0Service.logout();
    localStorage.removeItem('_profile');
    this.router.navigate(['publico']);
  }


}
