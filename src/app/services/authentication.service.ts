import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { LoginResponse } from '../dtos/user/LoginResponse';
import { Loginrequest } from '../dtos/user/LoginRequest';
import { RegisterRequest } from '../dtos/user/RegisterRequest';
import { ProfileResponse } from '../dtos/user/ProfileResponse';
import { MessageResponse } from '../dtos/user/MesssageResponse';
import { BrowserStorageService } from './storage.service';
import { IAuthenticationService } from './contracts/IAuthenticationService';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService implements IAuthenticationService  {
  constructor(private readonly httpClient: HttpClient,
              private readonly storage: BrowserStorageService,
              private readonly router: Router ) { }

    login$(request: Loginrequest): Observable<LoginResponse> {
      return this.httpClient.post(`${environment.host}/users/login`, request);
    }

    register$(request: RegisterRequest): Observable<MessageResponse> {
      return this.httpClient.post(`${environment.host}/users/register`, request);
    }

    profile$(): Observable<ProfileResponse> {
      return this.httpClient.get<ProfileResponse>(`${environment.host}/users/profile`);
    }

    isAuthenticated(): boolean {
      if(this.storage.getItem<string>('token')) {
        return true;
      }
      return false;
    }

    logout(): void {
      this.storage.removeItemByKey('email');
      this.storage.removeItemByKey('token');
      this.router.navigate(['/login']);
    }
} 
