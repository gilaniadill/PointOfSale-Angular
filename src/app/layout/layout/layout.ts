import { CommonModule, NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from "@angular/router";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CartService } from '../../services/services/cart';
import { filter } from 'rxjs';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink,
     MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    CommonModule

  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  sidebarOpen: boolean=true;

  miniCartOpen: boolean = false;
 badgeBump: boolean = false;

   pageTitle: string = 'Products';
   currentRoute: string = '';


  constructor(public cartService: CartService,private router: Router) {
     this.router.events.pipe(
    filter(event => event instanceof NavigationEnd)
  ).subscribe((event: NavigationEnd) => {
    this.currentRoute = event.urlAfterRedirects;
    this.updatePageTitle(this.currentRoute);
  });
  }
  // Check if a route is active
  isActive(route: string): boolean {
  return this.currentRoute === route || (route === '/' && this.currentRoute === '');
}

   updatePageTitle(url: string) {
    if (url.includes('/cart')) {
      this.pageTitle = 'Cart';
    } else if (url.includes('/products') || url === '/' || url === '') {
      this.pageTitle = 'Products';
    } else if (url.includes('/checkout')) {
      this.pageTitle = 'Checkout';
    } else {
      this.pageTitle = 'POS Dashboard';
    }
  }

   get cartCount() {
    return this.cartService.getCartItems().length;
  }

  toggleSideBar(){
    this.sidebarOpen = !this.sidebarOpen;
  }


  toggleMiniCart() {
  this.miniCartOpen = !this.miniCartOpen;
}

goToCart() {
  this.miniCartOpen = false;
  this.router.navigate(['/cart']);
}

// Animate badge whenever cart changes
ngDoCheck() {
  if (this.cartCount !== this.lastCartCount) {
    this.badgeBump = true;
    setTimeout(() => this.badgeBump = false, 300);
    this.lastCartCount = this.cartCount;
  }
}

lastCartCount = 0;



accountMenuOpen: boolean = false;

toggleAccountMenu() {
  this.accountMenuOpen = !this.accountMenuOpen;
}

// Navigate to profile page
goToProfile() {
  this.accountMenuOpen = false;
  this.router.navigate(['/profile']);
}

// Navigate to settings page
goToSettings() {
  this.accountMenuOpen = false;
  this.router.navigate(['/settings']);
}

// Logout functionality
logout() {
  this.accountMenuOpen = false;
  // Example: clear localStorage/session and redirect to login
  localStorage.clear();
  this.router.navigate(['/login']);
}

  // Close dropdowns if click outside
  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    const target = event.target as HTMLElement;

    // Mini cart
    if (!target.closest('.top-icon') && this.miniCartOpen) {
      this.miniCartOpen = false;
    }

    // Account menu
    if (!target.closest('.account-dropdown') && !target.closest('.top-icon.account')) {
      this.accountMenuOpen = false;
    }
  }

}
