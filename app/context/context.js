"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      // check if item already exists
      const itemIndex = prevCart.findIndex((item) => item.id === product.id);

      if (itemIndex >= 0) {
        // already in cart, increment quantity
        prevCart[itemIndex].quantity++;
      } else {
        // new item, add to cart
        product.quantity = 1;
        prevCart.push(product);
      }

      return [...prevCart];
    });
  };

  const removeFromCart = (productToRemove) => {
    setCart((prevCart) => {
      return prevCart
        .map((product) => {
          if (product.id === productToRemove.id) {
            if (product.quantity > 1) {
              // decrement quantity if more than 1
              product.quantity--;
              return product;
            } else {
              // remove item if only 1 left
              return null;
            }
          } else {
            // otherwise return product unchanged
            return product;
          }
        })
        .filter((product) => product != null);
    });
  };

  const removeAll = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        removeAll,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const userCart = () => {
  return useContext(CartContext);
};
