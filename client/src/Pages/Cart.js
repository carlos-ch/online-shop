import React, { useContext, useEffect, useState } from 'react';
import './Cart.scss';
import Layout from '../Components/Layout';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
  const [contextValue, setContext] = useContext(CartContext);
  const [total, setTotal] = useState(0);

  // if quantity of product is changed
  const handleChangeCount = (e, item) => {
    const parsedInt = parseInt(e.target.value) || 0;

    setContext(currentCart => {
      const productIndex = currentCart.findIndex(i => i.id === item.id);
      let updatedCart = [...currentCart];

      /* if already in cart */
      if (productIndex !== -1) {
        updatedCart = [
          ...currentCart.slice(0, productIndex),
          { ...item, quantity: parsedInt },
          ...currentCart.slice(productIndex + 1),
        ];
      }
      return updatedCart;
    });
  };

  useEffect(() => {
    const subtotalList = contextValue.map(
      product => product.price * product.quantity
    );
    if (subtotalList.length > 0)
      setTotal(subtotalList.reduce((acc, curr) => acc + curr));
    console.log({ total });
  }, [contextValue, total]);

  console.log({ contextValue });

  return (
    <Layout>
      Shopping cart
      <div className="cart-summary-wrapper">
        <section className="cart-summary section">
          <h3 className="section-heading">Summary</h3>
          <ul className="checkout-list">
            {contextValue.map(item => (
              <li>
                <article className="item">
                  <div className="item-img-wrapper">
                    <img src={item.defaultImage} alt="product" />
                  </div>
                  <div className="item-details">
                    <h3 className="item-name">{item.name}</h3>
                    <div className="item-quantity">
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={item.quantity}
                        onChange={e => handleChangeCount(e, item)}
                      />
                      <span className="item-price">$ {item.price}</span>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
          <div className="cart-summary-total">
            <span className="total">${total}</span>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Cart;
