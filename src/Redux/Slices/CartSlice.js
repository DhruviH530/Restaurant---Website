// // src/Redux/Slices/CartSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   items: [],
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     add: (state, action) => {
//       state.items.push(action.payload);
//     },
//     remove: (state, action) => {
//       state.items = state.items.filter(item => item.id !== action.payload);
//     },
//     clearCart: (state) => {
//       state.items = [];
//     },
//   },
// });

// export const { add, remove, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;
