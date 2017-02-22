import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'invet-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() isAuthenticated: boolean;

  constructor() { }

  ngOnInit() {
  }

}
