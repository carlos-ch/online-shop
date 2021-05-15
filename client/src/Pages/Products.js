import React, { useEffect, useState } from 'react';
import Layout from '../Components/Layout';
import ProductCard from '../Components/productCard/ProductCard';
import fetchData from '../utils/api';
import { pageSize, totalItems } from '../utils/constants';
import { roundPrice } from '../utils/roundPrice';

const Products = () => {
  const [productList, setProductList] = useState([]);
  const [pageNr, setPageNr] = useState(1);
  // const [params, setParams] = useState({});
  const totalPages = Math.floor(totalItems / pageSize);

  const onPageChange = pageNum => {
    console.log({ pageNum });
    setPageNr(pageNum);
  };
  const handlePrevPage = () => {
    onPageChange(Math.max(pageNr - 1, 1));
    console.log('ddesde el handlePrevPage', { pageNr });
  };
  const handleNextPage = () => {
    console.log('ddesde el handleNextPage', { pageNr });
    onPageChange(Math.min(pageNr + 1, totalPages));
  };

  useEffect(() => {
    const params = { endpoint: '/products', limit: pageSize, page: pageNr };

    const fetchProducts = async () => {
      const data = await fetchData(params);

      setProductList(roundPrice(data));
    };
    console.log('ddesde el useeffect!!!', { productList });
    fetchProducts();
  }, [pageNr]);

  return (
    <Layout>
      <div className="section-wrapper">
        <input type="text" className="products-search-box" />
        <ul className="products-list">
          {productList.map(el => (
            <li key={el.id}>
              <ProductCard data={el} />
            </li>
          ))}
        </ul>
        <div className="pagination">
          <button
            className="page-button"
            onClick={handlePrevPage}
            disabled={pageNr === 0}
          >
            Prev
          </button>
          <button
            className="page-button"
            onClick={handleNextPage}
            disabled={pageNr === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
