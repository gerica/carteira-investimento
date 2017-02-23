import { Router } from '@angular/router';
import { Auth0Service } from './../shared/service/auth0.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'invet-publico',
  templateUrl: './publico.component.html',
  styleUrls: ['./publico.component.scss']
})
export class PublicoComponent implements OnInit {

  constructor(private auth0Service: Auth0Service,
    private router: Router) {
  }

  ngOnInit() {
    // console.log('Chamou o construtor público.');
    // console.log(this.auth0Service.authenticated());
    // if (this.auth0Service.authenticated()) {
    //   this.router.navigate(['privado']);
    // }
  }

}
