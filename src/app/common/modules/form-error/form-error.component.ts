import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
 })
export class FormErrorComponent {
  @Input() errorMsg: any = null;
}
