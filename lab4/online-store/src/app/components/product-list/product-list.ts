import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card';
import { ProductService } from '../../services/product';
import { Product } from '../../product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  categories: string[] = [];
  selectedCategory: string = 'Все';
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.categories = ['Все', ...this.productService.getCategories()];
    this.filteredProducts = this.products;
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    if (category === 'Все') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.productService.getProductsByCategory(category);
    }
  }

  onShare(event: {platform: string, url: string}) {
    // Здесь можно добавить уведомление
    console.log(`Shared on ${event.platform}`);
  }
}