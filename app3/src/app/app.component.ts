import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Observable } from 'rxjs';
import { ILibro } from './Libro';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {


  title = 'app3';
  key: any = "idLibro";
  orden1: boolean = false;
  array2: ILibro[] = [];
  Orde:string="v";
  constructor(private productService: ProductService) { }
  onClick(button: number) {
    this.array2 = [];
      switch (button) {
        case 1:
          this.key = "idLibro";
          if (this.orden1 == false) {this.orden1 = true; this.Orde ="^"; break;}
          if (this.orden1 == true) { this.orden1 = false; this.Orde ="v"; break; }
          break;
        case 2:
          this.key = "autorLibro";
          if (this.orden1 == false) {this.orden1 = true; this.Orde ="^"; break;}
          if (this.orden1 == true) { this.orden1 = false; this.Orde ="v"; break; }
          break;
        case 3:
          this.key = "comentarioLibro";
          if (this.orden1 == false) {this.orden1 = true; this.Orde ="^"; break;}
          if (this.orden1 == true) { this.orden1 = false; this.Orde ="v"; break; }
          break;
    }
    this.ngOnInit();
    console.log(this.array2);
  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe(x => this.array2 = x);
  }
  ngOnDestroy(): void {
    // this.productService.getProduct(this.id).subscribe(x => this.array2 = [x]);
  }
}
