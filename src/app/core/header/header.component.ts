import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed = true;
  constructor(private readonly authService: AuthenticationService) { }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  authView(): boolean {
    return this.authService.isAuthenticated();
  }

  logout(): void {
    this.authService.logout();
    this.toggleCollapsed();
  }
}
