import { Box, Typography } from '@mui/material';
import bannerImg from '../assets/banner.jpg';

const BannerCarousel = () => (
  <Box
    sx={{
      height: 300,
      borderRadius: 2,
      mb: 4,
      position: "relative",
      overflow: "hidden",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      textAlign: "center",
      backgroundImage: `url(${bannerImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >

    {/* DARK OVERLAY */}
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        background: "rgba(0, 0, 0, 0.45)",  // adjust 0.45 -> 0.6 if you want darker
      }}
    />

    {/* TEXT */}
    <Typography 
      variant="h2" 
      sx={{ 
        zIndex: 2,
        textShadow: "0 3px 10px rgba(0,0,0,0.8)"
      }}
    >
      HCL Commerce (B2C)
    </Typography>

    <Typography 
      variant="subtitle1" 
      sx={{ 
        zIndex: 2,
        textShadow: "0 3px 10px rgba(0,0,0,0.8)"
      }}
    >
      Elevate your shopping experience!
    </Typography>

  </Box>
);

export default BannerCarousel;
