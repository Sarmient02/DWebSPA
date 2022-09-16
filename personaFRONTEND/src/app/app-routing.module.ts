import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ListarComponent } from './componentes/persona/listar/listar.component';
import { AddComponent } from './componentes/persona/add/add.component';
import { EditComponent } from './componentes/persona/edit/edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: 'home', component: HomeComponent},
  {path: 'persona', component: ListarComponent},
  {path: 'persona/add', component: AddComponent},
  {path: 'persona/edit/:id', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
