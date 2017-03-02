import { SharedModule } from './../../shared/shared.module';
import { FiltrarPorPapelPipe } from './../../shared/pipe/filtrar-por-papel.pipe';
import { RouterModule } from '@angular/router';
import { AcaoComponent } from './acao.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [CommonModule,
        RouterModule,
        SharedModule.forRoot()
    ],
    declarations: [AcaoComponent],
    exports: [AcaoComponent]
})

export class AcaoModule { }
