import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomPreloadStrategyService } from './services/custom-preload-strategy.service';

const routes: Routes = [
  { path: 'login',
    loadChildren: (async () => ((await import('./modules/form-login/login.module')).LoginModule)), data: { preload: true }
  },
  {
    path: 'dashboard',
    loadChildren: (async () => ((await import('./modules/form-login/login.module')).LoginModule)), data: { preload: true, delay: 5000 }
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadStrategyService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
