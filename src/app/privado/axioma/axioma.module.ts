import { AxiomaComponent } from './axioma.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlertModule, AccordionModule } from 'ng2-bootstrap';
import { TreeModule } from 'angular2-tree-component';

@NgModule({
    imports: [CommonModule,
        RouterModule,
        FormsModule,
        AlertModule.forRoot(),
        AccordionModule.forRoot(),
        TreeModule],
    declarations: [AxiomaComponent],
    exports: [AxiomaComponent]
})

export class AxiomaModule { }
