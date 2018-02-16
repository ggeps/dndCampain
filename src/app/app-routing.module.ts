import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampainComponent } from './views/campain/campain.component';
import { ControllerComponent } from './views/controller/controller.component';
import { AddCharactersComponent } from './views/add-characters/add-characters.component';

const routes: Routes = [
  {
    path: '',
    component: CampainComponent
  },
  {
    path: 'dm',
    component: ControllerComponent
  },
  {
    path: 'addCharacter',
    component: AddCharactersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
