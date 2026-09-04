import { Component } from '@angular/core';

@Component({
  selector: 'app-ex10',
  standalone: false,
  templateUrl: './ex10.html',
  styleUrl: './ex10.scss',
})
export class Ex10 {
   usuario: string = '';
   senha: string = '';

   mensagem: string = '';

  entrar() {
    this.mensagem = 'Seja bem-vindo! Login realizado com sucesso, ' + this.usuario + '!';
  }
}
