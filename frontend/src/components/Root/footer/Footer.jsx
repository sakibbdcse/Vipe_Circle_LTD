import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#f8f9fa',
                color: '#6c757d',
                py: 2,
                textAlign: 'center',
                borderTop: '1px solid #e9ecef'
            }}
        >
            <Typography variant="body2">
                © {new Date().getFullYear()} Your Company. All Rights Reserved.
            </Typography>
            <Typography variant="body2">
                <Link href="/privacy-policy" underline="hover" color="inherit">
                    Privacy Policy
                </Link>{' | '}
                <Link href="/terms" underline="hover" color="inherit">
                    Terms of Service
                </Link>{' | '}
                <Link href="/contact" underline="hover" color="inherit">
                    Contact Us
                </Link>
            </Typography>
        </Box>
    );
};

export default Footer;
