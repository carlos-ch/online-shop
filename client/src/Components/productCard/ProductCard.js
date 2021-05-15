import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import './ProductCard.scss';

const ProductCard = ({ data }) => {
  const productId = data.id;
  const [contextValue, setContext] = useContext(CartContext);
  // add product {id , and quantity} to cart
  const handleAddToCart = () => {
    let updatedCart = [];
    setContext(oldCart => {
      const productIndex = oldCart.findIndex(i => i.id === productId);

      /* if already in cart */
      if (productIndex !== -1) {
        updatedCart = [
          ...oldCart.slice(0, productIndex),
          { ...data, quantity: oldCart[productIndex].quantity + 1 },
          ...oldCart.slice(productIndex + 1),
        ];
      } else {
        /* if new to cart */
        updatedCart = [...oldCart, { ...data, quantity: 1 }];
      }
      console.log(updatedCart);
      return updatedCart;
    });
  };

  return (
    <article className="card product-card">
      <div className="card-inner-wrapper">
        <img src={data.defaultImage} alt={data.name} className="card-image" />
        <h3 className="card-title">{data.name}</h3>
        <div className="card-price-wrapper">
          <span className="card-price">$ {Math.floor(data.price)}</span>
          {/* <span className="card-price-badge">{data.discount}%</span> */}
        </div>
        <button className="card-cta" onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
