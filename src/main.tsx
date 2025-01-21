import { useState } from "react";
import "./init.tsx";

export function App() {
  const products = [
    {
      id: 1,
      name: "Amazon Echo",
      price: 99.99,
      image: "https://placehold.co/100x100?text=Echo",
    },
    {
      id: 2,
      name: "Kindle Paperwhite",
      price: 139.99,
      image: "https://placehold.co/100x100?text=Kindle",
    },
    {
      id: 3,
      name: "Fire TV Stick",
      price: 49.99,
      image: "https://placehold.co/100x100?text=FireTV",
    },
  ];

  let [cartItems, setCartItems] = useState<typeof products>([]);

  function generateId() {
    return Math.random();
  }

  return (
    <div>
      <div className="product-catalog">
        {products.map((product) => (
          <div className="product-item" data-id="${product.id}">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button
              className="add-to-cart"
              onClick={() => {
                setCartItems([
                  ...cartItems,
                  {
                    ...product,
                    id: generateId(),
                  },
                ]);
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div id="shopping-cart">
        <h2>Shopping Cart</h2>
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" data-id={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <button
                  className="remove-item"
                  onClick={() => {
                    setCartItems(
                      cartItems.filter((cartItem) => cartItem.id !== item.id)
                    );
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <div id="total">
            Total: ${cartItems.reduce((sum, item) => sum + item.price, 0)}
          </div>
        </div>
      </div>
    </div>
  );
}
