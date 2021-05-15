import React, { useContext, useEffect, useState } from 'react';
import './Cart.scss';
import Layout from '../Components/Layout';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
  const [contextValue, setContext] = useContext(CartContext);
  const [productsInCart, setProductsInCart] = useState([]);

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
                        min="0"
                        max="10"
                        value={item.quantity}
                      />
                      <span className="item-price">
                        $ {Math.floor(item.price)}
                      </span>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default Cart;
