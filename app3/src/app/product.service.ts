import { HttpClient, HttpErrorResponse,HttpHeaders, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from "src/environments/environment";
import { ILibro } from "./Libro";

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  
  //private productUrl = 'assets/products/products.json';

  private productUrl =environment.baseUrl+'Libro/'
  constructor(private http: HttpClient) { }

  getProducts(): Observable<ILibro[]> {
    return this.http.get<ILibro[]>(this.productUrl)
      .pipe(
        tap(data => console.log('all: ',JSON.stringify(data)))
      );
  }

  getProduct(id: number): Observable<ILibro | any> {
    return this.getProducts()
      .pipe(
        map((products: ILibro[]) => { return products.find(p => p.idLibro === id) })
      );
  }
  getOrderProduct(id: number): Observable<ILibro | any> {
    return this.getProducts()
      .pipe(
        map((products: ILibro[]) => { return products.find(p => p.idLibro === id) })
      );
  }
  deleteLibro(id: number): Observable<any>
  {
    console.log(id)
    debugger
    return this.http.delete(this.productUrl+{id})
      .pipe(
        tap(data => console.log('all: ',JSON.stringify(data)))
      );
  }
  ordenar(p_array_json: ILibro[], p_key: any, order: boolean) {
    if (p_key == "idLibro" && order == false)
      return p_array_json.sort((a, b) => (a.idLibro> b.idLibro) ? 1 : -1);
    if (p_key == "idLibro" && order == true)
      return p_array_json.sort((a, b) => (b.idLibro > a.idLibro) ? 1 : -1);
    else return p_array_json;
  }
}
