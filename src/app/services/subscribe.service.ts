import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { MessageResponse } from '../dtos/user/MesssageResponse';
import { SubscribeRequest } from '../dtos/user/SubscribeRequest';
import { ISubscribeService } from './contracts/ISubscribeService';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService implements ISubscribeService {

  constructor(private readonly httpClient: HttpClient) { }

  subscribe$(request: SubscribeRequest) : Observable<MessageResponse> {
    return this.httpClient.post(`${environment.host}/users/subscribe`, request);
  };
}
