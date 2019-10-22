import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  hobby: string;
  bestFriendName: string;
  dateOfBirth: number;
}

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  firstName = 'Ola';
  lastName = 'ĘĄ';
  email = 'ww@gmail.com';
  phone = 123123123;

  userFormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.min(1), Validators.required]),
    lastName: new FormControl('', [Validators.min(2), Validators.required]),
    email: new FormControl('', Validators.email),
    phone: new FormControl(''),
    hobby: new FormControl('', Validators.min(2)),
    bestFriendName: new FormControl(''),
    dateOfBirth: new FormControl('')
  });

  gatheredUserInfo: UserInfo;

  constructor() { }

  ngOnInit() {
    // this.userFormGroup.valueChanges(() => {
    //   this.gatheredUserInfo = this.userFormGroup.getRawValue()
    // }).subscribe()
  }

  onSubmit() {
    console.log(this.userFormGroup.getRawValue());
    this.gatheredUserInfo = this.userFormGroup.getRawValue();
    this.userFormGroup.disable();
  }

  fillDefault() {
    this.userFormGroup.patchValue({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone
    });
  }

  editField(formControlName: string){
    console.log(formControlName)
    this.userFormGroup.controls[formControlName].enable();
  }

  updateSpecificField(testowyInputvValue: string) {
    this.userFormGroup.controls.firstName.setValue(testowyInputvValue);
  }

}
