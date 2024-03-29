import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Observable } from 'rxjs';
import { ILibro } from 'src/app/Libro';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {


  title = 'app3';
  key: any = "idLibro";
  visible: boolean = false;
  array2: ILibro[] = [];
  constructor(private productService: ProductService) { }
  
  onClick(button: number) {
    this.ngOnInit();
    this.visible=false;
    console.log(this.array2);
  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe(x => this.array2 = x);
  }
  ngOnDestroy(): void {
    // this.productService.getProduct(this.id).subscribe(x => this.array2 = [x]);
  }
}
