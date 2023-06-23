import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import "../styles.module.css"

import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import logo from './logo.png'

import Fab, { fabClasses } from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import CreateSessionPopup from '../CreateSession/CreateSessionPopup';


// Code from Material UI docs for AppBar
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


// Code from Material UI docs for AppBar
export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const [isCreateSessionModalOpen, setIsCreateSessionModalOpen] = useState(false);


    const openCreateSessionModal = () => {
      setIsCreateSessionModalOpen(true);
  };

  const closeCreateSessionModal = () => {
      setIsCreateSessionModalOpen(false);
  };

  

      const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: '#052465'}}>
        <Toolbar sx={{gap: 2}}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link to="/"><img src={logo} width="90px" height="70px"></img></Link>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Link to="/mysessions" style={{ color: 'white' }}>
                <MenuItem>
                  My Sessions
                </MenuItem>
          </Link>
          <Fab variant="extended" sx={{backgroundColor:"#FDB501", color: "black"}} aria-label="create" onClick={openCreateSessionModal}>
                        <AddIcon />
                        Create Session
          </Fab>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
              <Link to="/profile" style={{ color: 'black' }}>
                <MenuItem>
                  Profile
                </MenuItem>
              </Link>
              <MenuItem onClick={handleClose}>Log out</MenuItem>
              </Menu>
        </Toolbar>
      </AppBar>
      {isCreateSessionModalOpen && (
                        <div>
                            <CreateSessionPopup closeModal={closeCreateSessionModal} />
                        </div>
                    )}
    </Box>
  );
}