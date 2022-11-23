import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { BaseListComponent } from 'src/app/component/base/BaseListComponent';
import { Shell } from 'src/app/component/shell';
import { ActionsInterface } from 'src/app/shared/components/data-table/models/actions.interface';
import { ColumnsInterface } from 'src/app/shared/components/data-table/models/columns.interface';
import { EmployeeManualLogComponent } from './employee-manual-log/employee-manual-log.component';
import { ManualLogsService } from './Services/manualLogs.service';

@Component({
  selector: 'app-employee-manual-logs',
  templateUrl: './employee-manual-logs.component.html',
  styleUrls: ['./employee-manual-logs.component.scss']
})

export class EmployeeManualLogsComponent extends BaseListComponent implements OnInit {

  get Service(): ManualLogsService { return Shell.Injector.get(ManualLogsService); }
  constructor(public route: ActivatedRoute, public dialog: MatDialog) {
    super(dialog);  
  }

  tableData = {
    name: 'employeeLogManual.employeeLogManual',
    componentName: 'EmployeeManualLogsComponent'
  };
  public columns: ColumnsInterface[] = [
    {
      field: 'employeeCode',
      header: 'employeeLogManual.employeeNumber',
      filterMode: 'text',
      selector: true,
      print: true,
      sort: true,
      sortName:'employee.code'
    },
    {
      field: 'nameFl',
      header: 'employeeLogManual.employeeName',
      filterMode: 'text',
      selector: true,
      print: true,
      sort: true,      
      sortName:'employee.name'
    },
    // {
    //   field: 'field.logTypeName',
    //   header: 'employeeLogManual.logType',
    //   dropdownFilterName: 'logTypeIds',
    //   filterMode: 'dropdown',
    //   selector: true,
    //   print: true,
    //   sort: true,
    //   sortName:'logType.LogTypeNameEn'
    // },
    {
      field: 'dayDate',
      printField: 'dayDateStr',
      header: 'employeeLogManual.logDate',
      filterMode: 'date',
      selector: true,
      print: true,
      sort: true
    },
    {
      field: 'signInTime',
      header: 'employeeLogManual.logTime',
      filterMode: 'time',
      selector: true,
      print: true,
      sort: true
    },
    {
      field: 'signOutTime',
      header: 'employeeLogManual.logTime',
      filterMode: 'time',
      selector: true,
      print: true,
      sort: true
    },
  ];
  public actions: ActionsInterface[] = [
    {
      isEdit: true
    }
    ,
    {
      isDelete: true
    }
  ];
  ngOnInit(): void {
    this.getlogtype();
  }
  getlogtype() {
    this.Service.getLogtypes().subscribe(data => {
      this.columns[2].filterDropdown = data;
    });
  }
  addEvent(model: any) {
    super.add(EmployeeManualLogComponent, model);
  }
}
