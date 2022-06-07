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
    // Process checkout data here
    this.invitee = 'Gigi';

    window.alert(
      'The product has been shared! ' +
        this.inviteeForm.value.selectedColleagues
    );

    if (this.inviteeForm.valid) {
      console.log(this.inviteeForm.value); // Process your form
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
      name: '',
      phone: '',
      email: '',
      gender: '',
      answer: '',
      selectedColleagues: '',
    });
    this.inviteeForm.updateValueAndValidity;
  }

  // setUserCategoryValidators() {
  //   const name = this.inviteeForm.get('phone');
  //   const email = this.inviteeForm.get('email');
  //   const gender = this.inviteeForm.get('gender');
  //   const answer = this.inviteeForm.get('answer');
  //   const selectedColleagues = this.inviteeForm.get('selectedColleagues');

  //   this.inviteeForm.get('answer').valueChanges
  //     .subscribe(answer => {

  //       if (answer === 'yes') {
  //         institutionControl.setValidators([Validators.required]);
  //         companyControl.setValidators(null);
  //         salaryControl.setValidators(null);
  //       }

  //       if (answer === 'no') {
  //         institutionControl.setValidators(null);
  //         companyControl.setValidators([Validators.required]);
  //         salaryControl.setValidators([Validators.required]);
  //       }

  //       institutionControl.updateValueAndValidity();
  //       companyControl.updateValueAndValidity();
  //       salaryControl.updateValueAndValidity();
  //     });
  // }
}
