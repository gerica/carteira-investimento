import { Usuario } from './../modelo/usuario';
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class UsuarioService {
    private _fireBaseDB: FirebaseListObservable<any[]>;

    constructor(private af: AngularFire) {
        this._fireBaseDB = this.af.database.list('/usuarios');
    }

    public onSaveUpdate(usuario: Usuario): void {
        let isExiste: boolean = false;
        this._fireBaseDB.subscribe((data: Usuario[]) => {
            for (let u of data) {
                if (usuario.user_id === u.user_id) {
                    console.log('gravando...');
                    const itemObservable = this._fireBaseDB.update(u.$key, usuario);
                    itemObservable.then(_ => {
                        console.log('success update');
                        return;
                    }).catch(err => {
                        console.log(err, 'You dont have access, update!');
                        return;
                    });
                    isExiste = true;
                    return;
                }
            }

            if (!isExiste) {
                console.log('não existe o usuario');
                const itemObservable = this._fireBaseDB.push(usuario);
                itemObservable.then(_ => console.log('success push'))
                    .catch(err => console.log(err, 'You dont have access, push!'));
            }

        }, error => {
            console.log(error);
        });

    }

    public getAllOperacaoEntrada(): FirebaseListObservable<any[]> {
        return this._fireBaseDB;
    }

}