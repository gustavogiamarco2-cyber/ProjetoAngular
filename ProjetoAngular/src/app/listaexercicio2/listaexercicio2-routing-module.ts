import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Ex01 } from './ex01/ex01';
import { Campotexto } from './campotexto/campotexto';
import { Ex02 } from './ex02/ex02';
import { Ex03 } from './ex03/ex03';
import { Ex04 } from './ex04/ex04';
import { Ex05 } from './ex05/ex05';
import { Ex06 } from './ex06/ex06';
import { Ex07 } from './ex07/ex07';
import { Ex08 } from './ex08/ex08';
import { Ex09 } from './ex09/ex09';
import { Ex10 } from './ex10/ex10';
import { Ex11 } from './ex11/ex11';
import { Ex12 } from './ex12/ex12';
import { Ex13 } from './ex13/ex13';
import { Ex14 } from './ex14/ex14';

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
  },
  {
    path: 'ex05',
    component: Ex05
  },
  {
    path: 'ex06',
    component: Ex06
  },
  {
    path: 'ex07',
    component: Ex07
  },
  {
    path: 'ex08',
    component: Ex08
  },
  {
    path: 'ex09',
    component: Ex09
  },
  {
    path: 'ex10',
    component: Ex10
  },
  {
    path: 'ex11',
    component: Ex11
  },
  {
    path: 'ex12',
    component: Ex12
  },
  {
    path: 'ex13',
    component: Ex13
  },
  {
    path: 'ex14',
    component: Ex14
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Listaexercicio2RoutingModule {}
