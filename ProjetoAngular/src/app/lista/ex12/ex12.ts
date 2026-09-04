import { Component } from '@angular/core';

@Component({
  selector: 'app-ex12',
  standalone: false,
  templateUrl: './ex12.html',
  styleUrl: './ex12.scss',
})
export class Ex12 {
  nomeAluno = '';
  quantidadeDeDisciplinas = 1;
  mensagem: string = '';

  aumentarDeDisciplinas() {
  this.quantidadeDeDisciplinas++;
}
  diminuirDeDisciplinas() {
  if (this.quantidadeDeDisciplinas > 1) {
    this.quantidadeDeDisciplinas--;
  }
}

 realizarMatricula() {
  this.mensagem = `Aluno: ${this.nomeAluno}, Quantidade de disciplinas: ${this.quantidadeDeDisciplinas}`;
}

}
