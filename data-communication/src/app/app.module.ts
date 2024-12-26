import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentComponent } from './input/parent/parent/parent.component';
import { ParentComponent as OutputParentComponent } from './output/parent/parent/parent.component';
import { ChildComponent } from './input/child/child/child.component';

const routes: Routes = [
  {
    path: '', component: ParentComponent
  },
  {
    path: 'input', component: ParentComponent
  },
  {
    path: 'output', component: OutputParentComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
