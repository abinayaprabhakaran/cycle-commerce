import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Card>
      <CardMedia
        component="img"
        height="150"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography color="text.secondary">₹{product.price}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </Button>
        <Button
  size="small"
  component={Link}
  to={`/product/${product.id}`}
  variant="outlined"
>
  View
</Button>

      </CardActions>
    </Card>
  );
};

export default ProductCard;