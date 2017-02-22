import { FundamentalistaModule } from './../fundamentalista/fundamentalista.module';
import { SharedModule } from './../../shared/shared.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ng2-bootstrap';


@NgModule({
    imports: [
        SharedModule.forRoot(),
        FundamentalistaModule],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})

export class HomeModule { }
