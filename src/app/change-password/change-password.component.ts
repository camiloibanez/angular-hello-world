import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  form;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['',
        Validators.required, 
        PasswordValidators.isNotOldPassword],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validator: PasswordValidators.passwordsDontMatch });
   }

   changePassword() {
     console.log(this.form);
   }
}
