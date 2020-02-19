import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectivePresentationComponent } from './directive-container/directive-presentation/directive-presentation';


const routes: Routes = [
  {
    path:'', component: DirectivePresentationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicRoutingModule { }
