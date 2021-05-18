import React, { useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const CartContext = React.createContext([[], () => {}]);

const CartProvider = ({ children }) => {
  const [localStore, setLocalStore] = useLocalStorage('currentCart', []);
  const [state, setState] = useState(localStore || []);
  useEffect(() => {
    setLocalStore(state);
  }, [state]);
  return (
    <CartContext.Provider value={[state, setState]}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
