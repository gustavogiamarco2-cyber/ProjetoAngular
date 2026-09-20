import { Component } from '@angular/core';

@Component({
  selector: 'app-ex07',
  standalone: false,
  templateUrl: './ex07.html',
  styleUrl: './ex07.scss',
})
export class Ex07 {

  disciplinas = [
    { nome: 'Matemática', nota: 8 },
    { nome: 'Português', nota: 7 },
    { nome: 'História', nota: 9 },
    { nome: 'Geografia', nota: 6 },
    { nome: 'Ciências', nota: 10 },
    { nome: 'Inglês', nota: 5 }
  ];
}
