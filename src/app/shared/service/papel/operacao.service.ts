import { OperacaoEntrada } from './../../modelo/carteira/operacao-entrada';
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class OperacaoService {
    entradaFB: FirebaseListObservable<any[]>;

    constructor(private af: AngularFire) {
        this.entradaFB = this.af.database.list('/operacaoEntrada');
    }

    public gravar(operacaoEntrada: OperacaoEntrada): void {
        this.entradaFB.push(operacaoEntrada);
    }

    public getAllOperacaoEntrada(): FirebaseListObservable<any[]> {
        return this.entradaFB;
    }

    public excluir(operacaoEntrada: OperacaoEntrada): void {
        this.entradaFB.remove(operacaoEntrada.$key);
    }

}

