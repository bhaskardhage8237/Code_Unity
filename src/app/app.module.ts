import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
 import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TwubricComponent } from './common/components/twubric/twubric.component';
import { CrudOperationComponent } from './common/components/crud-operation/crud-operation.component';
import { DateFormatPipe } from './common/pipes/date-format.pipe';
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { HoverDirective } from './common/directives/hover.directive';
import { SignalComponent } from './common/components/signal/signal.component';
import { MaterialComponent } from './common/components/material/material.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PiechartComponent } from './common/components/piechart/piechart.component';
import { ReactiveFormComponent } from './common/components/reactive-form/reactive-form.component';
import { TepmlateFormComponent } from './common/components/tepmlate-form/tepmlate-form.component';
import { PracticeFormComponent } from './common/components/practice-form/practice-form.component';
@NgModule({
  declarations: [
    AppComponent,
     TwubricComponent,
    CrudOperationComponent,
     DateFormatPipe,
     HoverDirective,
     SignalComponent,
     MaterialComponent,
     PiechartComponent,
     ReactiveFormComponent,
     TepmlateFormComponent,
     PracticeFormComponent
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    ButtonsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatStepperModule,
    MatFormFieldModule,
    MatToolbarModule
  ],
  providers: [DateFormatPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
