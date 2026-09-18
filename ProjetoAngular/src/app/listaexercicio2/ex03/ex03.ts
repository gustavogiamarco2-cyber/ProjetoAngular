import { Component } from '@angular/core';

@Component({
  selector: 'app-ex03',
  standalone: false,
  templateUrl: './ex03.html',
  styleUrl: './ex03.scss',
})
export class Ex03 {
   idade: number = 0;

  aumentarIdade() {
    this.idade++;
  }

  diminuirIdade() {
    if (this.idade > 0) {
      this.idade--;
    }
  }
}
