import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationService } from './services/authentication.service';
import { CoreModule } from './core/core.module';
import { BrowserStorageService } from './services/storage.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { RouterModule } from '@angular/router';
import { TokenInterceptorService } from './services/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule, //forRoot(),
    AuthenticationModule,
    //AdsModule,
  ],
  providers: [
    AuthenticationService,
    BrowserStorageService,
    TokenInterceptorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
