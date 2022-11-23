import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { BaseListComponent } from 'src/app/component/base/BaseListComponent';
import { Shell } from 'src/app/component/shell';
import { ActionsInterface } from 'src/app/shared/components/data-table/models/actions.interface';
import { ColumnsInterface } from 'src/app/shared/components/data-table/models/columns.interface';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent extends BaseListComponent implements OnInit {
  get Service(): EmployeeService { return Shell.Injector.get(EmployeeService); }
  constructor(public route: ActivatedRoute, public dialog: MatDialog) {
    super(dialog);  
  }


  ngOnInit() {
    this.getLookups();
  }
  tableData = {
    name: 'employees.title',
    componentName: 'EmployeesComponent'
  };
  public columns: ColumnsInterface[] = [
    {
      field: 'code',
      header: 'employees.employeeNumber',
      filterMode: 'text',
      selector: true,
      print: true,
      sort: true
    },
    {
      field: 'nameFl',
      header: 'employees.nameFl',
      filterMode: 'text',
      selector: true,
      print: true,
      sort: true
    },
    {
      field: 'nameSl',
      header: 'employees.nameSl',
      filterMode: 'text',
      selector: true,
      print: true,
      sort: true
    },
    {
      field: 'phoneNumber',
      header: 'employees.phone',
      filterMode: 'text',
      selector: true,
      print: true,
      sort: true
    },
    {
      field: 'address',
      header: 'employees.address',
      filterMode: 'text',
      selector: true,
      print: true,
      sort: true
    },
    {
      field: 'birthDate',
      header: 'employees.birthDate',
      filterMode: 'date',
      selector: true,
      print: true,
      sort: true
    },
    {
      field: 'field.managerName',
      header: 'employees.managerName',
      filterMode: 'text',
      selector: true,
      print: true,
      sort: true,
      sortName:'manager.nameFl'
    },
    
    
    {
      field: 'field.countryName',
      header: 'employees.country',
      dropdownFilterName: 'countryIds',
      filterMode: 'dropdown',
      selector: true,
      print: true,
      sort: true,
      sortName:'country.nameFl'

    },
    {
      field: 'field.genderName',
      header: 'employees.gender',
      dropdownFilterName: 'genderIds',
      filterMode: 'dropdown',
      selector: true,
      print: true,
      sort: true,
      sortName:'gender.nameFl'

    },

    // {
    //   field: 'isUsePassword',
    //   header: 'employees.isUsePassword',
    //   filterMode: 'check',
      
    //   selector: true ,
    //   print: true,
    //   sort: true     
    // },
    // {
    //   field: 'isUseSmartCard',
    //   header: 'employees.isUseSmartCard',
    //   filterMode: 'check',
      
    //   selector: true ,
    //   print: true,
    //   sort: true     
    // }
    // ,
    // {
    //   field: 'isUseFingerPrint',
    //   header: 'employees.isUseFingerPrint',
    //   filterMode: 'check',
      
    //   selector: true ,
    //   print: true,
    //   sort: true     
    // } ,
    // {
    //   field: 'isFingerPrintAutoMatch',
    //   header: 'employees.isFingerPrintAutoMatch',
    //   filterMode: 'check',
      
    //   selector: true ,
    //   print: true,
    //   sort: true     
    // } ,
    // {
    //   field: 'isUseFace',
    //   header: 'employees.isUseFace',
    //   filterMode: 'check',
      
    //   selector: true ,
    //   print: true,
    //   sort: true     
    // },
    // {
    //   field: 'isFaceAutoMatch',
    //   header: 'employees.isFaceAutoMatch',
    //   filterMode: 'check',
      
    //   selector: true ,
    //   print: true,
    //   sort: true     
    // },
    // {
    //   field: 'isActiveEmployee',
    //   header: 'employees.isActiveEmployee',
    //   filterMode: 'check',
      
    //   selector: true ,
    //   print: true,
    //   sort: true     
    // }
  ];
  public actions: ActionsInterface[] = [
    {
      isEdit: true
    },
    {
      
        name: 'employees.assignemployeegroup',
        icon: 'person_pin',
        isView: true
      
    }
    ,
    {
      isDelete: true
    }
  ];

  getLookups(){
      this.Service.getLookups().subscribe(data => {
        
      this.columns[4].filterDropdown = data[0];
      this.columns[5].filterDropdown = data[1];

    });
  }
  
  addEvent(model: any) {
    super.add(EmployeeComponent, model);
  }
  viewDetail(model: any) {
    super.openViewDetail(EmployeeComponent,model);
   }
}
