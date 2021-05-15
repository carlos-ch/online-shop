import React, { useEffect, useState } from 'react';
import Layout from '../Components/Layout';
import ProductCard from '../Components/productCard/ProductCard';
import fetchData from '../utils/api';
import { pageSize, totalItems } from '../utils/constants';
import { roundPrice } from '../utils/roundPrice';
import './Products.scss';

const Products = () => {
  const totalPages = Math.floor(totalItems / pageSize);

  const [productList, setProductList] = useState([]);
  const [pageNr, setPageNr] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  const onPageChange = pageNum => {
    setPageNr(pageNum);
  };
  const handlePrevPage = () => {
    onPageChange(Math.max(pageNr - 1, 1));
  };
  const handleNextPage = () => {
    onPageChange(Math.min(pageNr + 1, totalPages));
  };
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');

  const onInput = e => {
    console.log(input);
    setInput(e.target.value);
  };

  //update search state and reset page number
  const onSearch = query => {
    console.log({ query });
    onPageChange(1);
    setSearch(query);
  };

  const handlerSubmit = e => {
    e.preventDefault();
    onSearch(input);
  };

  useEffect(() => {
    const params = {
      q: search,
      limit: pageSize,
      page: pageNr,
    };

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
  }, [pageNr, search]);

  return (
    <Layout>
      <div className="section-wrapper">
        <form role="search" onSubmit={e => handlerSubmit(e)}>
          <div>
            <label htmlFor="searchBox">Search</label>
            <input
              type="search"
              id="searchBox"
              name="q"
              autoComplete="off"
              placeholder="Type here"
              className="products-search-box"
              aria-label="Search for product"
              onChange={e => onInput(e)}
            />
            <button>Search</button>
          </div>
        </form>
        {isFetching ? (
          <h3 className="products-loader loader">Loading...</h3>
        ) : productList.length > 0 ? (
          <div className="products-wrapper">
            <div className="products-list">
              {productList.map(el => (
                <div key={el.id}>
                  <ProductCard data={el} />
                </div>
              ))}
            </div>
            <div className="pagination">
              <button
                className="pagination-button"
                onClick={handlePrevPage}
                disabled={pageNr === 1}
              >
                Prev
              </button>
              <span>{pageNr}</span>
              <button
                className="pagination-button"
                onClick={handleNextPage}
                disabled={pageNr === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <h3 className="products-feedback feedback">
            Couldn't load. Try again.
          </h3>
        )}
      </div>
    </Layout>
  );
};

export default Products;
