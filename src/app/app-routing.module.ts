import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WizardComponent } from './components/wizard/wizard.component';
import { RelojComponent } from './components/reloj/reloj.component';

const routes: Routes = [
  { path: 'reloj', component: RelojComponent },
  { path: 'wizard', component: WizardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
