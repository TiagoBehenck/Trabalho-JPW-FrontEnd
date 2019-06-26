import { AdicionarComponent } from './adicionar-animal/adicionar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalComponent } from './animal/animal.component';
import { ProprietarioComponent } from './proprietario/proprietario.component';
import { AdicionarproprietarioComponent } from './adicionar-proprietario/adicionarproprietario.component';

const routes: Routes = [
  // Animal
  { path: '', component: AnimalComponent },
  { path: 'animal', component: AnimalComponent },
  { path: 'animal/adicionar', component: AdicionarComponent },
  { path: 'animal/atualizar/:id', component: AdicionarComponent },
  // Proprietário
  { path: 'proprietario', component: ProprietarioComponent },
  { path: 'proprietario/adicionar', component: AdicionarproprietarioComponent},
  { path: 'proprietario/atualizar/:id', component: AdicionarproprietarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
