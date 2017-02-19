import { PublicoComponent } from './../publico/publico.component';
import { ShowItensDirective } from './../topnav/show-itens.directive';
import { SidebarComponent } from './../sidebar/sidebar.component';
import { TopnavComponent } from './../topnav/topnav.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ng2-bootstrap';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, AlertModule.forRoot()],
    declarations: [DashboardComponent,
        TopnavComponent,
        SidebarComponent,
        ShowItensDirective,
        HomeComponent,
        PublicoComponent],
    exports: [DashboardComponent]
})

export class DashboardModule { }
