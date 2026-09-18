import { Component } from '@angular/core';

@Component({
  selector: 'app-ex02',
  standalone: false,
  templateUrl: './ex02.html',
  styleUrl: './ex02.scss',
})
export class Ex02 {

  usuario: string = '';
   usuarioLogado: boolean = false;

  entrar() {
    this.usuarioLogado = !this.usuarioLogado;
  }
}
