import { OperacaoEntrada } from './../../shared/modelo/carteira/operacao-entrada';
import { OperacaoService } from './../../shared/service/papel/operacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'invet-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  profile: any;
  data: Date;
  entradas: OperacaoEntrada[];
  totalQuantidade: number;
  totalValor: number;

  constructor(private operacaoService: OperacaoService) { }

  ngOnInit() {
    this.profile = JSON.parse(localStorage.getItem('_profile'));
    this.data = new Date();
    this.recuperarOperacoesEntrada();

    setInterval(() => {
      this.data = new Date();
    }, 1000);
  }

  public recuperarOperacoesEntrada(): void {
    const usuario = JSON.parse(localStorage.getItem('_profile'));
    this.operacaoService.getOperacaoEntradaByUsuario(usuario).subscribe(
      (data: OperacaoEntrada[]) => {
        this.entradas = data.filter(el => {
          if (el.quantidade > 0)
            return el;
        });
        this.calcularTotais();
      },
      error => {
        console.log(error);
      }
    );
  }
  private calcularTotais(): void {
    this.totalQuantidade = 0;
    this.totalValor = 0;
    for (let e of this.entradas) {
      e.total = (e.precoUnitario * e.quantidade) + e.despesa;
      this.totalQuantidade += e.quantidade;
      this.totalValor += e.total;
    }
  }

}
