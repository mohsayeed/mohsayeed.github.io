import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { StudentsPaymentsComponent } from './students-payments/students-payments.component';
import { TeachersInfoComponent } from './teachers-info/teachers-info.component';
import { RouterModule } from '@angular/router';
import { BootstrapModule } from '../core/module/bootstrap.module';
import { SharedModule } from '../shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';

const components=[
  DashboardComponent,
  ReportsComponent,
  StudentsPaymentsComponent,
  TeachersInfoComponent
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    RouterModule,
    BootstrapModule,
    SharedModule,
    AgGridModule.withComponents([]),
    FormsModule
  ],
  exports:components
})
export class FeaturesModule { }
