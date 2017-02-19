import { AlertaUtil } from './../shared/utils/alerta-util';
import { Usuario } from './../shared/modelo/usuario';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

/**
 *  This class represents the lazy loaded LoginComponent.
 */

@Component({
    moduleId: module.id,
    selector: 'login-cmp',
    templateUrl: 'login.component.html',
    providers: [LoginService],
    styleUrls: ['login.component.scss']
})

export class LoginComponent {
    usuario = new Usuario();
    alertaUtil: AlertaUtil = new AlertaUtil();

    constructor(private loginSerice: LoginService, private router: Router) { }

    login(event: any): void {
        event.preventDefault();

        // Get all comments
        this.loginSerice.login(this.usuario)
            .subscribe(
            result => {
                localStorage.setItem('id_token', result.token);
                let usuarioLocal = result.usuario;
                usuarioLocal.password = '';
                localStorage.setItem('usuario_investimento', JSON.stringify(usuarioLocal));
                this.router.navigate(['/dashboard/home']);
            },
            err => {
                // Log errors if any
                this.alertaUtil.addMessage({
                    type: 'danger',
                    closable: true,
                    msg: err
                });
            });

    }
    // public atualizarAtualBMF(): void {
    //     this.cotacaoService.atualizarAtualBMF()
    //         .subscribe(
    //         result => {
    //             console.log(result.message);
    //         },
    //         err => {
    //             // Log errors if any                                    
    //             this.alertaUtil.addMessage({
    //                 type: 'danger',
    //                 closable: true,
    //                 msg: err.message
    //             });
    //         });
    // }
}
