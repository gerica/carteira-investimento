import { Component, OnInit, ElementRef, Inject } from '@angular/core';

import * as jQuery from 'jquery';

@Component({
  selector: 'invet-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  constructor( @Inject(ElementRef) private elementRef: ElementRef) { }

  ngOnInit() {
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
        console.log(diff);
        jQuery('#sideba').scroll();
      }

      //      if(diff>0)
      //     jQuery("#sidebar").scrollTo("-="+Math.abs(diff),500);
      // else
      //     jQuery("#sidebar").scrollTo("+="+Math.abs(diff),500);
    });
  }

}
