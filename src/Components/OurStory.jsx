import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

const services = [
  {
    icon: 'fi fi-rr-salad',
    title: 'CATERING',
    description: 'Delight your guests with our flavors and presentation',
  },
  {
    icon: 'fi fi-rr-time-fast',
    title: 'FAST DELIVERY',
    description: 'We deliver your order promptly to your door',
  },
  {
    icon: 'fi fi-rr-shopping-cart-check',
    title: 'ONLINE ORDERING',
    description: 'Explore menu & order with ease using our Online Ordering',
  },
  {
    icon: 'fi fi-rr-gift',
    title: 'GIFT CARDS',
    description: 'Give the gift of exceptional dining with Foodi Gift Cards',
  },
];

const OurStory = () => {
  return (
    <Box
      sx={{
        maxWidth: '1200px',
        mx: 'auto',
        px: 2,
        py: 10,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: 6, md: 10 },
        alignItems: 'flex-start',
      }}
    >
      {/* LEFT SIDE */}
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="overline"
          sx={{
            color: '#F54748',
            letterSpacing: 2,
            mb: 1,
            fontWeight: 700,
          }}
        >
          OUR STORY & SERVICES
        </Typography>

        <Typography
          variant="h4"
          sx={{ fontWeight: 700, mb: 2, lineHeight: 1.3 }}
        >
          Our Culinary Journey<br />And Services
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 5}}>
          Rooted in passion, we curate unforgettable dining experiences and
          offer exceptional services, blending culinary artistry with warm
          hospitality.
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#39DB4A',
            color: '#FFFFFF',
            borderRadius: '30px',
            px: 5,
            py: 1.5,
            mb:5,
            fontWeight: 'bold',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#00e96b',
            },
          }}
        >
          Explore
        </Button>
      </Box>

      {/* RIGHT SIDE - 2x2 CARD GRID */}
      <Grid
        container
        spacing={10}
        sx={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr' }}
      >
        {services.map((service, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: '#fff',
              borderRadius: '15px',
              boxShadow: '0 10px 20px rgba(0,0,0,0.08)',
              p: 1,
              m: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              height: '100%',
            }}
          >
            <i
              className={service.icon}
              style={{ fontSize: '36px', color: '#5FE26C', marginBottom: '16px' }}
            ></i>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 'bold', color: '#90BD95', mb: 1 }}
            >
              {service.title}
            </Typography>
            <Typography
              variant="body2"
              color="#90BD95"
              sx={{ lineHeight: 1.5 }}
            >
              {service.description}
            </Typography>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default OurStory;
