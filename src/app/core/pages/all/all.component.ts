import { Component, OnInit } from '@angular/core';
import { AllAdsResponse } from 'src/app/dtos/ad/AllAdsResponse';
import { AdService } from 'src/app/services/ad.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  adsResponse?: AllAdsResponse;
  constructor(private readonly adService: AdService) { }

  ngOnInit(): void {
    this.adService.getAllAds$(1).subscribe({
      next: (response) => {
        this.adsResponse = response
      },
      error: (e) => { },
    });
  }

  navigate(page?: number) {
    this.adService.getAllAds$(page).subscribe({
      next: (response) => {
        this.adsResponse = response
      },
      error: (e) => { },
    });
  }
}
