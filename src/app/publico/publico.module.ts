import { HomeModule } from './home/home.module';
import { SharedModule } from './../shared/shared.module';
import { PublicoComponent } from './publico.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ng2-bootstrap';
import { HomeComponent } from './home/home.component';
import { AxiomaComponent } from './axioma/axioma.component';

@NgModule({
    imports: [HomeModule,
        SharedModule.forRoot(),],
    declarations: [PublicoComponent],
    exports: [PublicoComponent]
})

export class PublicoModule { }
