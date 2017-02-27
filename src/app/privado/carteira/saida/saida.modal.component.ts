import { OperacaoService } from './../../../shared/service/papel/operacao.service';
import { Usuario } from './../../../shared/modelo/usuario';
import { OperacaoSaida } from './../../../shared/modelo/carteira/operacao-saida';
import { ModalDirective } from 'ng2-bootstrap';
import { OperacaoEntrada } from './../../../shared/modelo/carteira/operacao-entrada';
import { Component, Input, ViewChild, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'invet-saida',
  templateUrl: './saida.modal.component.html',
  styleUrls: ['./saida.modal.component.scss']
})
export class SaidaModalComponent implements OnChanges {
  @ViewChild('modalSaida') public modalSaida: ModalDirective;
  @Input() notifyAbriModal: OperacaoEntrada;
  @Output() notifyFecharModal: EventEmitter<any> = new EventEmitter<any>();
  operacao: OperacaoSaida;
  activeOperacaoForm: boolean = false;

  constructor(private operacaoService: OperacaoService) { }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    for (let propName in changes) {
      let changedProp = changes[propName];
      let to = changedProp.currentValue;
      if (to !== undefined && to instanceof Object) {
        this.showModalSaida(to);
        break;
      }

    };
  }

  public novaOperacao() {
    this.operacao = new OperacaoSaida();
    this.parseData();

    this.activeOperacaoForm = false;
    setTimeout(() => this.activeOperacaoForm = true, 0);
  }

  public showModalSaida(operacao: OperacaoEntrada): void {

    this.novaOperacao();
    this.operacao.operacaoEntrada = operacao;
    // this.operacao.papel = operacao.papel;
    this.operacao.quantidade = operacao.quantidade;
    if ('Comprar' === operacao.tipoOperacao) {
      this.operacao.tipoOperacao = 'Vender';
    } else {
      this.operacao.tipoOperacao = 'Comprar';
    }

    this.modalSaida.show();
  }

  public notifyFecharModaltEmit(message: any) {
    this.notifyFecharModal.emit(message);
  }

  public onGravar(event: any): void {
    event.preventDefault();
    this.operacao.papel = null;
    if (this.validateQuantidade()) {
      let profile: Usuario = JSON.parse(localStorage.getItem('_profile'));
      this.operacao.user_id = profile.user_id;
      this.operacaoService.gravarSaida(this.operacao);
      this.operacaoService.atualizarEntrada(this.operacao);
      this.emitMessage('success', `Operação realizada com sucesso`);
    } else {
      this.emitMessage('warning', 'A quantidade de papeis na operação de saída é maior que a quantidade existente.');

    }
  }

  public parseData(): void {
    let dataLocal = new Date();
    let ano = dataLocal.toLocaleDateString().substring(6, 10);
    let mes = dataLocal.toLocaleDateString().substring(3, 5);
    let dia = dataLocal.toLocaleDateString().substring(0, 2);
    this.operacao.data = ano + '-' + mes + '-' + dia;
  }

  private validateQuantidade(): boolean {
    if (this.operacao.quantidade > this.operacao.operacaoEntrada.quantidade) {
      return false;
    }
    return true;
  }

  private emitMessage(type: string, message: string): void {
    this.notifyFecharModaltEmit({
      type: type,
      closable: true,
      msg: message
    });
    this.modalSaida.hide();
  }

}
