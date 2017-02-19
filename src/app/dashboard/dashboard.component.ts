import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'invet-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isClassVisible: boolean;

  constructor() { }

  ngOnInit() {
    // jQuery(this.elementRef.nativeElement).find('#sidebar .sub-menu > a').click(function () {
    //   var last = jQuery('.sub-menu.open', jQuery('#sidebar'));
    //   jQuery('.menu-arrow').removeClass('arrow_carrot-right');
    //   jQuery('.sub', last).slideUp(200);
    //   var sub = jQuery(this).next();
    //   if (sub.is(":visible")) {
    //     jQuery('.menu-arrow').addClass('arrow_carrot-right');
    //     sub.slideUp(200);
    //   } else {
    //     jQuery('.menu-arrow').addClass('arrow_carrot-down');
    //     sub.slideDown(200);
    //   }
    //   var o = (jQuery(this).offset());
    //   var diff = 200 - o.top;
    //   // if (diff > 0)
    //   //   jQuery("#sidebar").scrollTo("-=" + Math.abs(diff), 500);
    //   // else
    //   //   jQuery("#sidebar").scrollTo("+=" + Math.abs(diff), 500);
    // });
  }

  onToogleMenu(): void {
    this.isClassVisible = !this.isClassVisible;
  }

}
