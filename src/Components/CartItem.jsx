// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Box, Typography, Paper, Button, IconButton } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { remove, clearCart } from '../Redux/Slices/CartSlice'; // aapka slice path

// const CartItem = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.items); // assuming cart slice has items array

//   const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <Box sx={{ maxWidth: 800, mx: 'auto', mt: 5, px: 2 }}>
//       <Typography variant="h4" sx={{ mb: 4 }}>
//         Your Cart
//       </Typography>

//       {cartItems.length === 0 ? (
//         <Typography variant="body1">Your cart is empty.</Typography>
//       ) : (
//         <>
//           {cartItems.map((item) => (
//             <Paper
//               key={item.id}
//               sx={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 p: 2,
//                 mb: 2,
//               }}
//             >
//               <Box>
//                 <Typography variant="h6">{item.name}</Typography>
//                 <Typography variant="body2">
//                   Quantity: {item.quantity}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Price: ${item.price}
//                 </Typography>
//               </Box>

//               <IconButton onClick={() => dispatch(remove(item.id))} color="error">
//                 <DeleteIcon />
//               </IconButton>
//             </Paper>
//           ))}

//           <Typography variant="h6" sx={{ mt: 3 }}>
//             Total Price: ${totalPrice.toFixed(2)}
//           </Typography>

//           <Button
//             variant="contained"
//             color="error"
//             sx={{ mt: 2 }}
//             onClick={() => dispatch(clearCart())}
//           >
//             Clear Cart
//           </Button>
//         </>
//       )}
//     </Box>
//   );
// };

// export default CartItem;
