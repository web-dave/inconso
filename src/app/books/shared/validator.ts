import { AbstractControl } from '@angular/forms';

// tslint:disable:max-line-length
const isbnRegex =
  '^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$';
export function isbnValidator(control: AbstractControl) {
  let msg = '';
  const value = String(control.value);
  if (!value.match(isbnRegex) && value.length !== 0) {
    msg = value.length + ' is to short!';
    return { isbn: true, msg };
  }
  return null;
}
