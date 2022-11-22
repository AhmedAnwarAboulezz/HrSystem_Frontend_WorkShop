import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { AuthGuard } from 'src/app/guards/auth-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { NgxMaskModule } from 'ngx-mask';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { EmployeeManualLogsComponent } from './employee-manual-logs/employee-manual-logs.component';
import { EmployeeManualLogComponent } from './employee-manual-logs/employee-manual-log/employee-manual-log.component';

const COMPONENTS = [EmployeeManualLogsComponent, EmployeeManualLogComponent];
@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AttendanceRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    CoreModule, MatInputModule, MatFormFieldModule,
    NgxMaskModule.forRoot()
  ],
  entryComponents: [COMPONENTS],
  exports: [ReactiveFormsModule, MatInputModule],
  providers: [AuthGuard],
})
export class AttendanceModule { }



