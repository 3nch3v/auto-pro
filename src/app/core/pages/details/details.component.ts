import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsResponse } from 'src/app/dtos/ad/DetailsResponse';
import { AdService } from 'src/app/services/ad.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id?: number;
  ad?: DetailsResponse;
  
  constructor(private readonly route: ActivatedRoute,
              private readonly adService: AdService,
              private readonly router: Router) { 
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });
  }

  ngOnInit(): void {
    console.log('on init ' + this.id);

    this.adService.getById$(this.id).subscribe({
      next: (response) => {
        this.ad = response;
      },
      error: (e) => { 
        this.router.navigate(['/not-found']);
      },
    });
  }

}
