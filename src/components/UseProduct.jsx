// src/useProducts.js
import { useState } from 'react';
import { products } from './ProductData';

export const UseProducts = () => {
  const [productList, setProductList] = useState(products);
  const [searchVal, setSearchVal] = useState('');

  const handleSearchChange = (event) => {
    setSearchVal(event.target.value);
    if (event.target.value === '') {
      setProductList(products);
    } else {
      const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setProductList(filteredProducts);
    }
  };

  return { productList, searchVal, handleSearchChange };
};
