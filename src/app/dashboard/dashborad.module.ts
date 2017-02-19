import { SidebarComponent } from './../sidebar/sidebar.component';
import { TopnavComponent } from './../topnav/topnav.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ng2-bootstrap';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, AlertModule.forRoot()],
    declarations: [DashboardComponent, TopnavComponent, SidebarComponent],
    exports: [DashboardComponent]
})

export class DashboardModule { }
