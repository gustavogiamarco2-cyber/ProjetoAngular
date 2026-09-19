import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex03 } from './listaexercicio2/ex03/ex03';
import { Ex04 } from './listaexercicio2/ex04/ex04';


const routes: Routes = [
{
  path:'categoria',
  loadChildren: () => import('./categoria/categoria-module').then(m => m.CategoriaModule)
},

  {
  path:'produto',
  loadChildren: () => import('./produto/produto-module').then(m => m.ProdutoModule)
},
  {
    path: 'lista',
    loadChildren: () => import('./lista/lista-module').then(m => m.ListaModule)
},
{
  path: 'listaexercicio2',
  loadChildren: () => import('./listaexercicio2/listaexercicio2-module').then(m => m.Listaexercicio2Module) 
},
{
  path: 'ex03',
  component: Ex03
},
{
  path: 'ex04',
  component: Ex04
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
