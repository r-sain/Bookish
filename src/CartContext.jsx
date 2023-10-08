import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState({});

  const addToCart = item => {
    const updatedCart = { ...cart };

    if (updatedCart[item.id]) {
      updatedCart[item.id].count++;
    } else {
      updatedCart[item.id] = { ...item, count: 1 };
    }

    setCart(updatedCart);
  };

  const minusCount = itemId => {
    const updatedCart = { ...cart };

    if (updatedCart[itemId]) {
      updatedCart[itemId].count--;
      if (updatedCart[itemId].count <= 0) {
        delete updatedCart[itemId];
      }

      setCart(updatedCart);
    }
  };
  const removeFromCart = itemId => {
    const updatedCart = { ...cart };
    if (updatedCart[itemId]) {
      delete updatedCart[itemId];
      setCart(updatedCart);
    }
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, minusCount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
