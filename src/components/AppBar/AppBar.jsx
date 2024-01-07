import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import {Button} from "@mui/material";
import {HashLink as Link} from 'react-router-hash-link';

const pages = [
    {
        href: '',
        title: 'Home',
    },
    {
        href: '#about',
        title: 'About me',
    },
    {
        href: '#projects',
        title: 'Projects',
    },
    {
        href: '#skills',
        title: 'Skills',
    },
    {
        href: 'contact',
        title: 'Contact',
    }
];
const logo = 'VOLODYMYR KUROV'

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link
                        to={``}
                        style={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            {logo}
                        </Typography>
                    </Link>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
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
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                                    <Link to={`/${page.href}`} style={{textDecoration: "none"}}>
                                        <Typography textAlign="center">{page.title}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Link to={``}
                          style={{
                              mr: 2,
                              display: {xs: 'none', md: 'flex'},
                              fontFamily: 'monospace',
                              fontWeight: 700,
                              letterSpacing: '.3rem',
                              color: 'inherit',
                              textDecoration: 'none',
                          }}>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: {xs: 'flex', md: 'none'},
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            {logo}
                        </Typography>
                    </Link>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}, justifyContent: 'flex-end'}}>
                        {pages.map((page) => (
                            <Link
                                to={`/${page.href}`}
                                style={{textDecoration: "none"}}>
                                <Button
                                    key={page.title}
                                    onClick={handleCloseNavMenu}
                                    sx={{my: 2, color: 'white', display: 'block'}}
                                >
                                    {page.title}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
