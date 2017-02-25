import { OperacaoService } from './../../../shared/service/papel/operacao.service';
import { PapelService } from './../../../shared/service/papel/papel.service';
import { Papel } from './../../../shared/modelo/papel';
import { AlertaUtil } from './../../../shared/utils/alerta-util';
import { OperacaoEntrada } from './../../../shared/modelo/carteira/operacao-entrada';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'invet-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.scss'],
  providers: [PapelService, OperacaoService]
})
export class EntradaComponent implements OnInit {
  alertaUtil: AlertaUtil;
  operacao: OperacaoEntrada;
  activeOperacaoForm: boolean = true;
  // dataOperacao: string;
  papeis: Papel[];

  constructor(private papelService: PapelService,
    private operacaoService: OperacaoService) {

  }

  ngOnInit() {
    this.novaOperacao();
    this.getPapeis();
    this.alertaUtil = new AlertaUtil();

  }

  public novaOperacao() {
    this.operacao = new OperacaoEntrada();
    this.parseData();

    this.activeOperacaoForm = false;

    setTimeout(() => this.activeOperacaoForm = true, 0);
  }
  public onGravar(event: any): void {
    event.preventDefault();
    // this.attData();    
    this.operacaoService.gravar(this.operacao);
    this.alertaUtil.addMessage({
      type: 'success',
      closable: true,
      msg: `Operação realizada com sucesso`
    });
    this.novaOperacao();
  }

  public parseData(): void {
    let dataLocal = new Date();
    let ano = dataLocal.toLocaleDateString().substring(6, 10);
    let mes = dataLocal.toLocaleDateString().substring(3, 5);
    let dia = dataLocal.toLocaleDateString().substring(0, 2);
    this.operacao.data = ano + '-' + mes + '-' + dia;
  }

  public onNotifyAlerta(message: any): void {
    this.alertaUtil.addMessage(message);
  }

  // private attData() {
  //   let e: any[] = this.dataOperacao.split('-');
  //   let d = new Date(Date.UTC(e[0], e[1] - 1, e[2]));
  //   let dataLocal = new Date();
  //   dataLocal.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
  //   this.operacao.data = dataLocal;
  // }

  private getPapeis(): void {
    this.papelService.getPapeis().subscribe(
      (data: Papel[]) => {
        this.papeis = data;
      },
      error => {
        console.log(error);
      }
    );
  }

}
