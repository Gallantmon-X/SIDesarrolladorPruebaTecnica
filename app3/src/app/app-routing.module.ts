import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ComentariosComponent } from './Comment/comentarios/comentarios.component';
import { LibroComponent } from './addLibro/libro/libro.component';
import { ListadeLibrosComponent } from './lista/listade-libros/listade-libros.component';

const routes: Routes = [
  { path: '', component: AppComponent },
   {path: 'home', component:  ListadeLibrosComponent },
  { path: 'addLibro', component: LibroComponent },
  { path: 'Comments', component: ComentariosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
