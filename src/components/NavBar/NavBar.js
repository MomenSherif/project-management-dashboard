import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AccountCircle from '@material-ui/icons/AccountCircle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuItem from '@material-ui/core/MenuItem';
import GroupIcon from '@material-ui/icons/Group';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/core/Menu';

import useStyles from './NavBarStyle';

import { logOut } from '../../actions/authentication';

const NavBar = ({ token, userId, onLogOut }) => {
  const matches = useMediaQuery('(max-width:700px)');
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position='static' className={classes.navBar}>
      <Container>
        <Toolbar>
          <div className={classes.toolBar}>
            <Button component={Link} to='/' color='inherit'>
              DashBoard
            </Button>
          </div>
          {matches && (
            <IconButton
              color='inherit'
              aria-label='menu'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Menu
            id='menu-appbar'
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
            open={open}
            onClose={handleClose}
          >
            {!token && (
              <div>
                <MenuItem to={`/profile/${userId}`} component={Link}>
                  <AccountCircle color='primary' className={classes.icon} />

                  <Typography> Profile</Typography>
                </MenuItem>
                <MenuItem component={Link} to='/projects'>
                  <GitHubIcon color='primary' className={classes.icon} />
                  <Typography> Projects</Typography>
                </MenuItem>
                <MenuItem component={Link} to='/teams'>
                  <GroupIcon color='primary' className={classes.icon} />
                  <Typography> Teams</Typography>
                </MenuItem>
                <MenuItem component={Link} to='/sign-in' onClick={onLogOut}>
                  <ExitToAppIcon color='primary' className={classes.icon} />
                  <Typography> Logout</Typography>
                </MenuItem>
              </div>
            )}
            {token && (
              <div>
                <MenuItem component={Link} to='/sign-up'>
                  <Typography> SignUp </Typography>
                </MenuItem>
                <MenuItem component={Link} to='/sign-in'>
                  <Typography> LogIn </Typography>
                </MenuItem>
              </div>
            )}
          </Menu>

          {!matches && token && (
            <div>
              <Button component={Link} to='/sign-up' color='inherit'>
                SIGNUP
              </Button>
              <Button component={Link} to='/sign-in' color='inherit'>
                LOGIN
              </Button>
            </div>
          )}
          {!matches && !token && (
            <div>
              <Button
                component={Link}
                to={`/profile/${userId}`}
                color='inherit'
                className={classes.menuItem}
              >
                <AccountCircle className={classes.icon} />
                Profile
              </Button>

              <Button
                component={Link}
                to='/projects'
                color='inherit'
                className={classes.menuItem}
              >
                <GitHubIcon className={classes.icon} />
                Projects
              </Button>
              <Button
                component={Link}
                to='/teams'
                color='inherit'
                className={classes.menuItem}
              >
                <GroupIcon className={classes.icon} />
                Teams
              </Button>
              <Button
                component={Link}
                to='/sign-in'
                color='inherit'
                className={classes.menuItem}
                onClick={onLogOut}
              >
                <ExitToAppIcon className={classes.icon} />
                Logout
              </Button>
            </div>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
  userId: state.auth.userId,
});

const mapDispatchToProps = (dispatch) => ({
  onLogOut: () => dispatch(logOut()),
});
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
