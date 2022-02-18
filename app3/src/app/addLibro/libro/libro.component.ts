import { Component, OnInit } from '@angular/core';
import { ILibro } from 'src/app/Libro';
import { ProductService } from 'src/app/product.service';
@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.scss']
})
export class LibroComponent implements OnInit {

  constructor(private productService: ProductService) { }
  autor:string="";
  titulo:string="";
  contenido:string="";
  async onClick() {
    
    
    
    console.log({idLibro:null,autorLibro:this.autor,tituloLibro:this.titulo, comentarioLibro:this.contenido})
    await this.productService.postLibro({autorLibro:this.autor,tituloLibro:this.titulo, comentarioLibro:this.contenido});
  }
  ngOnInit(): void {
  }

}
