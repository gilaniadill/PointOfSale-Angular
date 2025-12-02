import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Product } from '../../models/product.model';
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule
],
  templateUrl: './add-products.html',
  styleUrls: ['./add-products.scss']
})
export class AddProductComponent {

  categories: string[] = [
  'Cameras',
  'TVs',
  'Phones',
  'Airbuds',
  'Laptops',
  'Smart Watches'
];

  // @Input() categories: string[] = []; // passed from parent
  @Output() productAdded = new EventEmitter<Product>();

  name: string = '';
  price: number | null = null;
  category: string = '';
  image: string = '';
  barcode: string = '';

  addProduct(): void {
    if (!this.name || !this.price || !this.category || !this.image || !this.barcode) {
      alert('Please fill in all fields');
      return;
    }

    const newProduct: Product = {
      id: Date.now(), // unique id
      name: this.name,
      price: this.price,
      category: this.category,
      image: this.image,
      barcode: this.barcode
    };

    this.productAdded.emit(newProduct);

    // Clear form
    this.name = '';
    this.price = null;
    this.category = '';
    this.image = '';
    this.barcode = '';
  }
}
