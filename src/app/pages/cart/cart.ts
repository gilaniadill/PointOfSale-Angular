import { Component } from '@angular/core';
import { CartService, CartItem } from '../../services/services/cart';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss']
})
export class CartComponent {

  constructor(private cartService: CartService) {}

  // LIVE CART — UI will always update
  get cartItems(): CartItem[] {
    return this.cartService.getCartItems();
  }

  increase(item: CartItem) {
    this.cartService.updateQuantity(item.id, item.quantity + 1);
  }

  decrease(item: CartItem) {
    this.cartService.updateQuantity(item.id, item.quantity - 1);
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item.id);
  }

  getTotal() {
    return this.cartService.getTotal();
  }

 checkout() {



  const discountRate = 0.1; // 10% discount example
  const taxRate = 0.07;     // 7% tax example

  const itemsHtml = this.cartItems.map(i => `
    <tr>
      <td>${i.name}</td>
      <td style="text-align:center;">${i.quantity}</td>
      <td style="text-align:right;">$${i.price.toFixed(2)}</td>
      <td style="text-align:right;">$${(i.price * i.quantity).toFixed(2)}</td>
    </tr>
  `).join('');

  const subtotal = this.getTotal();
  const discount = subtotal * discountRate;
  const tax = (subtotal - discount) * taxRate;
  const grandTotal = subtotal - discount + tax;

  const date = new Date().toLocaleString();
  const transactionId = Math.floor(Math.random() * 1000000); // Example transaction ID

  const receiptHtml = `
    <html>
      <head>
        <style>
          body { font-family: 'Courier New', monospace; padding: 20px; color: #2f362f; }
          h2, h3 { text-align: center; margin: 0; }
          .logo { text-align:center; margin-bottom: 10px; }
          table { width: 100%; border-collapse: collapse; margin-top: 10px; }
          th, td { padding: 6px; border-bottom: 1px dashed #788978; }
          th { text-align: left; }
          tfoot td { border-top: 2px solid #788978; font-weight: bold; }
          .footer { text-align: center; margin-top: 20px; font-size: 12px; }
          .barcode { text-align:center; margin-top:10px; font-family: 'Libre Barcode 39', cursive; font-size: 24px; }
        </style>
        <link href="https://fonts.googleapis.com/css2?family=Libre+Barcode+39&display=swap" rel="stylesheet">
      </head>
      <body>
        <div class="logo">
          <img src="https://your-logo-url.com/logo.png" alt="POS Logo" width="120">
        </div>
        <h2>My POS System</h2>
        <h3>Sales Receipt</h3>
        <p>Date: ${date}</p>
        <p>Transaction ID: ${transactionId}</p>

        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th style="text-align:center;">Qty</th>
              <th style="text-align:right;">Price</th>
              <th style="text-align:right;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHtml}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" style="text-align:right;">Subtotal</td>
              <td style="text-align:right;">$${subtotal.toFixed(2)}</td>
            </tr>
            <tr>
              <td colspan="3" style="text-align:right;">Discount (10%)</td>
              <td style="text-align:right;">-$${discount.toFixed(2)}</td>
            </tr>
            <tr>
              <td colspan="3" style="text-align:right;">Tax (7%)</td>
              <td style="text-align:right;">$${tax.toFixed(2)}</td>
            </tr>
            <tr>
              <td colspan="3" style="text-align:right;">Grand Total</td>
              <td style="text-align:right;">$${grandTotal.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>

        <div class="barcode">
          *${transactionId}*
        </div>

        <div class="footer">
          Thank you for your purchase!<br>
          Visit again!
        </div>
      </body>
    </html>
  `;

  const printWindow = window.open('', '', 'width=400,height=600');
  if (printWindow) {
    printWindow.document.write(receiptHtml);
    printWindow.document.close();
    printWindow.print();
  }

  this.cartService.clearCart();
}

}
