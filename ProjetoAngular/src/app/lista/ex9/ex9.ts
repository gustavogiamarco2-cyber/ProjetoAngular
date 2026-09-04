import { Component } from '@angular/core';
import { not } from 'rxjs/internal/util/not';

@Component({
  selector: 'app-ex9',
  standalone: false,
  templateUrl: './ex9.html',
  styleUrl: './ex9.scss',
})
export class Ex9 {
 
  nomeProduto: string = 'Notebook';
  estoque: number = 5;

  aumentarEstoque() {
    this.estoque++;
  }

  diminuirEstoque() {
    if (this.estoque > 0) {
      this.estoque--;
    }
  }
  
}
