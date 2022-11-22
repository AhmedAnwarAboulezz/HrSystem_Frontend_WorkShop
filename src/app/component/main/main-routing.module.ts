import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'usermanagement',
        pathMatch: 'full'
      },
      {
        path: 'usermanagement',
        loadChildren: 'src/app/component/main/user-management/user-management.module#UserManagementModule'
      },      
      {
        path: 'attendance',
        loadChildren: 'src/app/component/main/attendance/attendance.module#AttendanceModule'
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
