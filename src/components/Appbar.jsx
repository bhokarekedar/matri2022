import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useSelector } from 'react-redux'
//drawer
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import PersonIcon from '@mui/icons-material/Person';
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddHomeIcon from '@mui/icons-material/AddHome';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LogoutIcon from '@mui/icons-material/Logout';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate, useLocation } from "react-router-dom";
//MENUBAR
import MenuList from "@mui/material/MenuList";
import LogInDialogue from "./LoginDialogue";
import SignupDialogue from "./SignupDialogue";

function ElevationScroll(props) {
  const { children, window } = props;

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

const pages = [
  {
    label: "मुख्य पेज",
    item: "",
    icon: <AddHomeIcon/>
  },
  {
    label: "नाव नोंदणी",
    item: "Signup",
    icon: <LockOpenIcon/>
  },
  {
    label: "लॉगिन",
    item: "login",
    icon: <LockIcon/>
  },
];
const authPages = [
    {
      label: "प्रोफाइल",
      item: "Profile",
      icon: <PersonIcon/>
    },
    {
      label: "स्थळे",
      item: "Users",
      icon: <PersonIcon/>
    },
    {
      label: "लॉगऑऊट",
      item: "Logout",
      icon: <LogoutIcon/>
    },
  ];

export default function ElevateAppBar(props) {
  let navigate = useNavigate();
  const location = useLocation();
  const [openLogindrawer, setOpenLogindrawer] = React.useState(false);
  const [openLoginDialog, setOpenLoginDialog] = React.useState(false);
  const [openSignupDialog, setOpenSignupDialog] = React.useState(false);
  const isLoggedIn = useSelector((state) => state.authUser.isLoggedIn);
 
  let pagesVal  = isLoggedIn ? authPages : pages;
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
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const handleDrawerOpen = () => {
    setOpenLogindrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenLogindrawer(false);
  };
  const logoutBtn = (e, text) => {
    navigate("/login", { replace: true });
  };

  const RedirectToPage = (e, text) => {
    if (text === "HomePage") {
      navigate("/", { replace: true });
      setOpenLogindrawer(false);
    } else {
      navigate(`/${text}`, { replace: true });
      setOpenLogindrawer(false);
    }
  };

  

  const list = () => (
    <Box sx={{ width: 200 }} role="presentation">
      <MenuList>
        {pagesVal.map((val, index) => (
          <MenuItem
            key={index}
            onClick={(e) => {
              RedirectToPage(e, val.item);
            }}
          >
            <ListItemIcon>
             {val.icon}
            </ListItemIcon>
            <ListItemText>{val.label}</ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </Box>
  );

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar color="primary">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
            
              {/* mobile start*/}
            
                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  {pagesVal.map((page) => (
                    <Button
                      key={page}
                      onClick={(e) => RedirectToPage(e, page.item)}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {page.label}
                    </Button>
                  ))}
                </Box>
             

              <Box sx={{ flexGrow: 0 }}>
                {/* <Tooltip title="Open settings">
                                    <IconButton onClick={popupLogin} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                    </IconButton>
                                </Tooltip> */}
                {/* {location.pathname !== "/login" ? (
                  <Button
                    onClick={logoutBtn}
                    sx={{ color: "white", display: "block" }}
                  >
                    logout
                  </Button>
                ) : (
                  <></>
                )} */}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      {/* <Box m={2}/> */}
      <LogInDialogue
        val={{
          openLoginDialog,
          handleCloseLoginDialog,
          handleClickOpenSignupDialog,
        }}
      />
      <SignupDialogue
        val={{
          openSignupDialog,
          handleCloseSignupDialog,
          handleClickOpenLoginDialog,
        }}
      />
      <Toolbar />
    </React.Fragment>
  );
}
