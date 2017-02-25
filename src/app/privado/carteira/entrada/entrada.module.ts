import { InputMaskCurrentDirective } from './../../../shared/diretives/input-mask-current.directive';
import { EntradaComponent } from './entrada.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule, ModalModule } from 'ng2-bootstrap';
import { ListaComponent } from './lista/lista.component';

@NgModule({
    imports: [CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        AlertModule.forRoot(),
        ModalModule.forRoot()],
    declarations: [EntradaComponent, InputMaskCurrentDirective, ListaComponent],
    exports: [EntradaComponent]
})

export class EntradaModule { }
