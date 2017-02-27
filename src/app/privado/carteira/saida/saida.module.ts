import { SaidaModalComponent } from './../saida/saida.modal.component';
import { InputMaskCurrentDirective } from './../../../shared/diretives/input-mask-current.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule, ModalModule } from 'ng2-bootstrap';
import { ListaComponent } from './lista/lista.component';

@NgModule({
    imports: [CommonModule,
        RouterModule,
        AlertModule.forRoot(),
        ModalModule.forRoot()],
    declarations: [ListaComponent],
    exports: [ListaComponent]
})

export class SaidaModule { }
