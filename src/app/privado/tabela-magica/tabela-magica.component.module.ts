import { FiltrarPorPapelPipe } from './../../shared/pipe/filtrar-por-papel.pipe';
import { TabelaMagicaComponent } from './tabela-magica.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ng2-bootstrap';

@NgModule({
    imports: [CommonModule,
        RouterModule,
        FormsModule,
        AlertModule.forRoot()],
    declarations: [TabelaMagicaComponent, FiltrarPorPapelPipe],
    exports: [TabelaMagicaComponent]
})

export class TabelaMagicaModule { }
