import { Injectable } from '@angular/core';
import { IAdService } from './contracts/IAdService';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AdResponse } from '../dtos/ad/AdResponse';
import { Observable } from 'rxjs/internal/Observable';
import { CreateAdRequest } from '../dtos/ad/CreateAdRequest';
import { MessageResponse } from '../dtos/user/MesssageResponse';
import { DetailsResponse } from '../dtos/ad/DetailsResponse';
import { AllAdsResponse } from '../dtos/ad/AllAdsResponse';

@Injectable({
  providedIn: 'root'
})

export class AdService implements IAdService {

  constructor(private readonly httpClient: HttpClient) { }
    
    getRandomAds$() : Observable<AdResponse[]> {
      return this.httpClient.get<AdResponse[]>(`${environment.host}/cars/random`, { withCredentials: false });
    };

    getAllAds$(page?: number) : Observable<AllAdsResponse> {
      return this.httpClient.get<AllAdsResponse>(`${environment.host}/cars/all/${page}`, { withCredentials: false });
    };

    getById$(id?: number) : Observable<DetailsResponse> {
      return this.httpClient.get<DetailsResponse>(`${environment.host}/cars/details/${id}`, { withCredentials: false });
    };

    create$(request: CreateAdRequest): Observable<MessageResponse> {
      return this.httpClient.post(`${environment.host}/cars/create`, request);
    };

    delete$(id?: number): Observable<MessageResponse> {
      return this.httpClient.delete(`${environment.host}/cars/delete/${id}`);
    };

    deactivate$(id?: number): Observable<MessageResponse> {
      return this.httpClient.get(`${environment.host}/cars/deactivate/${id}`);
    };
}