import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentViewerComponent } from './document-viewer.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { PDFViewerModule } from '@progress/kendo-angular-pdfviewer';
import { FileIconModule } from '../file-icon/file-icon.module';



@NgModule({
  declarations: [
    DocumentViewerComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    DialogModule,
    NgxDocViewerModule,
    PDFViewerModule,
    FileIconModule
  ],
  exports: [DocumentViewerComponent]
})
export class DocumentViewerModule { }
