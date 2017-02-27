import { OperacaoService } from './../../../../shared/service/papel/operacao.service';
import { OperacaoEntrada } from './../../../../shared/modelo/carteira/operacao-entrada';
import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
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
  @Output() notify: EventEmitter<any> = new EventEmitter<any>();
  notifyAbriModal: OperacaoEntrada;

  @ViewChild('modalExcluir') public modalExcluir: ModalDirective;
  @ViewChild('modalVisualizar') public modalVisualizar: ModalDirective;

  constructor(private operacaoService: OperacaoService) { }

  ngOnInit() {
    this.recuperarOperacoesEntrada();
  }

  public recuperarOperacoesEntrada(): void {
    const usuario = JSON.parse(localStorage.getItem('_profile'));
    this.operacaoService.getOperacaoEntradaByUsuario(usuario).subscribe(
      (data: OperacaoEntrada[]) => {
        this.entradas = data.filter(el => {
          if (el.quantidade > 0)
            return el;
        });
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

  public showModalSaida(entrada: OperacaoEntrada): void {
    this.notifyAbriModal = entrada;
  }

  /**
       * Método será chamado toda vez que o componete filho, marcado com @Output(), emitir algum sinal para ele.
       * Nesse caso o componete @Output() notifyFecharModal da classe notifyAbriModalModalComponent.
       */
  public onNotifyFecharModal(message: any): void {
    this.recuperarOperacoesEntrada();
    this.notify.emit(message);
  }


}
