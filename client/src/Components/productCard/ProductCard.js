import React from 'react';
import './ProductCard.scss';

const ProductCard = ({ data }) => {
  return (
    <article className="card product-card">
      <div className="card-inner-wrapper">
        <img src={data.defaultImage} alt={data.name} className="card-image" />
        <h3 className="card-title">{data.name}</h3>
        <div className="card-price-wrapper">
          <span className="card-price">$ {Math.floor(data.price)}</span>
          {/* <span className="card-price-badge">{data.discount}%</span> */}
        </div>
        <button className="card-cta">Add to cart</button>
      </div>
    </article>
  );
};

export default ProductCard;
