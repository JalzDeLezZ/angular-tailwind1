import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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

interface Product {
  id: string;
  title: string;
  images: string[];
  price: number;
}
