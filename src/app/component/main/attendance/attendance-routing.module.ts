import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeManualLogsComponent } from './employee-manual-logs/employee-manual-logs.component';




const routes: Routes = [
  {
    path: '',
    redirectTo: 'employee-manual-logs',
    pathMatch: 'full'
  },
  {
    path: 'employee-manual-logs',
    component: EmployeeManualLogsComponent,
    pathMatch: 'full',
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AttendanceRoutingModule { }
