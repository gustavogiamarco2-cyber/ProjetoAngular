import { Component } from '@angular/core';

@Component({
selector: 'app-ex06',
standalone: false,
templateUrl: './ex06.html',
styleUrl: './ex06.scss',
})
export class Ex06 {

listaInicial = [
{ id: 1, nome: 'João', idade: 25 },
{ id: 2, nome: 'Maria', idade: 30 },
{ id: 3, nome: 'Pedro', idade: 20 },
{ id: 4, nome: 'Ana', idade: 28 },
{ id: 5, nome: 'Carlos', idade: 22 }
];

nomes = [...this.listaInicial];

removerNomes() {
this.nomes.pop();
}

limparNomes() {
this.nomes = [];
}

restaurarNomes() {
this.nomes = [...this.listaInicial];
}
}
