import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampainComponent } from './views/campain/campain.component';
import { ControllerComponent } from './views/controller/controller.component';

const routes: Routes = [
  {
    path: 'cc',
    component: CampainComponent
  },
  {
    path: '',
    component: ControllerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
