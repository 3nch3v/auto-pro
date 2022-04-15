import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateAdRequest } from 'src/app/dtos/ad/CreateAdRequest';
import { AdService } from 'src/app/services/ad.service';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.css']
})

export class CreateAdComponent {
 
  createAdForm: FormGroup;
  isCreatedSuccessful: boolean = true;

  constructor(private readonly form: FormBuilder,
              private readonly router: Router,
              private readonly adService: AdService,
  ) { 
    this.createAdForm = this.form.group({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(500),
      ]),
      contact: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
      ]),
      make: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      model: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      price: new FormControl(null, [
        Validators.required,
        Validators.min(0),
      ]),
      kilometers: new FormControl(null, [
        Validators.required,
        Validators.min(0),
      ]),
      horsePower: new FormControl(null, [
        Validators.required,
        Validators.min(1),
      ]),
      year: new FormControl(null, [
        Validators.required,
        Validators.min(1900),
      ]),
      pictureUrl: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(2048),
        Validators.pattern('.gif|.jpeg|.jpg$'),
      ]),
     });
     }

  createAd(): void {
    let request = new CreateAdRequest();
    request.title = this.createAdForm.value.title;
    request.description = this.createAdForm.value.description;
    request.contact = this.createAdForm.value.contact;
    request.make = this.createAdForm.value.make;
    request.model = this.createAdForm.value.model;
    request.price = this.createAdForm.value.price;
    request.kilometers = this.createAdForm.value.kilometers;
    request.horsePower = this.createAdForm.value.horsePower;
    request.year = this.createAdForm.value.year;
    request.pictureUrl = this.createAdForm.value.pictureUrl;

    this.adService.create$(request).subscribe({
      next: () => {
        this.isCreatedSuccessful = true;
        this.router.navigate(['/all']);
      },
      error: (e) => {
        this.isCreatedSuccessful = false;
      },
    });
  };

  get title() {
    return this.createAdForm.get('title');
  }

  get description() {
    return this.createAdForm.get('description');
  }

  get contact() {
    return this.createAdForm.get('contact');
  }

  get make() {
    return this.createAdForm.get('make');
  }

  get model() {
    return this.createAdForm.get('model');
  }

  get price() {
    return this.createAdForm.get('price');
  }

  get kilometers() {
    return this.createAdForm.get('kilometers');
  }

  get horsePower() {
    return this.createAdForm.get('horsePower');
  }

  get year() {
    return this.createAdForm.get('year');
  }

  get pictureUrl() {
    return this.createAdForm.get('pictureUrl');
  }
}