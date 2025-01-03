import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseContainerComponent } from './base-container/base-container.component';

const routes: Routes = [
  { path: '', component: BaseContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
