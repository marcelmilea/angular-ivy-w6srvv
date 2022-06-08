import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-invite-form',
  templateUrl: './invite-form.component.html',
  styleUrls: ['./invite-form.component.css'],
})
export class InviteFormComponent implements OnInit {
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

  ngOnInit(): void {}

  
  onSubmit(): void {
    this.submitted = true;
    // Process checkout data here
    this.invitee = 'Gigi';

    window.alert(
      'The product has been shared! ' +
        this.inviteeForm.value.selectedColleagues
    );

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
      name: '',
      phone: '',
      email: '',
      gender: '',
      answer: '',
      selectedColleagues: '',
    });
    this.inviteeForm.updateValueAndValidity;
  }
}
