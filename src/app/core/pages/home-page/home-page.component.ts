import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ad } from 'src/app/dtos/ad/Ad';
import { AdService } from 'src/app/services/ad.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  cars: Ad[] = [];
  constructor(private readonly router: Router,
              private readonly adService: AdService) { }

  ngOnInit(): void {
    this.adService.getRandomAds$().subscribe({
      next: (response) => {
        this.cars = response
      },
      error: (e) => { },
    });
  }
}
