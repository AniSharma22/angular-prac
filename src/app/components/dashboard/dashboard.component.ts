import { Component, inject, OnInit, signal } from '@angular/core';
import { AppService } from '../../services/app-service.service';
import { product } from '../../models/product.model';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  appService = inject(AppService);
  products = signal<product[] | undefined>(undefined);

  ngOnInit(): void {
    this.appService.loadProducts().subscribe({
      next: (data) => {
        this.products.set(data);
      },
    });
  }

  onProductDelete(id: number) {
    this.products.update((current) => {
      return current?.filter((product) => product.id !== id);
    });
  }
}
  