import { OperacaoService } from './../../shared/service/papel/operacao.service';
import { EntradaModule } from './../carteira/entrada/entrada.module';
import { ListaComponent } from './../carteira/entrada/lista/lista.component';
import { AxiomaModule } from './../axioma/axioma.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ng2-bootstrap';

@NgModule({
    imports: [CommonModule,
        RouterModule,
        FormsModule,
        AlertModule.forRoot(),
        AxiomaModule,
        EntradaModule],
    declarations: [HomeComponent],
    exports: [HomeComponent],
    providers: [OperacaoService]
})

export class HomeModule { }
