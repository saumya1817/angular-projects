import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabContainerComponent } from './tabs/tab-container/tab-container.component';

const routes: Routes = [
  {
    path: '', component: TabContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
