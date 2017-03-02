import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'invet-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  profile: any;
  data: Date;
  constructor() { }

  ngOnInit() {
    this.profile = JSON.parse(localStorage.getItem('_profile'));
    this.data = new Date();

    setInterval(() => {
      this.data = new Date();
    }, 1000);
  }

}
