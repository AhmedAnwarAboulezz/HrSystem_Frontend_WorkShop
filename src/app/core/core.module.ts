
import { AuditField, ExcludeItemPipe, FilterPipe, GetCheckedItemPipe, RoundPipe, ShowTimeSpanPipe } from './../pipes/filter.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Angular Material
import { MaterialModule } from '../material-module';
import { LoadingComponent } from './loading/loading.component';
import { TreeModule } from 'angular-tree-component';
import { TableDetailsComponent } from './table-details/table-details.component';
import { DropdownTableComponent } from './dropdown-table/dropdown-table.component';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS, MatPaginatorIntl } from '@angular/material';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { RequiredIfDirective } from '../directives/required-if.directive';
import { TranslateModule } from '@ngx-translate/core';
import { DialogService } from 'primeng/api';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    LoadingComponent,
    FilterPipe,
    ShowTimeSpanPipe,
    AuditField,
    ExcludeItemPipe,
    GetCheckedItemPipe,
    RoundPipe,
    TableDetailsComponent,
    DropdownTableComponent,
    RequiredIfDirective,
    LoadingSpinnerComponent
 ]
  ,
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    TreeModule.forRoot(),
    TranslateModule
  ],
  exports: [
    CommonModule,
    LoadingComponent,
    FilterPipe,
    ShowTimeSpanPipe,
    AuditField,
    ExcludeItemPipe,
    GetCheckedItemPipe,
    RoundPipe,
    TableDetailsComponent,
    DropdownTableComponent,
    RequiredIfDirective,
    TranslateModule,
    LoadingSpinnerComponent
    
  ],
  providers: [
    DialogService,MatPaginatorIntl
  ]
})
export class CoreModule { }
