import { Injectable } from '@angular/core';
import { IAdService } from './contracts/IAdService';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AdResponse } from '../dtos/ad/AdResponse';
import { Observable } from 'rxjs/internal/Observable';
import { CreateAdRequest } from '../dtos/ad/CreateAdRequest';
import { MessageResponse } from '../dtos/user/MesssageResponse';
import { AllAdsResponse } from '../dtos/ad/AllAdsresponse';

@Injectable({
  providedIn: 'root'
})

export class AdService implements IAdService {

  constructor(private readonly httpClient: HttpClient) { }
    
    getRandomAds$() : Observable<AdResponse[]> {
      return this.httpClient.get<AdResponse[]>(`${environment.host}/cars/random`, { withCredentials: false });
    };

    getAllAds$() : Observable<AllAdsResponse> {
      return this.httpClient.get<AllAdsResponse>(`${environment.host}/cars/all`, { withCredentials: false });
    };

    create$(request: CreateAdRequest): Observable<MessageResponse> {
      return this.httpClient.post(`${environment.host}/cars/create`, request);
    };
}