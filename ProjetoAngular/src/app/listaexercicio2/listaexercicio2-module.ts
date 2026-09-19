import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Listaexercicio2RoutingModule } from './listaexercicio2-routing-module';
import { Ex01 } from './ex01/ex01';
import { Campotexto } from './campotexto/campotexto';
import { Ex02 } from './ex02/ex02';
import { Ex03 } from './ex03/ex03';
import { Ex04 } from './ex04/ex04';
import { Ex05 } from './ex05/ex05';
import { Ex06 } from './ex06/ex06';

@NgModule({
  declarations: [Ex01, Campotexto, Ex02, Ex03, Ex04, Ex05, Ex06],
  imports: [CommonModule, Listaexercicio2RoutingModule],
})
export class Listaexercicio2Module {}
