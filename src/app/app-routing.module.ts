import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from "./core/pages/home-page/home-page.component";
import { NotFoundComponent } from "./core/pages/not-found/not-found.component";
import { CreateAdComponent } from "./core/pages/create-ad/create-ad.component"
import { AllComponent } from "./core/pages/all/all.component";
import { DetailsComponent } from './core/pages/details/details.component';
import { AuthGuard } from './services/auth.guard.service';

const routes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home',
  },
  {
      path: 'home',
      component: HomePageComponent
  },
  {
    path: 'create',
    canActivate: [AuthGuard],
    component: CreateAdComponent
  },
  {
    path: 'all',
    component: AllComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
      path: '**',
      component: NotFoundComponent
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);