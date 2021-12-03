import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarkleComponent } from './components/farkle/farkle.component';
import { HomeComponent } from './components/home/home.component';
import { PigComponent } from './components/pig/pig.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pig', component: PigComponent },
  { path: 'farkle', component: FarkleComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
