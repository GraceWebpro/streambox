import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("quickbite-cart");
    return savedCart ? JSON.parse(savedCart) : {};
  });

  useEffect(() => {
    localStorage.setItem("quickbite-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // ADD ITEM
  const addToCart = (item) => {
    if (!item?.id) return;
    
    setCartItems((prev) => ({
      ...prev,
      [item.id]: {
        ...item,
        qty: prev[item.id] ? prev[item.id].qty + 1 : 1,
      },
    }));
  };

  // REMOVE ITEM
  const removeFromCart = (id) => {
    setCartItems((prev) => {
      if (!prev[id]) return prev;

      if (prev[id].qty === 1) {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      }

      return {
        ...prev,
        [id]: { ...prev[id], qty: prev[id].qty - 1 },
      };
    });
  };

  // CLEAR CART
  const clearCart = () => setCartItems({});

  // TOTAL ITEMS
  const totalItems = Object.values(cartItems).reduce(
    (sum, item) => sum + item.qty,
    0
  );

  // SUBTOTAL
  const subtotal = Object.values(cartItems).reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );

  // DELIVERY FEE (simple logic)
  const deliveryFee = subtotal > 10000 ? 0 : 1500;

  const totalPrice = subtotal + deliveryFee;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        totalItems,
        subtotal,
        deliveryFee,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);