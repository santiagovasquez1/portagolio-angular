import { DetailComponent } from './components/detail/detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { ContactComponent } from './components/contact/contact.component'
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {path:'',component:AboutComponent},
  {path:'sobremi',component:AboutComponent},
  {path:'proyectos',component:ProjectsComponent},
  {path:'crearProjecto',component:CreateProjectComponent},
  {path:'contacto',component:ContactComponent},
  {path:'detalle',component:DetailComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
