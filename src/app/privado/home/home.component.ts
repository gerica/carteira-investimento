import { AlertaUtil } from './../../shared/utils/alerta-util';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'invet-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() isAuthenticated: boolean;
  alertaUtil: AlertaUtil;

  constructor() { }

  ngOnInit() {
    this.alertaUtil = new AlertaUtil();
  }

  /**
   * Método será chamado toda vez que o componete filho, marcado com @Output(), emitir algum sinal para ele.
   * Nesse caso o componete @Output() notifyFecharModal da classe notifyAbriModalModalComponent.
   */
  public onNotify(message: any): void {
    this.alertaUtil.addMessage(message);
  }

}
