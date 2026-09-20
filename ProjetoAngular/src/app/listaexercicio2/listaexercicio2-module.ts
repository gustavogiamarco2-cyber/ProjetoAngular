import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Listaexercicio2RoutingModule } from './listaexercicio2-routing-module';

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

@NgModule({
  declarations: [
    Ex01,
    Campotexto,
    Ex02,
    Ex03,
    Ex04,
    Ex05,
    Ex06,
    Ex07,
    Ex08,
    Ex09,
    Ex10,
    Ex11,
    Ex12,
    Ex13,
    Ex14,
  ],

  imports: [CommonModule, FormsModule, Listaexercicio2RoutingModule],
})
export class Listaexercicio2Module {}
