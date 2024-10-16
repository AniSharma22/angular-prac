import { HttpClient } from '@angular/common/http';
import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import { item, product } from '../models/product.model';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  constructor(private httpClient: HttpClient) {}

  loadProducts() {
    return this.httpClient.get<product[]>(
      'https://api.escuelajs.co/api/v1/products'
    );
  }

  addProduct(item: item) {
    return this.httpClient.post('https://api.escuelajs.co/api/v1/products/', {
      title: item.title,
      price: item.price,
      description: item.description,
      categoryId: item.categoryId,
      images: item.images,
    });
  }

  updateProduct(id: number, title: string, price: number) {
    return this.httpClient.put(
      `https://api.escuelajs.co/api/v1/products/${id}`,
      {
        title: title,
        price: price,
      }
    );
  }

  deleteProduct(id: number) {
    return this.httpClient.delete(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
  }
}
