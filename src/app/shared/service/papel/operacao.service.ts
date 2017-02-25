import { Usuario } from './../../modelo/usuario';
import { OperacaoEntrada } from './../../modelo/carteira/operacao-entrada';
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class OperacaoService {
    private _fireBaseDB: FirebaseListObservable<any[]>;

    constructor(private af: AngularFire) {
    }

    public gravar(operacaoEntrada: OperacaoEntrada): void {
        this._fireBaseDB = this.af.database.list('/operacaoEntrada');
        this._fireBaseDB.push(operacaoEntrada);
    }

    public getOperacaoEntradaByUsuario(usuario: Usuario): FirebaseListObservable<any[]> {
        const queryObservable = this.af.database.list('/operacaoEntrada', {
            query: {
                orderByChild: 'user_id',
                equalTo: usuario.user_id
            }
        });
        return queryObservable;
    }

    public excluir(operacaoEntrada: OperacaoEntrada): void {
        this._fireBaseDB.remove(operacaoEntrada.$key);
    }

}

