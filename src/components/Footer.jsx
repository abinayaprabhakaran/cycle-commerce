import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box sx={{ py: 3, textAlign: 'center', borderTop: '1px solid #ddd', mt: 4 }}>
    <Typography variant="body2">&copy; 2025 HCL Commerce (B2C)</Typography>
  </Box>
);

export default Footer;