import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { LoginResponse } from '../dtos/user/LoginResponse';
import { Loginrequest } from '../dtos/user/LoginRequest';
import { RegisterRequest } from '../dtos/user/RegisterRequest';
import { Profile } from '../dtos/user/Profile';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService   {

  constructor(private readonly httpClient: HttpClient) { }

    login$(request: Loginrequest): Observable<LoginResponse> {
      return this.httpClient.post(`${environment.host}/users/login`, request);
    }

    register$(request: RegisterRequest): Observable<any> {
      return this.httpClient.post(`${environment.host}/users/register`, request);
    }

    profile$(): Observable<Profile> {
      return this.httpClient.get<Profile>(`${environment.host}/users/profile`, { withCredentials: true });
    }

    isLogged(): boolean {
      //TODO
      return true;
    }

    logout(){
      //delete token
    }
} 
