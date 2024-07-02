import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ObservablesComponent } from './component/observables/observables.component';
import { PromisesComponent } from './component/promises/promises.component';
import { AsyncAwaitComponent } from './component/async-await/async-await.component';
import { FromEventComponent } from './component/observables/from-event/from-event.component';
import { ListComponent } from './component/observables/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ObservablesComponent,
    PromisesComponent,
    AsyncAwaitComponent,
    FromEventComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
