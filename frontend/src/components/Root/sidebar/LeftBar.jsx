import React from 'react';
import { styled } from '@mui/material/styles';
import { Drawer, List, Divider, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import StoreIcon from '@mui/icons-material/Store';
import WorkIcon from '@mui/icons-material/Work';
import AssistantIcon from '@mui/icons-material/Assistant';
import SchoolIcon from '@mui/icons-material/School';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import AppsIcon from '@mui/icons-material/Apps';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const StyledDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    })
);

const LeftBar = ({ open, toggleDrawer }) => {
    const leftItems = [
        { title: 'Social', icon: <Diversity1Icon />, link: '/social' },
        { title: 'Entertainment', icon: <VideoLibraryIcon />, link: '/entertainment' },
        { title: 'Shop', icon: <StoreIcon />, link: '/shop' },
        { title: 'Jobs', icon: <WorkIcon />, link: '/orders' },
        { title: 'AI', icon: <AssistantIcon />, link: '/categories' },
        { title: 'Class', icon: <SchoolIcon />, link: '/brands' },
        { title: 'Games', icon: <SportsEsportsIcon />, link: '/coupons' },
        { title: 'Live Tv', icon: <LiveTvIcon />, link: '/Livetv' },
        { title: 'Software', icon: <AppsIcon />, link: '/software' },
        { title: 'Settings', icon: <SettingsIcon />, link: '/settings' },
        { title: 'Logout', icon: <LogoutIcon />, link: '/logout' },
    ];

    return (
        <StyledDrawer variant="permanent" open={open}>
            <DrawerHeader>
                <IconButton onClick={toggleDrawer}>
                    {open ? <MenuOpenIcon /> : <MenuIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {leftItems.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            component={Link}
                            to={item.link}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </StyledDrawer>
    );
};

export default LeftBar;
