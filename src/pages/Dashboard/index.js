import DashboardBox from './componts/dashboardBox';

import { FaCircleUser } from 'react-icons/fa6';
import { TiShoppingCart } from 'react-icons/ti';
import { FaShoppingBag } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, { useState } from 'react';

const Dashboard = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    //login status
    const open = Boolean(anchorEl);

    const ITEM_HEIGHT = 48;

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    //login status end

    //filter state
    const [showBy, setshowBy] = React.useState('');
    const [categoryBy, setcategoryBy] = React.useState('');
    const [brandBy, setbrandBy] = React.useState('');
    const [searchBy, setsearchBy] = React.useState('');

    //filter state end

    const handleFilterChange = event => {
        console.log(event);

        if (event.target.name === 'select-categoryBy') setcategoryBy(event.target.value);
        else if (event.target.name === 'select-brandBy') setbrandBy(event.target.value);
        else if (event.target.name === 'select-searchBy') setsearchBy(event.target.value);
        else if (event.target.name === 'select-showBy') setshowBy(event.target.value);
    };

    return (
        <>
            <div className="right-content w-100">
                <div className="row dashboardBoxWrapperRow">
                    <div className="col-md-8">
                        <div className="dashboardBoxWrapper d-flex">
                            <DashboardBox width={'48%'} height={'200px'} color={['#1da256', '#48d483']} icon={<FaCircleUser />} grow={true} />
                            <DashboardBox width={'48%'} height={'200px'} color={['#c012e2', '#eb64fe']} icon={<TiShoppingCart />} grow={true} />
                            <DashboardBox width={'48%'} height={'200px'} color={['#2c78e5', '#60aff5']} icon={<FaShoppingBag />} grow={true} />
                            <DashboardBox width={'48%'} height={'200px'} color={['#e1950e', '#f3cd29']} icon={<BsStars />} grow={false} />
                        </div>
                    </div>
                    <div className="col-md-4 pl-0">
                        <div className="box dashboardBoxWrapper d-flex">
                            <DashboardBox width={'100%'} height={'100%'} color={['#063b85ff', '#2f78b8ff']} grow={true} />
                        </div>
                    </div>
                </div>

                <div className="card shadow border-0 p-3 mt-4">
                    <h3 className="hd">Best Selling Products</h3>

                    <div className="row cardFilters mt-3">
                        <div className="col-md-3">
                            <h4>show by</h4>

                            <FormControl variant="standard" fullWidth>
                                <Select
                                    labelId="select-showBy-label"
                                    id="select-showBy"
                                    name="select-showBy"
                                    value={showBy}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    className="w-100"
                                    onChange={handleFilterChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className="col-md-3">
                            <h4>category by</h4>
                            <FormControl variant="standard" fullWidth>
                                <Select
                                    labelId="select-categoryBy-label"
                                    id="select-categoryy"
                                    name="select-categoryBy"
                                    value={categoryBy}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    className="w-100"
                                    onChange={handleFilterChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className="col-md-3">
                            <h4>brand by</h4>
                            <FormControl variant="standard" fullWidth>
                                <Select
                                    labelId="select-brandBy-label"
                                    id="select-brandBy"
                                    name="select-brandBy"
                                    value={brandBy}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    className="w-100"
                                    onChange={handleFilterChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className="col-md-3">
                            <h4>search by</h4>
                            <FormControl variant="standard" fullWidth>
                                <Select
                                    labelId="select-searchBy-label"
                                    id="select-searchBy"
                                    name="select-searchBy"
                                    value={searchBy}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    className="w-100"
                                    onChange={handleFilterChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
