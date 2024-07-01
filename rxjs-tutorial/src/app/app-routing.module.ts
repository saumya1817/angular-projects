import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { ObservablesComponent } from './component/observables/observables.component';
import { PromisesComponent } from './component/promises/promises.component';
import { AsyncAwaitComponent } from './component/async-await/async-await.component';

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
    component: AsyncAwaitComponent,
    path: 'promises/async'
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
