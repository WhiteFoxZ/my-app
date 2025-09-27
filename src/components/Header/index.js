import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import Button from '@mui/material/Button';
import { MdOutlineMenuOpen, MdDarkMode } from 'react-icons/md';

import SearchBox from '../SearchBox';
import { MdOutlineLightMode } from 'react-icons/md';
import { IoCartOutline } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaRegBell } from 'react-icons/fa6';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Box from '@mui/material/Box';

import { IoShieldHalfSharp } from 'react-icons/io5';

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleAccountClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleAccountClose = () => {
        setAnchorEl(null);
    };

    const [bellEl, setBellEl] = React.useState(null);
    const openBell = Boolean(bellEl);

    const handleRegBellMenuClick = event => {
        setBellEl(event.currentTarget);
    };
    const handleRegBellMenuClose = () => {
        setBellEl(null);
    };

    const [cartEl, setCartEl] = React.useState(null);
    const openCart = Boolean(cartEl);

    const handleCartMenuClick = event => {
        setCartEl(event.currentTarget);
    };
    const handleCartMenuClose = () => {
        setCartEl(null);
    };

    const [mailEl, setMailEl] = React.useState(null);
    const openMail = Boolean(mailEl);

    const handleMailMenuClick = event => {
        setMailEl(event.currentTarget);
    };
    const handleMailMenuClose = () => {
        setMailEl(null);
    };

    const [light, setLight] = React.useState(Boolean(false));

    const handleLightMenuClick = event => {
        setLight(light ? Boolean(false) : Boolean(true));
    };

    return (
        <>
            <header className="d-flex align-items-center">
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center w-100">
                        {/* Logo Wrap */}
                        <div className="col-sm-2 part1">
                            <Link to="/" className="d-flex align-items-center logo">
                                <img src={logo} alt="Logo" />
                                <span className="ms-2">HOTASH</span>
                            </Link>
                        </div>

                        <div className="col-sm-3 d-flex align-items-center part2">
                            <Button className="rounded-circle me-3">
                                <MdOutlineMenuOpen />
                            </Button>
                            <SearchBox />
                        </div>

                        <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
                            <div className=" d-flex align-items-center">
                                <Button className="rounded-circle me-3" onClick={handleLightMenuClick}>
                                    <MdOutlineLightMode />1
                                </Button>
                                <Button className="rounded-circle me-3">
                                    <MdDarkMode />2
                                </Button>
                            </div>

                            <div className=" d-flex align-items-center">
                                <Button className="rounded-circle me-3" onClick={handleCartMenuClick}>
                                    <IoCartOutline />5
                                </Button>
                                <Menu
                                    className="notifyItem"
                                    anchorEl={cartEl}
                                    id="cart-menu"
                                    open={openCart}
                                    onClose={handleCartMenuClose}
                                    onClick={handleCartMenuClose}
                                    slotProps={{
                                        paper: {
                                            elevation: 0,
                                            sx: {
                                                overflow: 'visible',
                                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                mt: 1.5,
                                                '& .MuiAvatar-root': {
                                                    width: 32,
                                                    height: 32,
                                                    ml: -0.5,
                                                    mr: 1,
                                                },
                                                '&::before': {
                                                    content: '""',
                                                    display: 'block',
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 14,
                                                    width: 10,
                                                    height: 10,
                                                    bgcolor: 'background.paper',
                                                    transform: 'translateY(-50%) rotate(45deg)',
                                                    zIndex: 0,
                                                },
                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <div className="px-3 pb-0">
                                        <h5>Orders(12)</h5>
                                    </div>
                                    <Divider className="mb-1" />

                                    <div className="itemList">
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(element => (
                                            <MenuItem key={element} onClick={handleCartMenuClose}>
                                                <div className="item d-flex align-items-center">
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                                                        </span>
                                                    </div>
                                                    <div className="dropInfo ms-2 me-2">
                                                        Order #{element}
                                                        <b>asdfasdf</b>
                                                        asdfasdfasdf
                                                        <b>dsfasdf</b>
                                                        asdfasdfasdfasdf asdfasdfasdfsadf asdfasdasdfa
                                                        <p className="text-sky"> few secound ago</p>
                                                    </div>
                                                </div>
                                            </MenuItem>
                                        ))}
                                    </div>

                                    <Button className="item">See All Orders</Button>
                                </Menu>
                            </div>

                            <div className=" d-flex align-items-center">
                                <Button className="rounded-circle me-3" onClick={handleMailMenuClick}>
                                    <MdOutlineMailOutline />3
                                </Button>
                                <Menu
                                    anchorEl={mailEl}
                                    id="mail-menu"
                                    open={openMail}
                                    onClose={handleMailMenuClose}
                                    onClick={handleMailMenuClose}
                                    slotProps={{
                                        paper: {
                                            elevation: 0,
                                            sx: {
                                                overflow: 'visible',
                                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                mt: 1.5,
                                                '& .MuiAvatar-root': {
                                                    width: 32,
                                                    height: 32,
                                                    ml: -0.5,
                                                    mr: 1,
                                                },
                                                '&::before': {
                                                    content: '""',
                                                    display: 'block',
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 14,
                                                    width: 10,
                                                    height: 10,
                                                    bgcolor: 'background.paper',
                                                    transform: 'translateY(-50%) rotate(45deg)',
                                                    zIndex: 0,
                                                },
                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem onClick={handleAccountClose}>
                                        <ListItemIcon>
                                            <IoShieldHalfSharp />
                                        </ListItemIcon>
                                        My Mail
                                    </MenuItem>
                                </Menu>
                            </div>

                            <div className=" d-flex align-items-center">
                                <Button className="rounded-circle me-3" onClick={handleRegBellMenuClick}>
                                    <FaRegBell />4
                                </Button>
                                <Menu
                                    anchorEl={bellEl}
                                    id="bell-menu"
                                    open={openBell}
                                    onClose={handleRegBellMenuClose}
                                    onClick={handleRegBellMenuClose}
                                    slotProps={{
                                        paper: {
                                            elevation: 0,
                                            sx: {
                                                overflow: 'visible',
                                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                mt: 1.5,
                                                '& .MuiAvatar-root': {
                                                    width: 32,
                                                    height: 32,
                                                    ml: -0.5,
                                                    mr: 1,
                                                },
                                                '&::before': {
                                                    content: '""',
                                                    display: 'block',
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 14,
                                                    width: 10,
                                                    height: 10,
                                                    bgcolor: 'background.paper',
                                                    transform: 'translateY(-50%) rotate(45deg)',
                                                    zIndex: 0,
                                                },
                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem onClick={handleAccountClose}>
                                        <ListItemIcon>
                                            <IoShieldHalfSharp />
                                        </ListItemIcon>
                                        My Notifications
                                    </MenuItem>
                                </Menu>
                            </div>

                            <div className="myAccWrapper d-flex align-items-center">
                                <Button className="myAcc d-flex align-items-center" onClick={handleAccountClick}>
                                    <div className="userImg">
                                        <span className="rounded-circle">
                                            <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                                        </span>
                                    </div>

                                    <div className="userInfo">
                                        <h4>miron mahmud</h4>
                                        <p className="mb-0">@mironcoder</p>
                                    </div>
                                </Button>

                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={open}
                                    onClose={handleAccountClose}
                                    onClick={handleAccountClose}
                                    slotProps={{
                                        paper: {
                                            elevation: 0,
                                            sx: {
                                                overflow: 'visible',
                                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                mt: 1.5,
                                                '& .MuiAvatar-root': {
                                                    width: 32,
                                                    height: 32,
                                                    ml: -0.5,
                                                    mr: 1,
                                                },
                                                '&::before': {
                                                    content: '""',
                                                    display: 'block',
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 14,
                                                    width: 10,
                                                    height: 10,
                                                    bgcolor: 'background.paper',
                                                    transform: 'translateY(-50%) rotate(45deg)',
                                                    zIndex: 0,
                                                },
                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem onClick={handleAccountClose}>
                                        <Avatar /> My account
                                    </MenuItem>
                                    <Divider />

                                    <MenuItem onClick={handleAccountClose}>
                                        <ListItemIcon>
                                            <IoShieldHalfSharp />
                                        </ListItemIcon>
                                        Reset Password
                                    </MenuItem>
                                    <MenuItem onClick={handleAccountClose}>
                                        <ListItemIcon>
                                            <Logout />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
