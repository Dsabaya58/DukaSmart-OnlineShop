// src/Cart.js
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const Cart = ({ cartItems }) => {
  return (
    <List>
      {cartItems.map((item, index) => (
        <ListItem key={index}>
          <ListItemText primary={item.name} secondary={`Price: ${item.price}`} />
          <button onClick={() => removeFromCart(index)}>Remove</button>
        </ListItem>
      ))}
    </List>
  );
};

export default Cart;
