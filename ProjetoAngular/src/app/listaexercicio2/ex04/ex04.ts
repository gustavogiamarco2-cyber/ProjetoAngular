import { Component } from '@angular/core';

@Component({
  selector: 'app-ex04',
  standalone: false,
  templateUrl: './ex04.html',
  styleUrl: './ex04.scss',
})
export class Ex04 {

   nomeProduto = 'Teclado';
  quantidadeEstoque = 5;

  adicionarProduto() {
    this.quantidadeEstoque++;
  }

  removerProduto() {
    if (this.quantidadeEstoque > 0) {
      this.quantidadeEstoque--;
    }
  }
}
