// src/components/CartModal.js
import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const CartModal = ({ open, handleClose, cartItems, removeItem, calculateTotal }) => {
  const totalCost = calculateTotal? calculateTotal() : 0;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', border: 'none', borderRadius: '8px', p: 4 }}>
        <Typography id="simple-modal-title" variant="h6" component="h2">
          Your Cart
        </Typography>
        <Typography id="simple-modal-description" sx={{ mt: 2 }}>
          {cartItems.length > 0? (
            cartItems.map((item, index) => (
              <div key={index}>
                <strong>{item.name}</strong>: {item.price}
                <IconButton
                  aria-label="remove"
                  onClick={() => removeItem(index)}
                  sx={{ ml: 1 }}
                >
                  <RemoveCircleOutlineIcon />
                </IconButton>
              </div>
            ))
          ) : (
            <span>Your cart is empty.</span>
          )}
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>Total Cost:</Typography>
        <Typography variant="h6" sx={{ mt: 1 }}>{totalCost}</Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Complete Order
        </Button>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Modal>
  );
};

export default CartModal;
