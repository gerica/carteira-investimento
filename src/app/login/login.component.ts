import { AuthService } from './../shared/service/auth.service';
import { AlertaUtil } from './../shared/utils/alerta-util';
import { Usuario } from './../shared/modelo/usuario';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

/**
 *  This class represents the lazy loaded LoginComponent.
 */

@Component({
    moduleId: module.id,
    selector: 'login-cmp',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})

export class LoginComponent {
    alertaUtil: AlertaUtil = new AlertaUtil();
    myForm: FormGroup;
    error = false;

    constructor(private fb: FormBuilder,
        private authService: AuthService,
        private route: Router) {

    }

    onSignin(event: any) {
        event.preventDefault();

        this.authService.login(this.myForm.value)
            .then(
            result => {
                this.route.navigate(['privado/privado-home']);
            }, error => {
                this.alertaUtil.addMessage({
                    type: 'danger',
                    closable: true,
                    msg: error
                });
            });
    }

    ngOnInit(): any {
        this.myForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
            rememeberMe: ['',],
        });
    }
}
