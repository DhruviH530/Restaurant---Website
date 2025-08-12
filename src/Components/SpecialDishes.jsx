import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
  Grid,
  IconButton,
  Snackbar,
  Alert,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Images
import salad1 from '../assets/Fattoush salad.png';
import salad2 from '../assets/Vegetable salad.png';
import salad3 from '../assets/Egg salad.png';

// Dishes data
const dishes = [
  {
    name: 'Fattoush salad',
    desc: 'Description of the item',
    price: '$24.00',
    rating: 4.9,
    image: salad1,
  },
  {
    name: 'Vegetable salad',
    desc: 'Description of the item',
    price: '$26.00',
    rating: 4.6,
    image: salad2,
  },
  {
    name: 'Egg vegi salad',
    desc: 'Description of the item',
    price: '$23.00',
    rating: 4.5,
    image: salad3,
  },
];

const SpecialDishes = ({ addToCart }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openSnack, setOpenSnack] = useState(false);
  const [snackMsg, setSnackMsg] = useState('');

  const total = dishes.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handleBack = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleAddToCart = (dish) => {
    addToCart(dish);
    setSnackMsg(`${dish.name} added to cart!`);
    setOpenSnack(true);
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpenSnack(false);
  };

  // Rotate dishes array so currentIndex item is first
  const rotatedDishes = [
    dishes[currentIndex],
    dishes[(currentIndex + 1) % total],
    dishes[(currentIndex + 2) % total],
  ];

  return (
    <>
      <Box sx={{ py: 10, backgroundColor: '#fff' }}>
        <Container maxWidth="lg">
          {/* Section Header */}
          <Box sx={{ mb: 5, position: 'relative' }}>
            <Typography
              sx={{
                fontFamily: 'inter',
                fontWeight: 700,
                fontSize: '15px',
                color: '#FF6868',
                textTransform: 'uppercase',
                letterSpacing: '0%',
                lineHeight: 1,
                mb: 4,
              }}
            >
              Special Dishes
            </Typography>

            <Typography
              sx={{
                fontFamily: 'Inter',
                fontWeight: 700,
                fontStyle: 'Bold',
                fontSize: '40px',
                lineHeight: '100%',
                letterSpacing: '10%',
                textAlign: 'left',
              }}
            >
              Standout Dishes <br /> From Our Menu
            </Typography>

            {/* Navigation Buttons */}
            <Box sx={{ position: 'absolute', right: 0, top: 0, display: 'flex', gap: 2 }}>
              <IconButton
                sx={{ backgroundColor: '#EDEDED', width: 40, height: 40 }}
                onClick={handleBack}
                aria-label="Previous"
              >
                <ArrowBackIosNewIcon fontSize="small" />
              </IconButton>
              <IconButton
                sx={{ backgroundColor: '#00FF75', width: 40, height: 40 }}
                onClick={handleNext}
                aria-label="Next"
              >
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>

          {/* Cards */}
          <Grid container spacing={5} justifyContent="center">
            {rotatedDishes.map((dish, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  onClick={() => handleAddToCart(dish)}
                  sx={{
                    p: 2,
                    borderRadius: '25px',
                    boxShadow: '2px 10px 30px 0px #0000001A',
                    position: 'relative',
                    textAlign: 'center',
                    cursor: 'pointer',
                  }}
                >
                  {/* Green Heart Icon */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      right: 3,
                      backgroundColor: '#00FF75',
                      width: 50,
                      height: 55,
                      borderTopRightRadius: '25px',
                      borderBottomLeftRadius: '25px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <FavoriteBorderIcon sx={{ color: 'white', fontSize: 28 }} />
                  </Box>

                  {/* Image */}
                  <CardMedia
                    component="img"
                    image={dish.image}
                    alt={dish.name}
                    sx={{
                      width: 276,
                      height: 276,
                      borderRadius: '50%',
                      mx: 'auto',
                      mb: 2,
                    }}
                  />

                  <CardContent sx={{ p: 0 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: 'Inter' }}>
                      {dish.name}
                    </Typography>
                    <Typography sx={{ fontFamily: 'Inter', fontSize: '14px', color: '#777', mb: 1 }}>
                      {dish.desc}
                    </Typography>

                    {/* Price and Rating */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, alignItems: 'center' }}>
                      <Typography sx={{ color: 'red', fontWeight: 600 }}>{dish.price}</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <StarIcon sx={{ color: '#FFD700', fontSize: 18 }} />
                        <Typography sx={{ fontWeight: 500, textAlign: 'left' }}>{dish.rating}</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Snackbar Notification */}
      <Snackbar
        open={openSnack}
        autoHideDuration={3000}
        onClose={handleCloseSnack}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnack} severity="success" sx={{ width: '100%' }}>
          {snackMsg}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SpecialDishes;
