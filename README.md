<<<<<<< HEAD
# PosDashboard

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.9.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
=======
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
>>>>>>> bc89c23933e659a90c9dc3ff9e03d733f2153936
