import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentComponent } from './input/parent/parent/parent.component';
import { OutputChildComponent } from './output/output-child/output-child.component';
import { OutputParentComponent } from './output/output-parent/output-parent.component';
import { ViewchildParentComponent } from './viewchild/viewchild-parent/viewchild-parent.component';
import { ViewchildChildComponent } from './viewchild/viewchild-child/viewchild-child.component';

const routes: Routes = [
  {
    path: '', component: ParentComponent
  },
  {
    path: 'output', component: OutputParentComponent
  },
  {
    path: 'viewchild', component: ViewchildParentComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    OutputChildComponent,
    OutputParentComponent,
    ViewchildParentComponent,
    ViewchildChildComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
