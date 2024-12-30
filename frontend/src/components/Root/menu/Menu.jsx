import React, { useState } from 'react';
import { Box } from '@mui/material';
import Navbar from '../navbar/Navbar';
import LeftBar from '../sidebar/LeftBar';
// import RightBar from '../sidebar/RightBar';
const Menu = () => {
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => {
        setOpen((prev) => !prev);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <Navbar open={open} toggleDrawer={toggleDrawer} />
            <LeftBar open={open} toggleDrawer={toggleDrawer} />
            {/* <RightBar /> */}
        </Box>
    );
};

export default Menu;
