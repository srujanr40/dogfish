import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import "../styles.module.css"
import { updateSessionAsync } from '../../redux/session/sessionThunks';

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

import CreateSessionPopup from "../CreateSession/CreateSessionPopup.jsx";
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import logo from './logo.png';


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
export default function Navbar({ onSearch, showSearch }) {
  const dispatch = useDispatch();

  const recommendedSession = useSelector((store) => store.sessionReducer).recommendedSession;
  const profile = useSelector((store) => store.profileReducer).profile;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isCreateSessionModalOpen, setIsCreateSessionModalOpen] =
    useState(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    onSearch(searchTerm);
  };

  const updateSession = () => {
    let session = recommendedSession;
    let updatedMembers = [...session.members, profile];
    let updatedSession = { ...session, members: updatedMembers };
    dispatch(updateSessionAsync(updatedSession));
  }

  const openCreateSessionModal = () => {
    setIsCreateSessionModalOpen(true);
  };

  const closeCreateSessionModal = () => {
    setIsCreateSessionModalOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: '#DD4D2B' }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link to="/dashboard"><img src={logo} height="70px" /></Link>
          </Typography>
          {showSearch && (  // Conditionally render the search bar
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleSearchChange}
              />
            </Search>
          )}

          <Link to="/mysessions" style={{ color: 'white' }}>
            <MenuItem sx={{ paddingLeft: 3 }}>
              <b>My Sessions</b>
            </MenuItem>
          </Link>
          <Link to="/forum" style={{ color: 'white' }}>
            <MenuItem sx={{ paddingRight: 4 }}>
              <b>Forum</b>
            </MenuItem>
          </Link>
          <div>
            {recommendedSession && <Link to={`/join?groupId=${recommendedSession.groupId}`} style={{ color: 'white', marginRight: '10px' }}>
              <Fab variant="extended" color="primary" aria-label="create" size="small" onClick={updateSession}>
                <AutoAwesomeIcon sx={{ paddingRight: 1 }} />
                Auto-join
              </Fab>
            </Link>
            }
          </div>
          {showSearch && (
            <div>
              <Fab variant="extended" color="primary" aria-label="create" size="small" onClick={openCreateSessionModal}>
                <AddIcon sx={{ paddingRight: 1 }} />
                Create Session
              </Fab>
            </div>
          )}
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
            sx={{ paddingLeft: 2 }}
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
            <Link to="/login" style={{ color: 'black' }}>
              <MenuItem onClick={handleClose}>Log out</MenuItem>
            </Link>
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