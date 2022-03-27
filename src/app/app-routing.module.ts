import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from "./core/pages/home-page/home-page.component";
import { NotFoundComponent } from "./core/pages/not-found/not-found.component";

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
      path: '**',
      component: NotFoundComponent
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);


