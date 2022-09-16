import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ListarComponent } from './componentes/persona/listar/listar.component';
import { AddComponent } from './componentes/persona/add/add.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: 'home', component: HomeComponent},
  {path: 'persona', component: ListarComponent},
  {path: 'persona/add', component: AddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
