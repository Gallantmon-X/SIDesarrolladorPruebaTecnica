import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Observable } from 'rxjs';
import { ILibro } from 'src/app/Libro';
import { ProductService } from 'src/app/product.service';
@Component({
  selector: 'app-listade-libros',
  templateUrl: './listade-libros.component.html',
  styleUrls: ['./listade-libros.component.scss']
})
export class ListadeLibrosComponent implements OnInit {
  title = 'app3';
  key: any = "idLibro";
  visible: boolean = false;
  array2: ILibro[] = [];
  constructor(private productService: ProductService) { }
  
  onClick(button: number) {
    this.productService.deleteLibro(button);
  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe(x => this.array2 = x);
  }
  ngOnDestroy(): void {
    // this.productService.getProduct(this.id).subscribe(x => this.array2 = [x]);
  }

}
