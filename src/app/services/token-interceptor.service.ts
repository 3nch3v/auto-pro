import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrowserStorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})

export class TokenInterceptorService implements HttpInterceptor {
  constructor(private readonly storage: BrowserStorageService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.storage.getItem<string>('token')}`,
      },
    });
    return next.handle(req);
  }
}
