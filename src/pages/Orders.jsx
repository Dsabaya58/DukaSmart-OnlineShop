// src/OrderPage.js
import React, { useState } from 'react';
// import React from 'react';
import { AppBar, Box , Grid, IconButton, Toolbar} from '@mui/material';
import Product from '../components/Product';
import CartModal from '../components/CartModal';
import SearchArea from '../components/SearchArea';
import CartIcon from '../components/CartIcon';
import { UseProducts } from '../components/UseProduct';
import { useTheme } from '@mui/material/styles';

const Orders = () => {
  const theme = useTheme();
  const { productList, handleSearchChange } = UseProducts();
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [open, setOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  // const removeFromCart = (index) => {
  //   setCartItems(prevCartItems => prevCartItems.filter((_, i) => i!== index));
  // };
  const addItem = (item) => {
    setCartItems(prevItems => [...prevItems, item]);
  };

  const removeItem = (index) => {
    setCartItems(prevItems => prevItems.filter((_, i) => i!== index));
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace('$', '')), 0);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <AppBar position="static" sx={{ bgcolor: "white", color: "white" }}>
        <Toolbar sx={{ display: 'flex', flexDirection: 'row', gap: 140,}}>
          <SearchArea handleSearchChange={handleSearchChange} />
          <button onClick={handleOpen}><CartIcon cartItemsCount={cartItems.length} toggleCart={toggleCart} /></button>
        </Toolbar>
      </AppBar>
    <Box sx={{ mt: theme.spacing(2), display: 'flex', flexDirection: 'column', gap: 2 }}>
      
      <Box sx={{ flex: 1 }}>
        <Grid container spacing={2}> {/* Wrap products in a Grid container */}
          {productList.map(product => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={product.id}> {/* Specify column layout */}
              <Product product={product} addToCart={addToCart} />
            </Grid>
          ))}
        </Grid>
      </Box>
      
      <CartModal open={open} handleClose={handleClose} cartItems={cartItems} removeItem={removeItem} calculateTotal={calculateTotal} />
    </Box>
    </>
  );
};

export default Orders;
