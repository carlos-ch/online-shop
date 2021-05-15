import React, { useEffect, useState } from 'react';
import './Home.scss';
import Layout from '../Components/Layout';
import ProductCard from '../Components/productCard/ProductCard';
import fetchData from '../utils/api';
import { Link } from 'react-router-dom';
import { roundPrice } from '../utils/roundPrice';

const Home = () => {
  const [productList, setProductList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const params = { endpoint: '/recommendeds' };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsFetching(true);
        const data = await fetchData(params);
        setIsFetching(false);
        setProductList(roundPrice(data));
      } catch (error) {
        setIsFetching(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <Layout>
      <div className="banner">
        <div className="banner-text">
          <p className="banner-text-main">Anniversary SALE</p>
          <Link to="/products" className="link-products-page">
            <span>Take me to products</span>
          </Link>
        </div>
      </div>
      <div className="recommended">
        <h2 className="recommended-heading">Recommended</h2>
        {isFetching ? (
          <h3 className="recommended-loader loader">Loading...</h3>
        ) : productList.length > 0 ? (
          <div className="recommended-product-list">
            {productList.map(el => (
              <ProductCard data={el} />
            ))}
          </div>
        ) : (
          <h3 className="recommended-feedback feedback">
            Couldn't load. Try again.
          </h3>
        )}
      </div>
      <Link className="more-products-link" to="/products">
        Take me to products
      </Link>
    </Layout>
  );
};

export default Home;
