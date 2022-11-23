import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BaseEditComponent } from 'src/app/component/base/components/BaseEditComponent';
import { Shell } from 'src/app/component/shell';
import { Employee, EmployeeDepartments } from 'src/app/models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent extends BaseEditComponent implements OnInit {
  model: Employee = {};
  id: string;
  url = 'Employees/GetAllPaged';
  baseUrl = 'Employees/';
  countries: any[];
  genders: any[];
  departments: any[];
  accessGroups: any[];
  hide = true;
  lookupsFilter: any[];
oldPassword :any;

  get Service(): EmployeeService { return Shell.Injector.get(EmployeeService); }
  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<EmployeeComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    super(dialogRef);
    if (this.data) {
      this.model = this.data;
      this.isNew = false;
    }
    
    


   this.form= this.resetForm(this.model);
  }
  getLookups(){
    this.Service.getLookups().subscribe(data => {
    this.countries = data[0];
    this.genders= data[1];
    this.lookupsFilter=data;
  
  });

}
  ngOnInit() {
    this.getLookups();  
     
  }
  closeConfirmation(result, resetForm?: any) {
    let newmodel =new  Employee() ;
    this.close(result, this.resetForm(newmodel));
  }
  resetForm(model):any{
   let form = this.fb.group({
      id: [model.id],
      code: [model.code, [Validators.required, this.removeSpaces]],
      nameFl: [model.nameFl, [Validators.required]],
      nameSl: [model.nameSl, [Validators.required]],
      phoneNumber: [model.phoneNumber, [Validators.required, Validators.pattern('[- +()0-9]+')]],
      countryId: [model.countryId, [Validators.required]],
      genderId: [model.genderId, [Validators.required]],    
      birthDate: [model.birthDate, [Validators.required]],    
      email: [model.email],
      address: [model.address],
      hasManager:[model.managerId != undefined && model.managerId != null ? true : false],
      managerId:[model.managerId]
    }
    // , {
    //   validator: (group) => {
    //     if (group.controls.isUsePassword.value === true) {
    //        Validators.required((group.controls.password));
    //     }
    //     if (group.controls.isUseSmartCard.value === true) {
    //        Validators.required((group.controls.smartCardNumber));
    //     }
    //   }
    // }
    );
    return form;

  }

  
   onCheckChange(event,formcontrol){
    if (!event.checked) {
      this.form.controls[formcontrol].setValue("");
      this.form.get(formcontrol).setValidators([]);
      this.form.get(formcontrol).updateValueAndValidity();
    }
    else{
      this.form.get(formcontrol).setValidators([Validators.required]);
      this.form.get(formcontrol).updateValueAndValidity();
      
    
    }
   }

   onEmployeeCancel() {
    this.form.controls['managerId'].setValue(null);
  }
}
