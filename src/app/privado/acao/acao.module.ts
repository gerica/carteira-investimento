import { RouterModule } from '@angular/router';
import { AcaoComponent } from './acao.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [CommonModule,
        RouterModule
    ],
    declarations: [AcaoComponent],
    exports: [AcaoComponent]
})

export class AcaoModule { }
