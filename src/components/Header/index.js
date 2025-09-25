import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import Button from '@mui/material/Button';
import { MdOutlineMenuOpen } from 'react-icons/md';

import SearchBox from '../SearchBox';
import { MdOutlineLightMode } from 'react-icons/md';
import { MdDarkMode } from 'react-icons/md';
import { IoCartOutline } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaRegBell } from 'react-icons/fa6';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

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

    const [regBellEl, setRegBellEl] = React.useState(null);
    const openBell = Boolean(regBellEl);

    const handleFaRegBellMenuClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleFaRegBellMenuClose = () => {
        setAnchorEl(null);
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
                            <Button className="rounded-circle me-3">
                                <MdOutlineLightMode />1
                            </Button>
                            <Button className="rounded-circle me-3">
                                <MdDarkMode />2
                            </Button>
                            <Button className="rounded-circle me-3">
                                <IoCartOutline />5
                            </Button>
                            <Button className="rounded-circle me-3">
                                <MdOutlineMailOutline />3
                            </Button>

                            <Button className="rounded-circle me-3" onClick={handleFaRegBellMenuClick}>
                                <FaRegBell />4
                            </Button>

                            <Menu
                                anchorEl={anchorEl}
                                id="FaRegBellMenu"
                                open={openBell}
                                onClose={handleFaRegBellMenuClose}
                                onClick={handleFaRegBellMenuClose}
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
                                <MenuItem onClick={handleFaRegBellMenuClose}>
                                    <Avatar /> My account
                                </MenuItem>
                                <Divider />

                                <MenuItem onClick={handleFaRegBellMenuClose}>
                                    <ListItemIcon>
                                        <IoShieldHalfSharp />
                                    </ListItemIcon>
                                    Reset Password
                                </MenuItem>
                                <MenuItem onClick={handleFaRegBellMenuClose}>
                                    <ListItemIcon>
                                        <Logout />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>

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
