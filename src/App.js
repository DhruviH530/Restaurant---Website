import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Categories from './Components/Categories';
import SpecialDishes from './Components/SpecialDishes';
import Testimonials from './Components/Testimonials';
import OurStory from './Components/OurStory';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';
import Cart from './Components/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (dish) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.name === dish.name);
      if (existingItem) {
        return prev.map(item =>
          item.name === dish.name 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { ...dish, quantity: 1 }];
    });
  };

  const removeFromCart = (index) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prev =>
      prev.map((item, i) => (i === index ? { ...item, quantity: newQuantity } : item))
    );
  };

  return (
    <Router>
      <Navbar cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Categories />
            <SpecialDishes addToCart={addToCart} />
            <Testimonials />
            <OurStory />
            <AboutUs />
          </>
        } />
        <Route 
          path="/cart" 
          element={
            <Cart 
              cartItems={cartItems} 
              removeFromCart={removeFromCart} 
              updateQuantity={updateQuantity} 
            />
          } 
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
