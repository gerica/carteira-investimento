import { Auth0Service } from './../../shared/service/auth0.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'invet-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private auth0Service: Auth0Service) { }

  ngOnInit() {
  }

  login(): void {
    this.auth0Service.login();
  }

}
