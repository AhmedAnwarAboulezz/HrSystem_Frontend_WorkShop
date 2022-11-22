import { CoreModule } from './../../../core/core.module';
import { AuthGuard } from '../../../guards/auth-guard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material-module';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';

@NgModule({
  declarations: [ EmployeesComponent, EmployeeComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    UserManagementRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    CoreModule,
    MatPasswordStrengthModule,
    SharedModule
  ],
  providers: [AuthGuard],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [   
    EmployeeComponent
  ],
  exports: [EmployeesComponent]
})
export class UserManagementModule {

}
