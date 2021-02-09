import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LotterydrawComponent } from './lotterydraw/lotterydraw.component';

import { HomeComponent } from './home/home.component';


const routes: Routes = [

  { path: 'about', component: AboutComponent },
  { path: 'Play', component: LotterydrawComponent },
  { path: 'Home', component: HomeComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
