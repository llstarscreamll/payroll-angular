import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetupWizardComponent } from './components/setup-wizard/setup-wizard.component';

const routes: Routes = [
  {
    path: 'payroll', children: [
      { path: 'setup-wizard', component: SetupWizardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PayrollRoutingModule { }
