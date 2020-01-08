import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {
  langs: string[] = ['English', 'German', 'French'];

  isLoading = false;

  @ViewChild('f',{static:false}) submitForm : NgForm;

  onFormSubmit(){
    this.isLoading = true;
    console.log('form submitted!', this.submitForm.value);
    this.submitForm.reset();
    this.isLoading = false;
  }
}