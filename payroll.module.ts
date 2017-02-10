import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayrollRoutingModule } from './payroll-routing.module';
// ng2-bootstrap
import { TabsModule } from 'ng2-bootstrap/tabs';
// AdminLTE Shell
import { InspiniaShellModule as Shell } from './../../shells/inspinia/inspinia.module';
// Payroll Components
import { SetupWizardComponent } from './components/setup-wizard/setup-wizard.component';
// Company Components imports
import { SharedCompanyModule } from './../company/sharedModule/shared-company.module';

@NgModule({
  imports: [
    CommonModule,
    Shell,
    PayrollRoutingModule,
    SharedCompanyModule,
    TabsModule.forRoot(),
  ],
  declarations: [
    SetupWizardComponent,
  ]
})
export class PayrollModule { }
