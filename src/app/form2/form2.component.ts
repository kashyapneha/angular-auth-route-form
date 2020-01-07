import { Component } from '@angular/core';
import { 
  ReactiveFormsModule,
  FormsModule, 
  FormGroup, 
  FormControl, 
  Validators,
  FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls:['./form2.component.css']
})
export class Form2Component {
  myform: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;

  langs: string[] = ['English', 'French', 'German'];

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('',[
        Validators.required,
        Validators.pattern("[^@]*@[^@]*")
      ]);
    this.password = new FormControl('',[
        Validators.required,
        Validators.minLength(8)
      ]);
    this.language = new FormControl('');
  }

  createForm() {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName
      }),
      email: this.email,
      password: this.password,
      language: this.language
    })
  }

  onFormSubmit() {
    console.log("Form Submitted", this.myform.value);
    this.myform.reset();
  }
}

