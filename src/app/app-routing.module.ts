import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { AuthGuard } from './guards/auth-guard.service';
import { NotfoundComponent } from './component/notfound/notfound.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: NotfoundComponent,
    pathMatch: 'full',
    
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'main',
    loadChildren: 'src/app/component/main/main.module#MainModule',
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
