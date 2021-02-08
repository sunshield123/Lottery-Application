import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LotterydrawComponent } from './lotterydraw/lotterydraw.component';


const routes: Routes = [

  { path: 'about', component: AboutComponent },
  { path: 'Play', component: LotterydrawComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
