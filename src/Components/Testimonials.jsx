import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

import chefImg from '../assets/pngwing 2.png';
import emoji1 from '../assets/😋.png';
import emoji2 from '../assets/🍕.png';
import user1 from '../assets/c1.png';
import user2 from '../assets/c2.png';
import user3 from '../assets/c3.png';

const Testimonials = () => {
  return (
    <Box
      sx={{
        maxWidth: '1200px',
        mx: 'auto',
        px: 2,
        py: 10,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: 6, md: 6 },
        alignItems: 'center',
      }}
    >
      {/* LEFT CONTAINER */}
      <Box
        sx={{
          position: 'relative',
          width: { xs: '100%', md: 370 }, 
          height: 380,
          flexShrink: 0,
        }}
      >
        {/* Green Background Shape */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 350,
            height: 240,
            backgroundColor: '#00FF75',
            borderTopLeftRadius: 120,
            borderTopRightRadius: 120,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            zIndex: 1,
          }}
        />

        {/* Chef Image */}
        <Box
          component="img"
          src={chefImg}
          alt="Chef"
          sx={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 300,
            zIndex: 2,
          }}
        />

        {/* Emoji 1 */}
        <Box
          component="img"
          src={emoji1}
          alt="emoji1"
          sx={{
            position: 'absolute',
            left: 0,
            bottom: '40%',
            width: 40,
            height: 40,
            zIndex: 3,
          }}
        />

        {/* Emoji 2 */}
        <Box
          component="img"
          src={emoji2}
          alt="emoji2"
          sx={{
            position: 'absolute',
            right: 6,
            bottom: '40%',
            width: 40,
            height: 40,
            zIndex: 3,
          }}
        />

        {/* Bottom Label */}
        <Box
          sx={{
            position: 'absolute',
            bottom: -10,
            left: '70%',
            transform: 'translateX(-50%)',
            backgroundColor: '#fff',
            px: 2,
            py: 0.5,
            borderRadius: 20,
            boxShadow: '0px 2px 6px rgba(0,0,0,0.1)',
            zIndex: 4,
          }}
        >
          <Typography variant="caption" fontWeight={500}>
            Our Best Chef
          </Typography>
        </Box>
      </Box>

      {/* RIGHT CONTAINER */}
      <Box
        sx={{
          flex: 1,
          maxWidth: { md: 760 }, 
          pl: { md: 25 },
        }}
      >
        <Typography
          variant="overline"
          sx={{
            color: '#F54748',
            letterSpacing: 3,
            mt:7,
            // mb: 1,
            fontWeight: 700,
            
          }}
        >
          TESTIMONIALS
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 2,
            lineHeight: 1.3,
          }}
        >
          What Our Customers<br />Say About Us
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: 500 , }} 
        >
          “I had the pleasure of dining at Foodi last night, and I'm still raving
          about the experience! The attention to detail in presentation and service
          was impeccable”
        </Typography>

        {/* Customer Feedback */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Avatars */}
          <Box sx={{ display: 'flex' }}>
            <Avatar src={user1} sx={{ width: 40, height: 40, mr: -1 }} />
            <Avatar src={user2} sx={{ width: 40, height: 40, mr: -1 }} />
            <Avatar src={user3} sx={{ width: 40, height: 40 }} />
          </Box>

          {/* Feedback Text */}
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              Customer Feedback
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <StarIcon sx={{ color: '#FFD700', fontSize: 20 }} />
              <Typography variant="body2" fontWeight="bold">
                4.9
              </Typography>
              <Typography variant="body2" color="text.secondary">
                (18.6k Reviews)
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
