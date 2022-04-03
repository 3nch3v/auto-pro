import { Component, OnInit } from '@angular/core';
import { AdResponse } from 'src/app/dtos/ad/AdResponse';
import { AdService } from 'src/app/services/ad.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  ads: AdResponse[] = [];
  constructor(private readonly adService: AdService) { }

  ngOnInit(): void {
    this.adService.getRandomAds$().subscribe({
      next: (response) => {
        this.ads = response
      },
      error: (e) => { },
    });
  }
}
