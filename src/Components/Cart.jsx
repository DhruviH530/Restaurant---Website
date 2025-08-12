import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  List, 
  ListItem, 
  ListItemText, 
  Button,
  Stack,
  Divider
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Footer from './Footer';

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const total = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price.replace('$', '')) * item.quantity,
    0
  ).toFixed(2);

  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      bgcolor: 'background.paper'
    }}>
      <Container sx={{ flex: 1, py: 4 }}>
        {/* Back button */}
        <Button
          component={RouterLink}
          to="/"
          startIcon={<ArrowBackIcon />}
          sx={{
            textTransform: 'none',
            mb: 3,
            pl: 0,
            color: 'text.primary'
          }}
        >
          Continue Shopping
        </Button>

        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Your Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)
        </Typography>

        <Divider sx={{ my: 2 }} />

        {cartItems.length === 0 ? (
          <Typography variant="body1">Your cart is empty</Typography>
        ) : (
          <>
            <List>
              {cartItems.map((item, index) => (
                <ListItem key={index} divider>
                  <ListItemText 
                    primary={item.name} 
                    secondary={`${item.price} × ${item.quantity}`}
                    sx={{ flex: 1 }} 
                  />
                  <Typography sx={{ mr: 2 }}>
                    ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                  </Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Button 
                      size="small" 
                      variant="outlined" 
                      onClick={() => updateQuantity(index, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      sx={{ minWidth: 32 }}
                    >
                      -
                    </Button>
                    <Typography>{item.quantity}</Typography>
                    <Button 
                      size="small" 
                      variant="outlined" 
                      onClick={() => updateQuantity(index, item.quantity + 1)}
                      sx={{ minWidth: 32 }}
                    >
                      +
                    </Button>
                    <Button 
                      color="error" 
                      size="small" 
                      onClick={() => removeFromCart(index)}
                      sx={{ ml: 1 }}
                    >
                      Remove
                    </Button>
                  </Stack>
                </ListItem>
              ))}
            </List>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ 
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: 3
            }}>
              <Typography variant="h6" fontWeight="bold">
                Subtotal: ${total}
              </Typography>
              
              {/* Small Proceed to Checkout button on the right */}
              <Button 
                variant="contained" 
                size="small"
                sx={{
                  textTransform: 'none',
                  px: 3,
                  py: 1
                }}
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </Button>
            </Box>

         
          </>
        )}
      </Container>
    </Box>
  );
};

export default Cart;
