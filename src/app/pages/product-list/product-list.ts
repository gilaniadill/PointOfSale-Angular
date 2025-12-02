import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CartService } from '../../services/services/cart';
import { Product } from '../../models/product.model';
import { products as initialProducts } from '../../models/products';
import { AddProductComponent } from "../add-products/add-products";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,

],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.scss'],
})
export class ProductList {

  searchTerm: string = '';
  selectedCategory: string = 'All';
  barcodeInput: string = '';

  // Use a separate array to allow dynamic additions without mutating original data
  products: Product[] = [...initialProducts];

  constructor(private cartService: CartService) {}

  // Add product to cart
  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }

  // Get unique categories for dropdown
  getCategories(): string[] {
    const categories = this.products.map(p => p.category);
    return ['All', ...Array.from(new Set(categories))];
  }

  // Filter products based on search and category
  get filteredProducts(): Product[] {
    return this.products.filter(p => {
      const matchesName = p.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory = this.selectedCategory === 'All' || p.category === this.selectedCategory;
      return matchesName && matchesCategory;
    });
  }

  // Add product to cart by scanning barcode
  addByBarcode(): void {
    const barcode = this.barcodeInput.trim();
    if (!barcode) return;

    const product = this.products.find(p => p.barcode === barcode);
    if (product) {
      this.addToCart(product);
      this.barcodeInput = '';
    } else {
      alert(`No product found with barcode: ${barcode}`);
    }
  }

  // Add a new product dynamically (can be used from a separate "Add Product" component)
  addProduct(newProduct: Product): void {
    this.products.push(newProduct);
  }

}
