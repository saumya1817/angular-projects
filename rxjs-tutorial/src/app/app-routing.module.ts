import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { ObservablesComponent } from './component/observables/observables.component';
import { PromisesComponent } from './component/promises/promises.component';

const routes: Routes = [
  {
    component: HeaderComponent,
    path: 'home'
  },
  {
    component: ObservablesComponent,
    path: 'observables'
  },
  {
    component: PromisesComponent,
    path: 'promises'
  },
  {
    path: '**',
    redirectTo: 'promises'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
