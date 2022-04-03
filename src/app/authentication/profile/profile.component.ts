import { Component, OnInit } from '@angular/core';
import { ProfileResponse } from 'src/app/dtos/user/ProfileResponse';
import { AdService } from 'src/app/services/ad.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProfileAdModel } from 'src/app/dtos/ad/ProfileAdModel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  profile?: ProfileResponse;
  profileFetchFailed: boolean = false;

  constructor(private readonly authService: AuthenticationService,
              private readonly adService: AdService) { }

  ngOnInit(): void {
    this.authService.profile$().subscribe({
      next: (response) => {
        this.profile = response;
      },
      error: () => {
        this.profileFetchFailed = true;
      },
    });
  }

  deleteById(id?: number): void {
    this.adService.delete$(id).subscribe({
      next: () => {
        let objIndex = this.profile?.ads?.findIndex(x => x.id == id);
        this.profile?.ads?.splice(objIndex as number, 1)
      }
    });
  };

  deactivateById(id?: number): void {
    this.adService.deactivate$(id).subscribe({
      next: () => {
        let adIndex = this.profile?.ads?.findIndex(x => x.id == id);
        this.profile?.ads?.map(function(ad, objIndex, array) {
          if(objIndex === adIndex){
            array[objIndex].isActive = false;
          }
        });
      }
    });
  }
}
