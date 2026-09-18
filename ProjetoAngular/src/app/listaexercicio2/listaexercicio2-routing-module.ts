import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Ex01 } from './ex01/ex01';
import { Campotexto } from './campotexto/campotexto';
import { Ex02 } from './ex02/ex02';
import { Ex03 } from './ex03/ex03';
import { Ex04 } from './ex04/ex04';

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
  },
  {
    path: 'ex03',
    component: Ex03
  },
  {
    path: 'ex04',
    component: Ex04
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Listaexercicio2RoutingModule {}
