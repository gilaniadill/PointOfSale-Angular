# PointOfSale-Angular
This project is a frontend POS system in Angular 18 with a clean, modern UI using Angular Material. It supports product management, category filtering, barcode scanning, and dynamic addition of products. It’s designed to be easily extendable with a backend and database for full POS functionality.


1. Project Type & Stack:

Frontend: Angular 18, using standalone components, Angular Material, and SCSS for styling.

Backend: You’ve mentioned ASP.NET Core Web API as an option, but current code uses static data in products.ts for initial products.

Data Storage: Products are currently in-memory (products.ts), but the structure allows future integration with a database.

Other Tools: FormsModule for ngModel, CommonModule for Angular basics.

2. Core Features Implemented:

Product Management:

Adding new products dynamically via Add Product Component.

Products have fields: name, price, category, image, barcode.

Products are displayed in Material cards with hover effects and zebra coloring for differentiation.

Categories:

Products are categorized (Cameras, TVs, Phones, etc.).

Dropdown for category selection in both Add Product and filtering.

Search & Filter:

Search bar filters products by name.

Dropdown filter for category selection.

Cart Functionality:

Users can add products to the cart.

Barcode scanning allows quick addition to cart.

Styling:

Angular Material for inputs, cards, buttons.

Custom CSS/SCSS for card hover effects, buttons, grid layouts, and input padding.

3. Data Generation Logic:

Products are dynamically generated for each category.

Each product gets a random image from the category image list.

Each product has a unique barcode.

4. Component Structure:

ProductListComponent

Displays all products, search, filters, and barcode functionality.

Integrates AddProductComponent through EventEmitter for dynamically adding products.

AddProductComponent

Form for adding a product.

Emits new products via EventEmitter to parent component (ProductListComponent).

CartService

Handles adding products to cart.

Models:

Product interface.

products.ts for initial product list.

5. Outstanding Points / Future Enhancements:

Currently, products are not persisted to a database.

Cart functionality is in-memory.

No user authentication implemented yet.

Could add order management, payment integration, and backend storage.
