import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-practice-form',
  templateUrl: './practice-form.component.html',
  styleUrls: ['./practice-form.component.css']
})
export class PracticeFormComponent {




  loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl('')
  })














}
