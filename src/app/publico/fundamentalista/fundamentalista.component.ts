import { AlertaUtil } from './../../shared/utils/alerta-util';
import { Papel } from './../../shared/modelo/papel';
import { FundamentoService } from './../../shared/service/publico/fundamentalista.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'invet-fundamentalista',
  templateUrl: './fundamentalista.component.html',
  styleUrls: ['./fundamentalista.component.scss'],
  providers: [FundamentoService]
})
export class FundamentalistaComponent implements OnInit {
  alertaUtil: AlertaUtil = new AlertaUtil();  
  papeisFundamentoTop: Papel[];

  constructor(private fundamentoService: FundamentoService) { }

  ngOnInit() {
    this.fundamentoService.recuperarListaTop5()
      .subscribe(
      (data: Papel[]) => {
        this.papeisFundamentoTop  = data;
        // this.getTopCinco();
      },
      error => {
        this.alertaUtil.addMessage({
          type: 'danger',
          closable: true,
          msg: error
        });
      });
  }

}
