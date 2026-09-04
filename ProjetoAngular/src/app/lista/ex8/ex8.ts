import { Component } from '@angular/core';

@Component({
  selector: 'app-ex8',
  standalone: false,
  templateUrl: './ex8.html',
  styleUrl: './ex8.scss',
})
export class Ex8 {
  Produto = 'Mouse Gamer';
  Preco = 150;
  Quantidade = 2;

   get total() {
    return this.Preco * this.Quantidade;
  }
}
