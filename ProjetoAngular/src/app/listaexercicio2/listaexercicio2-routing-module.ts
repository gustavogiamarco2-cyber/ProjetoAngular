import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Ex01 } from './ex01/ex01';
import { Campotexto } from './campotexto/campotexto';
import { Ex02 } from './ex02/ex02';

const routes: Routes = [
  {
    path: 'ex01',
    component: Ex01
  },
  {
    path: 'campotexto',
    component: Campotexto
  },
  {
    path: 'ex02',
    component: Ex02
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Listaexercicio2RoutingModule {}
