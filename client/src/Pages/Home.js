import React, { useEffect, useState } from 'react';
import './Home.scss';
import Layout from '../Components/Layout';
import ProductCard from '../Components/productCard/ProductCard';
import fetchData from '../utils/api';
import { Link } from 'react-router-dom';

const Home = () => {
  const [productList, setProductList] = useState([]);

  const params = { endpoint: '/recommendeds' };
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetchData(params);
      setProductList(data);
    };
    fetchProducts();
  }, []);

  return (
    <Layout>
      <div className="banner">
        <div className="banner-text">
          <p className="banner-text-main">Anniversary SALE</p>
          <Link to="/products" className="link-products-page">
            <p>Take me to products</p>
          </Link>
        </div>
      </div>
      <div className="recommended">
        <h2>Recommended</h2>
        <div className="recommended-product-list">
          {productList.map(el => (
            <ProductCard data={el} />
          ))}
        </div>
      </div>
      <Link className="more-products-link" to="/products">
        Take me to products
      </Link>
    </Layout>
  );
};

export default Home;
