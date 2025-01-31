import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import MovieIcon from '@mui/icons-material/Movie';
import TheatersIcon from '@mui/icons-material/Theaters';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import CastIcon from '@mui/icons-material/Cast';
import { Link } from 'react-router-dom';

const RightBar = () => {
    const RightItems = [
        { title: 'Moivies', icon: <MovieIcon />, link: '/Moivies' },
        { title: 'Web seris', icon: <TheatersIcon />, link: '/MyNetworek' },
        { title: 'Natok', icon: <MovieFilterIcon />, link: '/AddNetwork' },
        { title: 'Tv Show', icon: <CastIcon />, link: '/event' },
    ];

    return (
        <List>
            {RightItems.map((item, index) => (
                <ListItem key={index} disablePadding>
                    <ListItemButton
                        component={Link}
                        to={item.link}
                        sx={{
                            minHeight: 48,
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                justifyContent: 'center',
                                mr: 3
                            }}
                        >
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
};

export default RightBar;
