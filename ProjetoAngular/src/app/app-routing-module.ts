import { LocationUpgradeModule } from '@angular/common/upgrade';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro-module').then(m => m.CadastroModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
