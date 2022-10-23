import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

//drawer
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { useNavigate, useLocation } from 'react-router-dom';
//MENUBAR
import MenuList from '@mui/material/MenuList';
import LogInDialogue from './LoginDialogue';
import SignupDialogue from './SignupDialogue';

function ElevationScroll(props) {
    const { children, window } = props;
   

    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.

   
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

const pages = ['HomePage', 'Profile', 'Users'];

export default function ElevateAppBar(props) {
    let navigate = useNavigate();
    const location = useLocation();
    const [openLogindrawer, setOpenLogindrawer] = React.useState(false);
    const [openLoginDialog, setOpenLoginDialog] = React.useState(false);
    const [openSignupDialog, setOpenSignupDialog] = React.useState(false);


    const handleClickOpenSignupDialog = () => {
        setOpenLoginDialog(false);
        setOpenSignupDialog(true);
    };

    const handleCloseSignupDialog = () => {
        setOpenSignupDialog(false);
        setOpenLoginDialog(false);
    };

    const handleClickOpenLoginDialog = () => {
        setOpenSignupDialog(false);
        setOpenLoginDialog(true);
    };

    const handleCloseLoginDialog = () => {
        setOpenSignupDialog(false);
        setOpenLoginDialog(false);
    };


    const iOS =
        typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const handleDrawerOpen = () => {
        setOpenLogindrawer(true);
    };

    const handleDrawerClose = () => {
        setOpenLogindrawer(false);
    };
    const logoutBtn = (e, text) => {
       
 navigate("/login", { replace: true });
      
    }

    const RedirectToPage = (e, text) => {
        if (text === "HomePage") {
            navigate("/", { replace: true });
            setOpenLogindrawer(false);
        }
        else {
            navigate(`/${text}`, { replace: true });
            setOpenLogindrawer(false);
        }
    }

    const popupLogin = () => {
        setOpenLoginDialog(true);
    };

    const list = () => (
        <Box
            sx={{ width: 200 }}
            role="presentation"
        >
            <MenuList>
                {pages.map((text, index) => (

                    <MenuItem key={index} onClick={(e) => { RedirectToPage(e, text) }}
                    >
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText>{text}</ListItemText>
                    </MenuItem>
                ))}
            </MenuList>
        </Box>
    );

    return (
        <React.Fragment>

            <ElevationScroll {...props}>
                <AppBar>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' }
                                }}
                            >
                                LOGO
                            </Typography>


                            {/* mobile start*/}
                            {location.pathname !== "/login" ? <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleDrawerOpen}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>


                              
                                <SwipeableDrawer
                                    disableBackdropTransition={!iOS}
                                    disableDiscovery={iOS}
                                    anchor="left"
                                    open={openLogindrawer}
                                    onClose={handleDrawerClose}
                                    onOpen={handleDrawerOpen}
                                >
                                    {list()}
                                </SwipeableDrawer> 
                            </Box>
                            : <></>}

                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                            >
                                LOGO
                            </Typography>
                            {location.pathname !== "/login" ? 
                    
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={(e) => RedirectToPage(e, page)}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>  : <></>}

                            <Box sx={{ flexGrow: 0 }}>
                                {/* <Tooltip title="Open settings">
                                    <IconButton onClick={popupLogin} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                    </IconButton>
                                </Tooltip> */}
                            {location.pathname !== "/login" ?  <Button
                                    onClick={logoutBtn}
                                    sx={{ color: 'white', display: 'block' }}
                                >
                                   logout
                                </Button> :
                              <></>
                                }
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </ElevationScroll>
            {/* <Box m={2}/> */}
            <LogInDialogue val={{ openLoginDialog, handleCloseLoginDialog, handleClickOpenSignupDialog }} />
            <SignupDialogue val={{ openSignupDialog, handleCloseSignupDialog, handleClickOpenLoginDialog }} />
            <Toolbar />
        </React.Fragment >
    );
}