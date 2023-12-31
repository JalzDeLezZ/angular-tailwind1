import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
})
export class ScrollComponent implements OnInit {
  constructor(private http: HttpClient) {}

  products: Product[] = [];

  ngOnInit(): void {
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((res) => {
        this.products = res;
      });
  }
}
