import { OperacaoService } from './../../../../shared/service/papel/operacao.service';
import { OperacaoEntrada } from './../../../../shared/modelo/carteira/operacao-entrada';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';

@Component({
  selector: 'invet-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  entradas: OperacaoEntrada[];
  operacaoExcluir: OperacaoEntrada;
  operacaoVisualizar: OperacaoEntrada;

  @ViewChild('modalExcluir') public modalExcluir: ModalDirective;
  @ViewChild('modalVisualizar') public modalVisualizar: ModalDirective;

  constructor(private operacaoService: OperacaoService) { }

  ngOnInit() {
    this.recuperarOperacoesEntrada();
  }

  public recuperarOperacoesEntrada(): void {
    this.operacaoService.getAllOperacaoEntrada().subscribe(
      (data: OperacaoEntrada[]) => {
        this.entradas = data;
        console.log(this.entradas);
      },
      error => {
        console.log(error);
      }
    );
  }

  public excluir(event: any): void {
    event.preventDefault();
    this.operacaoService.excluir(this.operacaoExcluir);
    this.modalExcluir.hide();
  }


  public showModalExcluir(entrada: OperacaoEntrada): void {
    this.operacaoExcluir = entrada;
    this.modalExcluir.show();
  }

  public showModalVisualizar(entrada: OperacaoEntrada): void {
    this.operacaoVisualizar = entrada;
    this.modalVisualizar.show();
  }

}
