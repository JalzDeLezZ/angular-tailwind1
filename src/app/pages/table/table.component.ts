import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  totalPrice = 0;
  products: Product[] = [];
  columns: string[] = ['idd', 'cover', '#Titlex', 'price'];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((res) => {
        this.products = res;
        this.totalPrice = this.products.reduce((acc, el) => acc + el.price, 0);
      });
  }
}
