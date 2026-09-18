import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Listaexercicio2RoutingModule } from './listaexercicio2-routing-module';
import { Ex01 } from './ex01/ex01';
import { Campotexto } from './campotexto/campotexto';
import { Ex02 } from './ex02/ex02';

@NgModule({
  declarations: [Ex01, Campotexto, Ex02],
  imports: [CommonModule, Listaexercicio2RoutingModule],
})
export class Listaexercicio2Module {}
