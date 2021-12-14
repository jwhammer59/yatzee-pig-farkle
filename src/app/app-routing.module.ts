import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarkleComponent } from './components/farkle/farkle.component';
import { HomeComponent } from './components/home/home.component';
import { PigComponent } from './components/pig/pig.component';
import { YahtzeeComponent } from './components/yahtzee/yahtzee.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pig', component: PigComponent },
  { path: 'yahtzee', component: YahtzeeComponent },
  { path: 'farkle', component: FarkleComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
