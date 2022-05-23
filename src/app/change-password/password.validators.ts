import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";


export class PasswordValidators {
    static isNotOldPassword(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value !== '1234') {
                    resolve({ isNotOldPassword: true });
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }

    static passwordsDontMatch(fg: FormGroup): ValidationErrors | null {
        let newPassword = fg.get('newPassword')?.value;
        let confirmPassword = fg.get('confirmPassword')?.value;

        if(confirmPassword !== newPassword) {
            return { passwordsDontMatch: true };
        }

        return null;
    }
}