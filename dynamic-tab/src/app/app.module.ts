import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabContentComponent } from './tabs/tab-content/tab-content.component';
import { TabContainerComponent } from './tabs/tab-container/tab-container.component';

@NgModule({
  declarations: [
    AppComponent,
    TabContentComponent,
    TabContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
