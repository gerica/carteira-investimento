import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { AuthService } from './../shared/service/auth.service';

@Component({
  selector: 'invet-privado',
  templateUrl: './privado.component.html',
  styleUrls: ['./privado.component.scss']
})
export class PrivadoComponent implements OnInit {

  constructor(private route: Router) {
  }

  ngOnInit() {

  }

}
