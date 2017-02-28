import { OperacaoService } from './../../../../shared/service/papel/operacao.service';
import { OperacaoSaida } from './../../../../shared/modelo/carteira/operacao-saida';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'invet-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
  providers: [OperacaoService]
})
export class ListaComponent implements OnInit {
  saidas: OperacaoSaida[];
  mostarTabelaSaidaAll = false;

  constructor(private operacaoService: OperacaoService) { }

  ngOnInit() {
    this.recuperarOperacoesSaida();
  }

  public recuperarOperacoesSaida(): void {
    const usuario = JSON.parse(localStorage.getItem('_profile'));
    this.operacaoService.getOperacaoSaidaByUsuario(usuario).subscribe(
      (data: OperacaoSaida[]) => {
        this.saidas = data;
        this.calcularOperacao();
      },
      error => {
        console.log(error);
      }
    );
  }

  public showHideTabelaSaidaAll(): void {
    this.mostarTabelaSaidaAll = !this.mostarTabelaSaidaAll;
    for (let x = 0; x < this.saidas.length; x++) {
      this.saidas[x].flagShow = this.mostarTabelaSaidaAll;
    }
  }

  public toggleSaida(operacao: OperacaoSaida): void {
    operacao.flagShow = !operacao.flagShow;
  }

  public calcularOperacao(): void {
    for (let s of this.saidas) {
      s.operacaoEntrada.total = (s.operacaoEntrada.quantidade * s.operacaoEntrada.precoUnitario) - s.operacaoEntrada.despesa;
      s.total = (s.quantidade * s.precoUnitario) - s.despesa;
      s.saldo = s.total - s.operacaoEntrada.total;
    }

  }

}
