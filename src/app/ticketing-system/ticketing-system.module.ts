import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketingSystemRoutingModule } from './ticketing-system-routing.module';
import { TicketingSystemComponent } from './ticketing-system.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { FormErrorModule } from '../common/modules/form-error/form-error.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { UploadsModule } from '@progress/kendo-angular-upload';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { TooltipsModule } from '@progress/kendo-angular-tooltip';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { LabelModule } from '@progress/kendo-angular-label';
import { FileIconModule } from '../common/modules/file-icon/file-icon.module';
import { DocumentViewerModule } from '../common/modules/document-viewer/document-viewer.module';
import { EditorModule } from '@progress/kendo-angular-editor';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';


@NgModule({
  declarations: [
    TicketingSystemComponent,
    TicketListComponent,
    TicketDetailsComponent,
    CreateTicketComponent
  ],
  imports: [
    CommonModule,
    TicketingSystemRoutingModule,
    LayoutModule,
    FormErrorModule,
    GridModule,
    ButtonsModule,
    ReactiveFormsModule,
    FormsModule,
    InputsModule,
    UploadsModule,
    DropDownsModule,
    TooltipsModule,
    DialogsModule,
    LabelModule,
    FileIconModule,
    DocumentViewerModule,
    EditorModule
  ]
})
export class TicketingSystemModule { }
