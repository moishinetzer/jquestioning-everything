# JQuestioning Everything

A modern e-commerce product catalog and shopping cart implementation, demonstrating both jQuery and React approaches to web development.

## Features

- Product catalog with dynamic grid layout
- Shopping cart functionality
- Real-time price calculations
- Responsive design
- Two implementations:
  - jQuery version (index.html)
  - React + TypeScript version (src/main.tsx)

## Tech Stack

- React 18
- TypeScript
- Vite
- jQuery (for the alternative implementation)

## Project Structure

- `index.html` - jQuery implementation with embedded styles and scripts
- `src/`
  - `main.tsx` - React implementation of the shopping cart
  - `init.tsx` - React entry point

## Getting Started

### Prerequisites

- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/moishinetzer/jquestioning-everything.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server with Vite
- `npm run build` - Build project with TypeScript and Vite
- `npm run lint` - Run ESLint checks
- `npm run preview` - Preview production build

## Switching Implementations

The project provides two implementations:

1. jQuery Version:

   - Open `index.html` directly in a browser
   - The jQuery implementation is currently active by default

2. React Version:
   - Uncomment the following lines in index.html:
     ```html
     <div id="root"></div>
     <script type="module" src="/src/main.tsx"></script>
     ```
   - Comment out or remove the jQuery script section

## Implementation Comparison

Both versions implement the same features with different approaches:

- Product Catalog

  - jQuery: DOM manipulation with `.append()`
  - React: Component-based rendering with state management

- Shopping Cart

  - jQuery: Direct DOM updates and event handlers
  - React: useState hook for state management

- Price Calculations
  - Both use reduce() for total calculation
  - React version has more declarative updates

## Code Quality

- TypeScript for type safety
- ESLint configuration with:
  - React Hooks plugin
  - React Refresh plugin
  - Strict TypeScript checks
