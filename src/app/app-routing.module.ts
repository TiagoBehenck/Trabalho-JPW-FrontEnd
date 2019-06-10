import { AdicionarComponent } from './adicionar-animal/adicionar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalComponent } from './animal/animal.component';
import { ProprietarioComponent } from './proprietario/proprietario.component';

const routes: Routes = [
  { path: '', component: AnimalComponent },
  { path: 'adicionar', component: AdicionarComponent },
  { path: 'atualizar/:id', component: AdicionarComponent },
  { path: 'animal', component: AnimalComponent },
  { path: 'proprietario', component: ProprietarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
