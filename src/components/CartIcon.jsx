// src/components/CartIcon.js
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton'; // Correct import statement
import Badge from '@mui/material/Badge';

const CartIcon = ({ cartItemsCount, toggleCart }) => {
  return (
    <IconButton onClick={toggleCart}> {/* Use IconButton directly */}
      <Badge badgeContent={cartItemsCount} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default CartIcon;
