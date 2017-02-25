import { OperacaoEntrada } from './../../modelo/carteira/operacao-entrada';
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class PapelService {
    papeis: FirebaseListObservable<any[]>;

    constructor(private af: AngularFire) {
        this.papeis = this.af.database.list('/papeis');
    }

    public getPapeis(): FirebaseListObservable<any> {
        return this.papeis;
    }
}

