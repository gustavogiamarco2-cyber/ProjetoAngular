import { Component } from '@angular/core';

@Component({
  selector: 'app-ex3',
  standalone: false,
  templateUrl: './ex3.html',
  styleUrl: './ex3.scss',
})
export class Ex3 {
    imagemProduto = 'https://picsum.photos/300/200';
    descricaoImagem = 'Imagem de um produto';
}
