import { SharedModule } from './../../shared/shared.module';
import { FundamentalistaComponent } from './fundamentalista.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ng2-bootstrap';

@NgModule({
    imports: [SharedModule.forRoot()],
    declarations: [FundamentalistaComponent],
    exports: [FundamentalistaComponent]
})

export class FundamentalistaModule { }
