import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayrollRoutingModule } from './payroll-routing.module';
// Components
import { SetupWizardComponent } from './components/setup-wizard/setup-wizard.component';

@NgModule({
  imports: [
    CommonModule,
    PayrollRoutingModule
  ],
  declarations: [SetupWizardComponent]
})
export class PayrollModule { }
