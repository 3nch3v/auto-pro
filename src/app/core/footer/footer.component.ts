import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SubscribeRequest } from 'src/app/dtos/user/SubscribeRequest';
import { SubscribeService } from 'src/app/services/subscribe.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  subscribeForm: FormGroup;
  subscribeMsg?: string;
  isSuccessful: boolean = true;
  showMsg: boolean = false;

  constructor(private readonly form: FormBuilder, 
              private readonly subscribeService: SubscribeService) {
    this.subscribeForm = this.form.group({
      email: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
     });
   }
   
   get email() {
    return this.subscribeForm.get('email');
  }

  subscribe(): void {
    let request = new SubscribeRequest();
    request.email = this.subscribeForm.value.email;
    
    this.subscribeService.subscribe$(request).subscribe({
      next: (response) => {
        this.isSuccessful = true;
        this.showMsg = true;
        this.subscribeMsg = response.message;
      },
      error: (response) => {
        this.isSuccessful = false;
        this.showMsg = true;
        this.subscribeMsg = 'Please enter valid email and try again.';
      },
    });
  }

  onChanged(){
    this.showMsg = false;
  }
}
