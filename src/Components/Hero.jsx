import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Button,
  Paper,
  Avatar,
  Rating,
  Container,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HeroImg from '../assets/girl (1).png';
import RectangleBg from '../assets/Rectangle gril.png.png';
import Food1 from '../assets/food1.png.png';
import Food2 from '../assets/food2.png.png';

const Hero = () => {
  return (
    <Box sx={{ backgroundColor: '#ffffff', py: { xs: 8, md: 12 } }}>
      {/* Main container  */}
      <Container
        sx={{
          maxWidth: '1300px !important', 
          '@media (max-width:1300px)': {
            px: 2,
          },
        }}
      >
        <Grid container spacing={20} alignItems="center" justifyContent="center">
          {/* LEFT SECTION */}
          <Grid item xs={12} md={7}>
            <Typography
              sx={{
                fontWeight: 700,
                fontFamily: 'inter',
                fontSize: { xs: '2rem', md: '3.5rem' },
                lineHeight: 1.2,
                mb: 3,
              }}
            >
              Dive into Delights <br />
              Of Delectable{' '}
              <Box component="span" sx={{ color: '#39DB4A' }}>
                Food
              </Box>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '1rem', md: '1.2rem' },
                fontFamily: 'inter',
                color: '#4A4A4A',
                mb: 4,
              }}
            >
              Where Each Plate Weaves a Story of Culinary Mastery <br />
              and Passionate Craftsmanship
            </Typography>

            {/* Buttons */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#39DB4A',
                  fontFamily: 'inter',
                  fontWeight: 500,
                  px: 4,
                  py: 1.5,
                  textTransform: 'none',
                  borderRadius: '30px',
                  boxShadow: '0px 8px 24px rgba(57, 219, 74, 0.25)',
                  '&:hover': {
                    backgroundColor: '#28b428',
                  },
                }}
              >
                Order Now
              </Button>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography sx={{ fontWeight: 600, fontFamily: 'inter' }}>Watch Video</Typography>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: '#fff',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <PlayArrowIcon sx={{ color: '#000' }} />
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* RIGHT SECTION */}
          <Grid item xs={12} md={5} sx={{ position: 'relative' }}>
            {/* Badge */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: '25%',
                transform: 'translateX(-50%)',
                backgroundColor: '#fff',
                px: 2,
                py: 1,
                borderRadius: '20px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                fontSize: '0.9rem',
                color: '#f44336',
                fontWeight: 500,
                zIndex: 3,
              }}
            >
              Hot spicy Food 🌶️
            </Box>

            {/* Background Circle */}
            <Box
              component="img"
              src={RectangleBg}
              alt="Background"
              sx={{
                width: '350px',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 1,
              }}
            />

            {/* Girl Image */}
            <Box
              component="img"
              src={HeroImg}
              alt="Hero"
              sx={{
                width: '100%',
                maxWidth: '400px',
                mx: 'auto',
                position: 'relative',
                zIndex: 2,
              }}
            />

            {/* Product Cards */}
            <Box
              sx={{
                position: 'absolute',
                bottom: -30,
                right: 0,
                display: 'flex',
                gap: 2,
                zIndex: 4,
              }}
            >
              {/* Card 1 */}
              <Paper
                elevation={0}
                sx={{
                  p: 1.5,
                  borderRadius: 3,
                  display: 'flex',
                  alignItems: 'center',
                  width: 170,
                  boxShadow: '2px 10px 30px 0px #0000001A',
                }}
              >
                <Avatar src={Food1} alt="Spicy noodles" sx={{ width: 50, height: 50, mr: 1.5 }} />
                <Box>
                  <Typography variant="caption" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>
                    Spicy noodles
                  </Typography>
                  <Rating value={3} size="small" readOnly />
                  <Typography sx={{ fontSize: '0.75rem', fontWeight: 600 }}>$18.00</Typography>
                </Box>
              </Paper>

              {/* Card 2 */}
              <Paper
                elevation={0}
                sx={{
                  p: 1.5,
                  borderRadius: 3,
                  display: 'flex',
                  alignItems: 'center',
                  width: 170,
                  boxShadow: '2px 10px 30px 0px #0000001A',
                }}
              >
                <Avatar src={Food2} alt="Vegetarian salad" sx={{ width: 50, height: 50, mr: 1.5 }} />
                <Box>
                  <Typography variant="caption" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>
                    Vegetarian salad
                  </Typography>
                  <Rating value={4} size="small" readOnly />
                  <Typography sx={{ fontSize: '0.75rem', fontWeight: 600 }}>$23.00</Typography>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
