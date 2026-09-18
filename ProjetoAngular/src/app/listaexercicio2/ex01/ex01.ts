import { Component } from '@angular/core';

@Component({
  selector: 'app-ex01',
  standalone: false,
  templateUrl: './ex01.html',
  styleUrl: './ex01.scss',
})
export class Ex01 {

   mensagemVisivel: boolean = false;

  entrar() {
    this.mensagemVisivel = !this.mensagemVisivel;
  }
}
