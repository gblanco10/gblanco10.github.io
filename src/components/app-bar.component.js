import React, { useRef } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import WorkIcon from '@mui/icons-material/Work';
import ScienceIcon from '@mui/icons-material/Science';
import GitHubIcon from '@mui/icons-material/GitHub';
import CallIcon from '@mui/icons-material/Call';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import MenuList from '@mui/material/MenuList';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

import { useTheme } from '@mui/styles';

import { Link } from "react-scroll";


const useStyles = makeStyles((theme) => ({
    startICon: {
        margin: '0px',
        padding: '0px'
    },
    menuIcon: {
        color: 'white',
        fontSize: '40'
    },
    menuText:
    {
        fontWeight: 'bold'
    }

}));

const ResponsiveAppBar = () => {

    const classes = useStyles();
    const toolbarRef = useRef()
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const theme = useTheme();


    return (
        <AppBar position="sticky" ref={toolbarRef}>
            <Toolbar>
                <Box sx={{ flexGrow: 2, display: { xs: 'flex' } }}>
                    <Typography variant='h5'>
                        Giacomo Blanco
                    </Typography>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Link
                        activeClass="active"
                        to="experience"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                    >
                        <Button
                            key={'Exp'}
                            classes={{ startIcon: classes.startICon }}
                            sx={{ my: 2, color: 'white', display: 'flex', margin: 0 }}
                            startIcon={<WorkIcon fontSize="40" sx={{ marginRight: '8px' }} />}
                        >
                            Experience
                        </Button>
                    </Link>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Link
                        activeClass="active"
                        to="publications"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                    >
                        <Button
                            key={'Pub'}
                            classes={{ startIcon: classes.startICon }}
                            sx={{ my: 2, color: 'white', display: 'flex', margin: 0 }}
                            startIcon={<ScienceIcon fontSize="large" sx={{ marginRight: '8px' }} />}
                        >
                            Publications
                        </Button>
                    </Link>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                    >
                        <Button
                            key={'Proj'}
                            classes={{ startIcon: classes.startICon }}
                            sx={{ my: 2, color: 'white', display: 'flex', margin: 0 }}
                            startIcon={<GitHubIcon fontSize="large" sx={{ marginRight: '8px' }} />}
                        >
                            Projects
                        </Button>
                    </Link>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Link
                        activeClass="active"
                        to="contacts"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                    >
                        <Button
                            key={'Cont'}
                            classes={{ startIcon: classes.startICon }}
                            sx={{ my: 2, color: 'white', display: 'flex', margin: 0 }}
                            startIcon={<CallIcon fontSize="large" sx={{ marginRight: '8px' }} />}
                        >
                            Contacts
                        </Button>
                    </Link>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        onClick={handleClose}
                        variant='menu'
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                color: 'primary.contrastText',
                                mt: 2.5,
                                ml: -1.5,
                                border: 1.2,
                                borderColor: 'primary.dark'
                            },
                        }}
                    >
                        <MenuList>
                            <Link
                                activeClass="active"
                                to="experience"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                            >
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon >
                                        <WorkIcon className={classes.menuIcon} />
                                    </ListItemIcon>
                                    <ListItemText primaryTypographyProps={{ fontWeight: 'bold' }}>
                                        Experience
                                    </ListItemText>
                                </MenuItem>
                            </Link>
                            <Link
                                activeClass="active"
                                to="publications"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                            >
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon >
                                        <ScienceIcon className={classes.menuIcon} />
                                    </ListItemIcon>
                                    <ListItemText primaryTypographyProps={{ fontWeight: 'bold' }}>
                                        Publications
                                    </ListItemText>
                                </MenuItem>
                            </Link>
                            <Link
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                            >
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon >
                                        <GitHubIcon className={classes.menuIcon} />
                                    </ListItemIcon>
                                    <ListItemText primaryTypographyProps={{ fontWeight: 'bold' }}>
                                        Projects
                                    </ListItemText>
                                </MenuItem>
                            </Link>
                            <Link
                                activeClass="active"
                                to="contacts"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                            >
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon >
                                        <CallIcon className={classes.menuIcon} />
                                    </ListItemIcon>
                                    <ListItemText primaryTypographyProps={{ fontWeight: 'bold' }}>
                                        Contacts
                                    </ListItemText>
                                </MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar >
    );
};
export default ResponsiveAppBar;
