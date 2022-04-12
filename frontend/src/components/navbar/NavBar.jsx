import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Slide, useScrollTrigger } from '@mui/material';

import { Link } from 'react-router-dom';

import logo from '../../assets/logo/00.svg'

const pages = [
  { name: 'Get a Coach', link: '/getacoach' },
  { name: 'Tools', link: '/tools' },
  { name: 'Become a Coach', link: '/becomeacoach' },
  { name: 'About us', link: '/aboutus' },
  { name: 'Contact us', link: '/contactus' },
  { name: 'Join us', link: '/joinus' },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      <AppBar position={props.position} style={{ backgroundColor: '#fbe551', color: 'black', minHeight: props.minHeight }}>
        <Container maxWidth="xl">
          <div className='d-flex flex-row align-items-center justify-content-around'>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ my: 'max(1vh, 10px)', display: { xs: 'none', md: 'flex' }, textTransform: 'none', fontFamily: "'Felona st'", fontSize: 'max(3.5vh, 19px)' }}
            >
              {/* <Link style={{ color: 'black', textDecoration: 'none' }} to='/'>{props.brand}</Link> */}
              <Link style={{ color: 'black', textDecoration: 'none' }} to='/'>
                <img src={logo} style={{ width: '5em' }} />
              </Link>

            </Typography>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', textTransform: 'none' }, fontFamily: "'Felona st'" }}
            >
              {/* <Link style={{ color: 'black', textDecoration: 'none' }} to='/'>{props.brand}</Link> */}
              <Link style={{ color: 'black', textDecoration: 'none' }} to='/'>
                <img src={logo} style={{ width: '5em' }} />
              </Link>
            </Typography>

            {/* Mobile Screen */}
            <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page, i) => (
                  <MenuItem key={i} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center"
                      sx={{
                        textTransform: 'none',
                        color: 'black',
                        letterSpacing: '2.4px', fontSize: '16px', fontWeight: '500'
                      }}>
                      <Link style={{ color: 'black', textDecoration: 'none' }} to={page.link}>{page.name}</Link>
                      {/* {page.name} */}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Desktop Screen */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'row', justifyContent: 'space-between', width: '50vw', backgroundColor: 'none' }}>
              {pages.map((page, i) => (
                <div
                  key={i}
                  className='mx-2'
                  // onClick={handleCloseNavMenu}
                  style={{
                    my: 2, display: 'block', textTransform: 'none', color: 'black',
                    fontSize: 'max(2vh, 9px)', letterSpacing: 'calc(0.14vw)', backgroundColor: 'none',
                    fontFamily: 'Roboto', fontWeight: '500', cursor: 'pointer', userSelect: 'none', whiteSpace: 'nowrap'
                  }}
                >
                  <Link style={{ color: 'black', textDecoration: 'none' }} to={page.link}>{page.name}</Link>
                  {/* {page.name} */}

                </div>
              ))}
            </Box>


          </div>
        </Container>
      </AppBar>
    </Slide>
  );
};
export default ResponsiveAppBar;
