import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products.json';
import { Box, Typography, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const dispatch = useDispatch();

  if (!product) return <Typography>Product not found</Typography>;

  return (
    <Box>
      <Typography variant="h4">{product.name}</Typography>
      <Typography variant="h6"> ₹{product.price}</Typography>
      <img src={product.image} alt={product.name} style={{ maxWidth: '300px' }} />
      <Button variant="contained" onClick={() => dispatch(addToCart(product))} sx={{ mt: 2 }}>
        Add to Cart
      </Button>
    </Box>
  );
};

export default ProductPage;