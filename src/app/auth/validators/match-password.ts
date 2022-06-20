import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, Validator } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class MatchPassword implements Validator {
  validate(FormGroup: AbstractControl) {
    const { password, passwordConfirmation } = FormGroup.value;

    if (password === passwordConfirmation) {
      return null;
    } else {
      return { passwordsDontMatch: true };
    }
  }
}
