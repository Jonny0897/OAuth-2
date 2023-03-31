import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DemoComponent } from './components/demo/demo.component';

const routes: Routes = [
  { path:'', component: LoginComponent , children: [
    { path: 'prova', component: DemoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LoginRoutingModule { }
