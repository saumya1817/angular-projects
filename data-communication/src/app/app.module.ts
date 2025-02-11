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
import { ContentParentComponent } from './contentchild/content-parent/content-parent.component';
import { ContentChildComponent } from './contentchild/content-child/content-child.component';
import { ServiceParentComponent } from './service-shared-state/service-parent/service-parent.component';
import { ServiceChildComponent } from './service-shared-state/service-child/service-child.component';
import { SetterParentComponent } from './input-setter/setter-parent/setter-parent.component';
import { SetterChildComponent } from './input-setter/setter-child/setter-child.component';

const routes: Routes = [
  {
    path: '', component: ParentComponent
  },
  {
    path: 'output', component: OutputParentComponent
  },
  {
    path: 'viewchild', component: ViewchildParentComponent
  },
  {
    path: 'contentchild', component: ContentParentComponent
  },
  {
    path: 'service', component: ServiceParentComponent
  },
  {
    path: 'input-setter', component: SetterParentComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    OutputChildComponent,
    OutputParentComponent,
    ViewchildParentComponent,
    ViewchildChildComponent,
    ContentParentComponent,
    ContentChildComponent,
    ServiceParentComponent,
    ServiceChildComponent,
    SetterParentComponent,
    SetterChildComponent
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
