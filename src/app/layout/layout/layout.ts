import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from "@angular/router";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CartService } from '../../services/services/cart';
import { BreakpointObserver } from '@angular/cdk/layout';
import { filter } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet, RouterLink,
    MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, CommonModule
  ],
  templateUrl: './layout.html',
  styleUrls: ['./layout.scss'],
})
export class Layout {
  sidebarOpen: boolean = true;
  miniCartOpen: boolean = false;
  accountMenuOpen: boolean = false;
  badgeBump: boolean = false;
  pageTitle: string = 'Products';
  currentRoute: string = '';
  isMobile: boolean = false;

  lastCartCount = 0;

  constructor(
    public cartService: CartService,
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {
    // Detect screen size for mobile
    this.breakpointObserver.observe(['(max-width: 768px)']).subscribe(result => {
      this.isMobile = result.matches;
      if (this.isMobile) this.sidebarOpen = false;
      else this.sidebarOpen = true;
    });

    // Update current route & page title
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

  // Update page title based on route
  updatePageTitle(url: string) {
    if (url.includes('/cart')) this.pageTitle = 'Cart';
    else if (url.includes('/products') || url === '/' || url === '') this.pageTitle = 'Products';
    else if (url.includes('/checkout')) this.pageTitle = 'Checkout';
    else this.pageTitle = 'POS Dashboard';
  }

  // Cart count
  get cartCount() {
    return this.cartService.getCartItems().length;
  }

  // Toggle sidebar
  toggleSideBar() {
    if (this.isMobile) {
      // On mobile, toggle overlay sidenav
      this.sidebarOpen = !this.sidebarOpen;
    } else {
      this.sidebarOpen = !this.sidebarOpen;
    }
  }

  // Mini cart toggle
  toggleMiniCart() {
    this.miniCartOpen = !this.miniCartOpen;
  }

  goToCart() {
    this.miniCartOpen = false;
    this.router.navigate(['/cart']);
  }

  // Animate badge when cart changes
  ngDoCheck() {
    if (this.cartCount !== this.lastCartCount) {
      this.badgeBump = true;
      setTimeout(() => this.badgeBump = false, 300);
      this.lastCartCount = this.cartCount;
    }
  }

  // Account menu toggle
  toggleAccountMenu() {
    this.accountMenuOpen = !this.accountMenuOpen;
  }

  goToProfile() {
    this.accountMenuOpen = false;
    this.router.navigate(['/profile']);
  }

  goToSettings() {
    this.accountMenuOpen = false;
    this.router.navigate(['/settings']);
  }

  logout() {
    this.accountMenuOpen = false;
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  // Close dropdowns if click outside
  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    const target = event.target as HTMLElement;

    // Close mini cart if click outside
    if (!target.closest('.top-icon') && this.miniCartOpen) {
      this.miniCartOpen = false;
    }

    // Close account menu if click outside
    if (!target.closest('.account-dropdown') && !target.closest('.top-icon.account')) {
      this.accountMenuOpen = false;
    }
  }
}
