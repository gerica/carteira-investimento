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

  constructor(private operacaoService: OperacaoService) { }

  ngOnInit() {
    this.recuperarOperacoesSaida();
  }

  public recuperarOperacoesSaida(): void {
    const usuario = JSON.parse(localStorage.getItem('_profile'));
    this.operacaoService.getOperacaoSaidaByUsuario(usuario).subscribe(
      (data: OperacaoSaida[]) => {
        this.saidas = data;
      },
      error => {
        console.log(error);
      }
    );
  }

}
