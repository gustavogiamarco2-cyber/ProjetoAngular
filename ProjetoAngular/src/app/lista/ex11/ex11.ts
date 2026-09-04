import { Component } from '@angular/core';

@Component({
  selector: 'app-ex11',
  standalone: false,
  templateUrl: './ex11.html',
  styleUrl: './ex11.scss',
})
export class Ex11 {
   nomeProduto: string = 'Mouse Gamer';
   preco: number = 120;
   quantidade: number = 1;
   
   mensagem: string = '';

   aumentarQuantidade() {
      this.quantidade++;
   }

   diminuirQuantidade() {
      if (this.quantidade > 1) {
         this.quantidade--;
      }
   }

    adicionarAoCarrinho() {
      const total = this.preco * this.quantidade;
      this.mensagem = `Produto: ${this.nomeProduto}, Quantidade: ${this.quantidade}, Total: R$ ${total.toFixed(2)}`;
   }   
} 
