import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComentariosComponent } from './Comment/comentarios/comentarios.component';
import { LibroComponent } from './addLibro/libro/libro.component';
import { ListadeLibrosComponent } from './lista/listade-libros/listade-libros.component';

@NgModule({
  declarations: [
    AppComponent,
    ComentariosComponent,
    LibroComponent,
    ListadeLibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
