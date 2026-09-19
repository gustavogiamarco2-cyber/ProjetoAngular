import { Component } from '@angular/core';

@Component({
  selector: 'app-ex05',
  standalone: false,
  templateUrl: './ex05.html',
  styleUrl: './ex05.scss',
})
export class Ex05 {

  mostarnomes = true;

    nomes = [
    { id:1 , nome: 'João', idade: 25 },
    { id:2 , nome: 'Maria', idade: 30 },
    { id:3 , nome: 'Pedro', idade: 20 },
    { id:4 , nome: 'Ana', idade: 28 },
    { id: 5, nome: 'Carlos', idade: 22 }
  ];
}
