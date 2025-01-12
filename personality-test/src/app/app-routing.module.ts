import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalityTestComponent } from './components/features/personality-test/personality-test.component';
import { HomeComponent } from './components/features/home/home.component';
import { AboutComponent } from './components/features/about/about.component';
import { ContactComponent } from './components/features/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'personalityTest', component: PersonalityTestComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
