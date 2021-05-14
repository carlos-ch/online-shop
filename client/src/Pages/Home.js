import React, { useEffect, useState } from 'react';
import './Home.scss';
import Layout from '../Components/Layout';
import ProductCard from '../Components/productCard/ProductCard';
import fetchData from '../utils/api';

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
        <img
          src="https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          alt="banner"
          className="banner-img"
        />
      </div>
      <div className="recommended">
        <h2>Recommended</h2>
        {productList.map(el => (
          <ProductCard data={el} />
        ))}
      </div>
      <a className="more-products-link">Take me to products</a>
    </Layout>
  );
};

export default Home;
