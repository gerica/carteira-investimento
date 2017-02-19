import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { AuthService } from './../shared/service/auth.service';

@Component({
  selector: 'invet-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent {
  @Input() isAuthenticated: boolean;

  @Output() toggleMenuEmitter = new EventEmitter();

  constructor() {
  }

  onChangeVisibility(): void {
    this.toggleMenuEmitter.emit();
  }

}
