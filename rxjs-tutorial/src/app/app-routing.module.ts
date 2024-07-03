import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { ObservablesComponent } from './component/observables/observables.component';
import { PromisesComponent } from './component/promises/promises.component';
import { AsyncAwaitComponent } from './component/async-await/async-await.component';
import { ListComponent } from './component/observables/list/list.component';
import { FromEventComponent } from './component/observables/from-event/from-event.component';
import { IntervalComponent } from './component/observables/interval/interval.component';

const routes: Routes = [
  {
    component: HeaderComponent,
    path: 'home'
  },
  {
    component: ObservablesComponent,
    path: 'observables',
    children: [
      {component: ListComponent, path: ''},
      {component: FromEventComponent, path: 'fromEvent'},
      {component: IntervalComponent, path: 'interval'},

    ]
  },
  {
    component: PromisesComponent,
    path: 'promises'
  },
  {
    component: AsyncAwaitComponent,
    path: 'async'
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
