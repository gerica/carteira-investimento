import { AlertaUtil } from './../../shared/utils/alerta-util';
import { Papel } from './../../shared/modelo/papel';
import { FundamentoService } from './../../shared/service/publico/fundamentalista.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'invet-tabela-magica',
  templateUrl: './tabela-magica.component.html',
  styleUrls: ['./tabela-magica.component.scss'],
  providers: [FundamentoService]
})
export class TabelaMagicaComponent implements OnInit {
  alertaUtil: AlertaUtil = new AlertaUtil();
  papeisFundamento: Papel[];

  constructor(private fundamentoService: FundamentoService) { }


  ngOnInit() {

    this.fundamentoService.recuperarLista()
      .subscribe(
      (data: Papel[]) => {
        this.papeisFundamento = data;
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
