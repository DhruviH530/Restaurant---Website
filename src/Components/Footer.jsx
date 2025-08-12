import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#fff", borderTop: "1px solid #eaeaea" }}>
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          py: 2,
          px: { xs: 2, md: 8 },
          display: "flex",
          flexDirection: "row", // Row layout
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left Side - Social Icons */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton
            sx={{
              backgroundColor: "#00c853",
              color: "#fff",
              "&:hover": { backgroundColor: "#00b34a" },
            }}
          >
            <FaFacebookF />
          </IconButton>

          <IconButton
            sx={{
              backgroundColor: "#EDFFEF",
              color: "#484848",
              "&:hover": { backgroundColor: "rgba(0, 200, 83, 0.15)" },
            }}
          >
            <FaInstagram />
          </IconButton>

          <IconButton
            sx={{
              backgroundColor: "#EDFFEF",
              color: "#484848",
              "&:hover": { backgroundColor: "rgba(0, 200, 83, 0.15)" },
            }}
          >
            <FaTwitter />
          </IconButton>

          <IconButton
            sx={{
              backgroundColor: "#EDFFEF",
              color: "#484848",
              "&:hover": { backgroundColor: "rgba(0, 200, 83, 0.15)" },
            }}
          >
            <FaYoutube />
          </IconButton>
        </Box>

        {/* Center - Copyright Text */}
        <Typography
          variant="body2"
          sx={{
            color: "#484848",
            textAlign: "center",
            flex: 1, 
          }}
        >
          Copyright © 2023 Dscode | All rights reserved
        </Typography>

        {/* Empty box for spacing on right */}
        <Box sx={{ width: "120px" }} />
      </Box>
    </Box>
  );
}
