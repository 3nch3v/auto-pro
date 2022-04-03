import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllAdsResponse } from 'src/app/dtos/ad/AllAdsresponse';
import { AdService } from 'src/app/services/ad.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  carsResponse?: AllAdsResponse;
  constructor(private readonly router: Router,
              private readonly adService: AdService) { }

  ngOnInit(): void {
    this.adService.getAllAds$().subscribe({
      next: (response) => {
        this.carsResponse = response
      },
      error: (e) => { },
    });
  }

}
