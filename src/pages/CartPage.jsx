import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, Button, IconButton, List, ListItem, ListItemText } from '@mui/material';
import { removeFromCart, decreaseQuantity, addToCart, clearCart } from '../redux/cartSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="flex-start" 
      minHeight="100vh"
      bgcolor="#f5f5f5"
      p={3}
    >
      <Box 
        width="100%" 
        maxWidth="600px" 
        bgcolor="white" 
        p={3} 
        borderRadius={2} 
        boxShadow={3}
      >
        <Typography variant="h4" mb={2}>Your Cart</Typography>

        {cartItems.length === 0 ? (
          <Typography>Your cart is empty</Typography>
        ) : (
          <>
            <List>
              {cartItems.map(item => (
                <ListItem
                  key={item.id}
                  secondaryAction={
                    <Box display="flex" alignItems="center" gap={0.2}>
                      <IconButton onClick={() => dispatch(decreaseQuantity(item.id))}><RemoveIcon /></IconButton>
                      <Typography sx={{ mx: 1 }}>{item.quantity}</Typography>
                      <IconButton onClick={() => dispatch(addToCart(item))}><AddIcon /></IconButton>
                      <IconButton onClick={() => dispatch(removeFromCart(item.id))}><DeleteIcon /></IconButton>
                    </Box>
                  }
                >
                  <ListItemText 
                    primary={item.name} 
                    secondary={`₹${item.price}`} 
                  />
                </ListItem>
              ))}
            </List>

            <Typography variant="h6" mt={2}>Total: ₹{totalPrice}</Typography>

            <Box sx={{ mt: 2 }}>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => dispatch(clearCart())}
                sx={{ mr: 2 }}
              >
                Clear Cart
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/checkout')}
              >
                Checkout
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default CartPage;

