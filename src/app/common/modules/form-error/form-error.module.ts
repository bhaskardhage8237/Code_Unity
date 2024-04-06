import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorComponent } from './form-error.component';
import { RouterModule } from '@angular/router';
import { InputsModule } from '@progress/kendo-angular-inputs';



@NgModule({
  declarations: [
    FormErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    InputsModule
  ]
})
export class FormErrorModule { }
