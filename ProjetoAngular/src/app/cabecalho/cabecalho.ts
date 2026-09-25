import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.scss',
  standalone: false
})
export class Cabecalho {

  @Input()
  topo = 'Loja Angular 2';
}