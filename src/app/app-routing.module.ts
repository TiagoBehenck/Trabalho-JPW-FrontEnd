import { AdicionarComponent } from './adicionar/adicionar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalComponent } from './animal/animal.component';
import { ProprietarioComponent } from './proprietario/proprietario.component';
import { AtualizarComponent } from './atualizar/atualizar.component';

const routes: Routes = [
  {
    path: '',
    component: AnimalComponent
  },
  {
    path: 'adicionar',
    component: AdicionarComponent
  },
  {
    path: 'atualizar',
    component: AtualizarComponent
  },
  {
    path: 'animal',
    component: AnimalComponent
  },
  {
    path: 'proprietario',
    component: ProprietarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
