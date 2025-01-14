import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import ContactsIcon from '@mui/icons-material/Contacts';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EventIcon from '@mui/icons-material/Event';
import { Link } from 'react-router-dom';

const RightBar = () => {
    const RightItems = [
        { title: 'Chat', icon: <MailIcon />, link: '/chat' },
        { title: 'My Networek', icon: <ContactsIcon />, link: '/MyNetworek' },
        { title: 'Add network', icon: <PersonAddIcon />, link: '/AddNetwork' },
        { title: 'Events', icon: <EventIcon />, link: '/event' },
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
