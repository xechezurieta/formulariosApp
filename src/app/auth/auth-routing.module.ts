import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResgitroComponent } from './pages/resgitro/resgitro.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'registro', component: ResgitroComponent },
      { path: 'login', component: LoginComponent },
      { path: '**', redirectTo: 'registro' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
