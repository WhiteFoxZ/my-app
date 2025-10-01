import React from 'react';
import Button from '@mui/material/Button';
import { MdDashboard } from 'react-icons/md';
import { FaAngleRight } from 'react-icons/fa';
import { AiOutlineProduct } from 'react-icons/ai';
import { TiShoppingCart } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { IoMdLogOut } from 'react-icons/io';

const SideBar = () => {
    const [activeTap, setActiveTap] = React.useState(0);

    const [isToggleSubmenu, setIsToggleSubmenu] = React.useState(false);

    const isOpenSubmenu = index => {
        setActiveTap(index);
        setIsToggleSubmenu(!isToggleSubmenu);
    };

    return (
        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link to="/" className="text-decoration-none">
                            <Button
                                className={` w-100 ${activeTap === 0 ? 'active' : ''} `}
                                onClick={() => isOpenSubmenu(0)}
                            >
                                <span className="icon">
                                    <MdDashboard />1
                                </span>
                                dashboard
                                <span className="arrow">
                                    <FaAngleRight />
                                </span>
                            </Button>
                        </Link>
                    </li>

                    <li>
                        <Button
                            className={` w-100 ${activeTap === 1 ? 'active' : ''} `}
                            onClick={() => isOpenSubmenu(1)}
                        >
                            <span className="icon">
                                <AiOutlineProduct />2
                            </span>
                            Products
                            <span className="arrow">
                                <FaAngleRight />
                            </span>
                        </Button>

                        <div
                            className={` submenuWrapper ${
                                activeTap === 1 && isToggleSubmenu === true ? 'colapse' : 'colapsed'
                            } `}
                        >
                            <ul className="submenu">
                                <li>
                                    <Link to="/products" className="text-decoration-none">
                                        Products List
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/add-product" className="text-decoration-none">
                                        Products View
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/add-product" className="text-decoration-none">
                                        Products Upload
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <Link to="/" className="text-decoration-none">
                            <Button className="button w-100">
                                <span className="icon">
                                    <TiShoppingCart />3
                                </span>
                                Orders
                                <span className="arrow">
                                    <FaAngleRight />
                                </span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="text-decoration-none">
                            <Button className="button w-100">
                                <span className="icon">
                                    <TiShoppingCart />4
                                </span>
                                Orders
                                <span className="arrow">
                                    <FaAngleRight />
                                </span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="text-decoration-none">
                            <Button className="button w-100">
                                <span className="icon">
                                    <TiShoppingCart />5
                                </span>
                                Orders
                                <span className="arrow">
                                    <FaAngleRight />6
                                </span>
                            </Button>
                        </Link>
                    </li>

                    {[1, 2, 3, 4, 5, 6].map(element => (
                        <li key={element}>
                            <Link to="/" className="text-decoration-none">
                                <Button className="button w-100">
                                    <span className="icon">
                                        <TiShoppingCart />
                                    </span>
                                    {element} Orders
                                    <span className="arrow">
                                        <FaAngleRight />
                                    </span>
                                </Button>
                            </Link>
                        </li>
                    ))}
                </ul>

                <br />

                <div className="loggoutWrapper">
                    <div className="logoutBox">
                        <Button variant="contained">
                            <IoMdLogOut />
                            Loggout
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideBar;
