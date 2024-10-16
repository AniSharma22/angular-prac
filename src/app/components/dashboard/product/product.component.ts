import { Component, inject, input, output } from '@angular/core';
import { AppService } from '../../../services/app-service.service';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  id = input.required<number>();
  title = input();
  price = input();
  description = input();
  category = input();
  imageUrl = input();
  appService = inject(AppService);
  productDelete = output<number>();


  onProductDelete(){
    this.appService.deleteProduct(this.id()).subscribe({})
    this.productDelete.emit(this.id())
  }
}
