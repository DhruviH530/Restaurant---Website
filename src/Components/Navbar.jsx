import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

// Images
import LogoF from '../assets/F.png';
import LogoText from '../assets/oodi.png';
import SearchIcon from '../assets/🦆 icon _search_.png';
import CartIcon from '../assets/fi-rr-shopping-bag.png';
import PhoneIcon from '../assets/fi-rr-phone-call.png';

const Navbar = ({ cartCount }) => {
  const [open, setOpen] = useState(false);

  const menuItems = ['Home', 'Menu', 'Services', 'Offers'];

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ py: 2, minHeight: '80px' }}>
          {/* Container */}
          <Box
            sx={{
              maxWidth: '1300px',
              width: '100%',
              mx: 'auto',
              px: { xs: 2, sm: 3, md: 4 },
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {/* LEFT: Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  backgroundColor: '#32CD32',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src={LogoF} alt="F" style={{ height: 16 }} />
              </Box>
              <img
                src={LogoText}
                alt="FOODI"
                style={{ height: 22, marginLeft: 8 }}
              />
            </Box>

            {/* CENTER: Menu */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
                flex: 2,
              }}
            >
              {menuItems.map((item, index) => (
                <Button
                  key={item}
                  component={Link}
                  to={`/${item.toLowerCase()}`} // Assuming you have routes set up
                  sx={{
                    mx: 1.5,
                    fontWeight: 500,
                    fontFamily: 'Poppins',
                    fontSize: '1rem',
                    color: index === 0 ? '#32CD32' : '#000',
                    textTransform: 'none',
                    '&:hover': {
                      color: '#32CD32',
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>

            {/* RIGHT: Icons & Contact */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                justifyContent: 'flex-end',
                flex: 1,
              }}
            >
              <IconButton sx={{ mx: 0.5 }}>
                <img src={SearchIcon} alt="Search" style={{ height: 22 }} />
              </IconButton>
              <IconButton sx={{ mx: 0.5 }} component={Link} to="/cart">
                <img src={CartIcon} alt="Cart" style={{ height: 22 }} />
                {cartCount > 0 && (
                  <span style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    background: 'red',
                    borderRadius: '50%',
                    color: 'white',
                    padding: '2px 6px',
                    fontSize: '12px',
                  }}>
                    {cartCount}
                  </span>
                )}
              </IconButton>

              <Button
                variant="contained"
                sx={{
                  ml: 1.5,
                  backgroundColor: '#39DB4A',
                  textTransform: 'none',
                  px: 2.5,
                  fontWeight: 600,
                  fontFamily: 'Poppins',
                  borderRadius: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  fontSize: '0.9rem',
                }}
              >
                <img src={PhoneIcon} alt="Contact" style={{ height: 15 }} />
                Contact
              </Button>
            </Box>

            {/* MOBILE: Hamburger Icon */}
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <IconButton onClick={() => setOpen(true)}>
                <MenuIcon sx={{ color: '#000' }} />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile View */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250,
          },
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton component={Link} to={`/${item.toLowerCase()}`}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
          {/* Icons inside mobile menu */}
          <ListItem>
            <IconButton sx={{ mr: 1 }}>
              <img src={SearchIcon} alt="Search" style={{ height: 22 }} />
            </IconButton>
            <IconButton sx={{ mr: 1 }} component={Link} to="/cart">
              <img src={CartIcon} alt="Cart" style={{ height: 22 }} />
              {cartCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  background: 'red',
                  borderRadius: '50%',
                  color: 'white',
                  padding: '2px 6px',
                  fontSize: '12px',
                }}>
                  {cartCount}
                </span>
              )}
            </IconButton>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#39DB4A',
                textTransform: 'none',
                px: 2,
                fontWeight: 600,
                fontFamily: 'Poppins',
                borderRadius: '50px',
                fontSize: '0.85rem',
              }}
            >
              <img src={PhoneIcon} alt="Contact" style={{ height: 14, marginRight: 6 }} />
              Contact
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
