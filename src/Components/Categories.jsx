import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Container,
} from '@mui/material';

import bgImage from '../assets/circle.png.png';
import mainDishImg from '../assets/maindish.png';
import breakfastImg from '../assets/breackfast.png';
import dessertImg from '../assets/dessert.png';
import browseAllImg from '../assets/broese all.png';

// Category Data
const categories = [
  {
    title: 'Main Dish',
    items: '(86 dishes)',
    image: mainDishImg,
  },
  {
    title: 'Break Fast',
    items: '(12 break fast)',
    image: breakfastImg,
  },
  {
    title: 'Dessert',
    items: '(48 dessert)',
    image: dessertImg,
  },
  {
    title: 'Browse All',
    items: '(255 Items)',
    image: browseAllImg,
  },
];

// Card Component
const CategoryCard = ({ title, items, image }) => (
  <Card
    sx={{
      width: 180,
      height: 180,
      borderRadius: '30px',
      textAlign: 'center',
      py: 3,
      px: 2,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
      transition: 'transform 0.3s ease',
      '&:hover': { transform: 'scale(1.03)' },
      backgroundColor: '#fff',
      mx: 'auto',
    }}
  >
    {/* Circle background with food image */}
    <Box
      sx={{
        width: 90,
        height: 90,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        borderRadius: '50%',
        boxShadow: '2px 10px 30px 0px #0000001A',
        mx: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 2,
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{ width: 55, height: 55 }}
      />
    </Box>
    <CardContent sx={{ p: 0 }}>
      <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: 'Poppins', color:'#1E1E1E' }}>
        {title}
      </Typography>
      <Typography
        sx={{
          color: '#555555',
          mt: 0.5,
          fontSize: '0.85rem',
          fontFamily: 'Poppins',
        }}
      >
        {items}
      </Typography>
    </CardContent>
  </Card>
);

// Main Categories Section
const Categories = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Container sx={{ maxWidth: '1280px !important' }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: '15px',
              color: '#FF6868',
              fontWeight: 500,
              fontFamily: 'Inter',
              lineHeight: 1,
              letterSpacing: '17.5%',
              textTransform: 'uppercase',
              mb: 1,
            }}
          >
            Customer Favorites
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontFamily: 'Inter',
              fontSize: '60px',
              lineHeight: 1,
              textAlign: 'center',
              letterSpacing: '0%',
            }}
          >
            Popular Categories
          </Typography>
        </Box>

        {/* Category Cards */}
        <Grid container spacing={4} justifyContent="center">
          {categories.map((cat, i) => (
            <Grid item key={i}>
              <CategoryCard {...cat} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Categories;
