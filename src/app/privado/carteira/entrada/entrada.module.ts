import { InputMaskCurrentDirective } from './../../../shared/diretives/input-mask-current.directive';
import { EntradaComponent } from './entrada.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ng2-bootstrap';

@NgModule({
    imports: [CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        AlertModule.forRoot()],
    declarations: [EntradaComponent, InputMaskCurrentDirective],
    exports: [EntradaComponent]
})

export class EntradaModule { }
