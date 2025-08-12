import { Box, Grid, Typography, Link } from "@mui/material";

export default function AboutUs() {
  return (
    <Box sx={{ py: 6, px: { xs: 3, sm: 5, md: 8 }, width: "100%", maxWidth: 1200, mx: "auto" }}>
      <Grid container spacing={{ xs: 6, md: 4 }} alignItems="flex-start">
        
        {/* Left Section */}
        <Grid item xs={12} md={4}>
          <Box display="flex" alignItems="center" mb={2}>
            <Box
              sx={{
                width: 34,
                height: 41,
                backgroundColor: "#39DB4A", 
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mr: 0,
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontFamily: "Inter",
                }}
              >
                F
              </Typography>
            </Box>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ fontFamily: "Inter" }}
            >
              OODI
            </Typography>
          </Box>

          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "24px",
              lineHeight: "151%",
              letterSpacing: "0em",
              color: "#555555",
              maxWidth: 280,
              mb: 3,
              
            }}
          >
            Savor the artistry where every dish is a culinary masterpiece
          </Typography>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={5}>
          <Grid 
            container 
            spacing={{ xs: 6, sm: 10, md: 20 }} 
            justifyContent={{ xs: "flex-start", md: "flex-center" }}
          > 
            {/* Useful Links */}
            <Grid item xs={6} sm={4}>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "24px",
                  lineHeight: "100%",
                  mb: 4,
                }}
              >
                Useful links
              </Typography>
              {["About us", "Events", "Blogs", "FAQ"].map((link) => (
                <Typography
                  key={link}
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "100%",
                    color: "text.secondary",
                    mb: 3
                  }}
                >
                  <Link href="#" underline="none" color="inherit">
                    {link}
                  </Link>
                </Typography>
              ))}
            </Grid>

            {/* Main Menu */}
            <Grid item xs={6} sm={4}>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "26px",
                  lineHeight: "100%",
                  mb: 5
                }}
              >
                Main Menu
              </Typography>
              {["Home", "Offers", "Menus", "Reservation"].map((link) => (
                <Typography
                  key={link}
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "100%",
                    color: "text.secondary",
                    mb: 3
                  }}
                >
                  <Link href="#" underline="none" color="inherit">
                    {link}
                  </Link>
                </Typography>
              ))}
            </Grid>

            {/* Contact Us */}
            <Grid item xs={12} sm={4}>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "26px",
                  lineHeight: "100%",
                  mb: 5
                }}
              >
                Contact Us
              </Typography>
              {["example@email.com", "+64 958 248 966", "Social media"].map((info) => (
                <Typography
                  key={info}
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "100%",
                    color: "text.secondary",
                    mb: 4
                  }}
                >
                  {info}
                </Typography>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
