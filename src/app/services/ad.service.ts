import { Injectable } from '@angular/core';
import { IAdService } from './contracts/IAdService';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Ad } from '../dtos/ad/Ad';
import { Observable } from 'rxjs/internal/Observable';
import { CreateAdRequest } from '../dtos/ad/CreateAdRequest';
import { MessageResponse } from '../dtos/user/MesssageResponse';

@Injectable({
  providedIn: 'root'
})

export class AdService implements IAdService {

  constructor(private readonly httpClient: HttpClient,
              private readonly router: Router) { }
    
    getRandomAds$() : Observable<Ad[]> {
      return this.httpClient.get<Ad[]>(`${environment.host}/ads/random`, { withCredentials: true });
    };

    register$(request: CreateAdRequest): Observable<MessageResponse> {
      return this.httpClient.post(`${environment.host}/ads/create`, request);
    };
}