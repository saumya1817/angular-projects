import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalityTestComponent } from './components/features/personality-test/personality-test.component';
import { HomeComponent } from './components/features/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'personalityTest', component: PersonalityTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
