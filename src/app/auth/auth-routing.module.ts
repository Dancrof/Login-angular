import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { ResertPasswordComponent } from './pages/resert-password/resert-password.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: '',
        component: AuthComponent
      },
      {
        path: 'reset-pasword',
        component: ResertPasswordComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
