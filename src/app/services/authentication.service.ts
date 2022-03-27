import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { LoginResponse } from '../dtos/user/LoginResponse';
import { Loginrequest } from '../dtos/user/LoginRequest';
import { RegisterRequest } from '../dtos/user/RegisterRequest';
import { Profile } from '../dtos/user/Profile';
import { MessageResponse } from '../dtos/user/MesssageResponse';
import { BrowserStorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService   {
  constructor(private readonly httpClient: HttpClient,
              private readonly storage: BrowserStorageService ) { }

    login$(request: Loginrequest): Observable<LoginResponse> {
      return this.httpClient.post(`${environment.host}/users/login`, request);
    }

    register$(request: RegisterRequest): Observable<MessageResponse> {
      return this.httpClient.post(`${environment.host}/users/register`, request);
    }

    profile$(): Observable<Profile> {
      return this.httpClient.get<Profile>(`${environment.host}/users/profile`, { withCredentials: true });
    }

    isAuthenticated(): boolean {
      if(this.storage.getItem<string>('token')) {
        return true;
      }
      return false;
    }

    logout(){
      //delete token
    }
} 
