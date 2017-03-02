import { PerfilModule } from './perfil/perfil.module';
import { AcaoModule } from './acao/acao.module';
import { SaidaModule } from './carteira/saida/saida.module';
import { EntradaModule } from './carteira/entrada/entrada.module';
import { TabelaMagicaModule } from './tabela-magica/tabela-magica.component.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './../shared/shared.module';
import { PrivadoComponent } from './privado.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ng2-bootstrap';
import { HomeComponent } from './home/home.component';
import { TabelaMagicaComponent } from './tabela-magica/tabela-magica.component';
import { EntradaComponent } from './carteira/entrada/entrada.component';
import { AcaoComponent } from './acao/acao.component';

@NgModule({
    imports: [CommonModule,
        RouterModule,
        FormsModule,
        AlertModule.forRoot(),
        SharedModule.forRoot(),
        HomeModule,
        TabelaMagicaModule,
        EntradaModule,
        SaidaModule,
        AcaoModule,
        PerfilModule
    ],
    declarations: [PrivadoComponent],
    exports: [PrivadoComponent]
})

export class PrivadoModule { }
