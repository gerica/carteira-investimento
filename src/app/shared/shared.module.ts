import { SidebarComponent } from './sidebar/sidebar.component';
import { ShowItensDirective } from './topnav/show-itens.directive';
import { TopnavComponent } from './topnav/topnav.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
    AlertModule,
    ButtonsModule,
    DropdownModule,
    PaginationModule,
    ProgressbarModule,
    RatingModule,
    TabsModule,
    TooltipModule,
    ModalModule,
    TypeaheadModule
} from 'ng2-bootstrap';

@NgModule({
    imports: [CommonModule,
        RouterModule,
        FormsModule,
        AlertModule.forRoot(),
        ButtonsModule.forRoot(),
        DropdownModule.forRoot(),
        PaginationModule.forRoot(),
        ProgressbarModule.forRoot(),
        RatingModule.forRoot(),
        TabsModule.forRoot(),
        TooltipModule.forRoot(),
        ModalModule.forRoot(),
        TypeaheadModule.forRoot()],
    declarations: [TopnavComponent,
        ShowItensDirective,
        SidebarComponent],
    exports: [CommonModule,
        AlertModule,
        ButtonsModule,
        DropdownModule,
        PaginationModule,
        ProgressbarModule,
        RatingModule,
        TabsModule,
        TooltipModule,
        ModalModule,
        TypeaheadModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        TopnavComponent,
        ShowItensDirective,
        SidebarComponent]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule
        };
    }
}
