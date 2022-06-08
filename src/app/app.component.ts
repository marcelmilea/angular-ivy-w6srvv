import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Candidate';
  submitted = false;
  invitee = '';

  colleagues = new FormControl('');
  colleaguesList: string[] = ["I'm bringing some colleagues", 'Just myself'];
  selectedColleagues = '';

  inviteeForm = this.formBuilder.group({
    name: ['', Validators.required],
    phone: '',
    email: [null, [Validators.required, Validators.email]],
    gender: [''],
    answer: [''],
    selectedColleagues: '',
  });

  constructor(private formBuilder: FormBuilder) {
    this.buildAcceptForm();
    this.submitted = false;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.inviteeForm.valid) {
      console.log(this.inviteeForm.value);
      this.inviteeForm.reset();
    }
  }

  buildAcceptForm() {
    this.inviteeForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: [
        null,
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
      email: [null, [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      answer: ['', Validators.required],
      selectedColleagues: ['', Validators.required],
    });
    this.inviteeForm.updateValueAndValidity;
  }

  buildRefuseForm() {
    this.inviteeForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: '',
      email: '',
      gender: '',
      answer: '',
      selectedColleagues: '',
    });
    this.inviteeForm.updateValueAndValidity;
  }
}
