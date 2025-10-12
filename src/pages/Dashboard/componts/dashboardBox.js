import { FaCircleUser } from 'react-icons/fa6';
import { HiDotsVertical } from 'react-icons/hi';
import Button from '@mui/material/Button';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { IoTimeOutline } from 'react-icons/io5';

const DashboardBox = props => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                className="dashboardBox "
                style={{
                    width: props.width ? props.width : '100%',
                    height: props.height ? props.height : '100%',
                    backgroundImage: `linear-gradient(to right, ${props.color ? props.color[0] : '#0858f7'}, ${
                        props.color ? props.color[1] : '#00d4ff'
                    })`,
                }}
            >
                <span className="chart">{props.grow ? <TrendingUpIcon /> : <TrendingDownIcon />}</span>

                <div className="d-flex w-100">
                    <div className="col1">
                        <h4 className="text-white mb-0">Total Users</h4>
                        <span className="text-white">277</span>
                    </div>
                    <div className="ms-auto">
                        {props.icon ? (
                            <span className="icon">{props.icon}</span>
                        ) : (
                            <div className="ms-auto toggleIcon" onClick={handleClick}>
                                <HiDotsVertical />
                            </div>
                        )}
                    </div>
                </div>

                <div className="d-flex align-items-center w-100  ">
                    <h4 className="text-white mb-0 mt-0">Last Month</h4>

                    {props.icon ? (
                        <div className="ms-auto toggleIcon" onClick={handleClick}>
                            <HiDotsVertical />
                        </div>
                    ) : (
                        <span></span>
                    )}

                    <Menu
                        anchorEl={anchorEl}
                        id="long-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        slotProps={{
                            paper: {
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 0.2,
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
                        <MenuItem onClick={handleClick}>
                            <IoTimeOutline style={{ marginRight: 5 }} /> Last Day
                        </MenuItem>
                        <MenuItem onClick={handleClick}>
                            <IoTimeOutline style={{ marginRight: 5 }} /> Last Week
                        </MenuItem>
                        <MenuItem onClick={handleClick}>
                            <IoTimeOutline style={{ marginRight: 5 }} /> Last Month
                        </MenuItem>
                        <MenuItem onClick={handleClick}>
                            <IoTimeOutline style={{ marginRight: 5 }} /> Last Year
                        </MenuItem>
                    </Menu>
                </div>
            </Button>
        </>
    );
};

export default DashboardBox;
