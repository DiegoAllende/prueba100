import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recaptcha',
  templateUrl: './recaptcha.component.html',
})
export class RecaptchaComponent implements OnInit {

  @Output() valueRecaptcha = new EventEmitter<boolean>();

  ngOnInit(): void {
    console.log('ngOnInit recaptcha')
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    if(typeof captchaResponse === 'string'){
      this.valueRecaptcha.emit(true)
    }
    if(captchaResponse  === null){
      this.valueRecaptcha.emit(false)
    }
  }

  errored(_error:[]) {
    console.warn(`reCAPTCHA error encountered`);
  }

}
