import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ng2-bootstrap';

import { LoginComponent } from './login.component';

@NgModule({
    imports: [CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        AlertModule.forRoot()],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})

export class LoginModule { }
