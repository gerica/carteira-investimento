import { HomeModule } from './home/home.module';
import { SharedModule } from './../shared/shared.module';
import { PrivadoComponent } from './privado.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ng2-bootstrap';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [CommonModule,
        RouterModule,
        FormsModule,
        AlertModule.forRoot(),
        HomeModule,
        SharedModule.forRoot()],
    declarations: [PrivadoComponent],
    exports: [PrivadoComponent]
})

export class PrivadoModule { }