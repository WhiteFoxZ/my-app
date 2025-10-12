import React from 'react';
import Button from '@mui/material/Button';
import { MdDashboard } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';

import { FaAngleRight } from 'react-icons/fa';
import { AiOutlineProduct } from 'react-icons/ai';
import { TiShoppingCart } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { IoMdLogOut } from 'react-icons/io';

const SideBar = () => {
    const [activeTap, setActiveTap] = React.useState(0);

    const menuArray = [
        {
            id: 0,
            name: 'Dashboard',
            icon: <MdDashboard />,
            submenu: [
                { id: 1, name: 'Products List', link: '/products' },
                { id: 2, name: 'Products View', link: '/add-product' },
                { id: 3, name: 'Products Upload', link: '/add-product' },
            ],
            isToggleSubmenu: false,
        },

        {
            id: 1,
            name: 'authentication',
            icon: <FaLock />,
            submenu: [
                { id: 1, name: 'Products List', link: '/products' },
                { id: 2, name: 'Products View', link: '/add-product' },
                { id: 3, name: 'Products Upload', link: '/add-product' },
            ],
            isToggleSubmenu: false,
        },

        {
            id: 2,
            name: 'users',
            icon: <FaUserCircle />,
            submenu: [
                { id: 1, name: 'Products List', link: '/products' },
                { id: 2, name: 'Products View', link: '/add-product' },
                { id: 3, name: 'Products Upload', link: '/add-product' },
            ],
            isToggleSubmenu: false,
        },

        {
            id: 3,
            name: 'users',
            icon: <FaUserCircle />,
            submenu: [
                { id: 1, name: 'Products List', link: '/products' },
                { id: 2, name: 'Products View', link: '/add-product' },
                { id: 3, name: 'Products Upload', link: '/add-product' },
            ],
            isToggleSubmenu: false,
        },

        {
            id: 4,
            name: 'Products',
            icon: <AiOutlineProduct />,
            submenu: [
                { id: 1, name: 'Products List', link: '/products' },
                { id: 2, name: 'Products View', link: '/add-product' },
                { id: 3, name: 'Products Upload', link: '/add-product' },
            ],
            isToggleSubmenu: false,
        },

        {
            id: 5,
            name: 'invoices',
            icon: <TiShoppingCart />,
            submenu: [
                { id: 1, name: 'Products List', link: '/products' },
                { id: 2, name: 'Products View', link: '/add-product' },
                { id: 3, name: 'Products Upload', link: '/add-product' },
            ],
            isToggleSubmenu: false,
        },

        {
            id: 6,
            name: 'Orders',
            icon: <TiShoppingCart />,
            submenu: [
                { id: 1, name: 'Products List', link: '/products' },
                { id: 2, name: 'Products View', link: '/add-product' },
                { id: 3, name: 'Products Upload', link: '/add-product' },
            ],
            isToggleSubmenu: false,
        },

        {
            id: 7,
            name: 'eamils',
            icon: <TiShoppingCart />,
            submenu: [
                { id: 1, name: 'Products List', link: '/products' },
                { id: 2, name: 'Products View', link: '/add-product' },
                { id: 3, name: 'Products Upload', link: '/add-product' },
            ],
            isToggleSubmenu: false,
        },

        {
            id: 8,
            name: 'notifications',
            icon: <TiShoppingCart />,
            submenu: [
                { id: 1, name: 'Products List', link: '/products' },
                { id: 2, name: 'Products View', link: '/add-product' },
                { id: 3, name: 'Products Upload', link: '/add-product' },
            ],
            isToggleSubmenu: false,
        },

        {
            id: 9,
            name: 'settings',
            icon: <TiShoppingCart />,
            submenu: [
                { id: 1, name: 'Products List', link: '/products' },
                { id: 2, name: 'Products View', link: '/add-product' },
                { id: 3, name: 'Products Upload', link: '/add-product' },
            ],
            isToggleSubmenu: false,
        },

        {
            id: 10,
            name: 'blank Page',
            icon: <TiShoppingCart />,
            submenu: [],
            isToggleSubmenu: false,
        },
    ];

    const [menuList, setMenuList] = React.useState(menuArray);

    const isOpenSubmenu = index => {
        setActiveTap(index);

        if (menuList[index].submenu && menuList[index].submenu !== undefined && menuList[index].submenu.length !== 0) {
            // 단일 메뉴 클릭시
            menuList.map(item => {
                item.isToggleSubmenu = false;
                return item;
            });
        }
        //Cannot read properties of undefined (reading 'submenu')

        menuList[index].isToggleSubmenu = true;

        setMenuList([...menuList]); // 배열 상태 업데이트

        console.log('activeTap', activeTap, 'isToggleSubmenu', menuList[index].isToggleSubmenu);
    };

    return (
        <>
            <div className="sidebar">
                <div className="title">main pages</div>

                <ul>
                    {menuList.map(element => (
                        <li key={element.id}>
                            <Button
                                className={` w-100 ${activeTap === element.id && element.isToggleSubmenu === true ? 'active' : ''} `}
                                onClick={() => isOpenSubmenu(element.id)}
                            >
                                <span className="icon">
                                    <TiShoppingCart />
                                </span>
                                {element.id} {element.name}
                                {element.submenu.length > 0 ? (
                                    <span className="arrow">
                                        <FaAngleRight />
                                    </span>
                                ) : (
                                    <span></span>
                                )}
                            </Button>

                            {element.submenu.length > 0 ? (
                                <div
                                    className={` submenuWrapper ${
                                        activeTap === element.id && element.isToggleSubmenu === true ? 'colapse' : 'colapsed'
                                    } `}
                                >
                                    <ul className="submenu">
                                        {element.submenu.map(sub => (
                                            <li key={sub.id}>
                                                <Link to={sub.link} className="text-decoration-none">
                                                    {sub.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <div></div>
                            )}
                        </li>
                    ))}

                    {/**
                     * 단일 메뉴
                     */}
                    <li>
                        <Button className={` w-100 ${activeTap === 1 ? 'active' : ''} `} onClick={() => isOpenSubmenu(1)}>
                            <span className="icon">
                                <TiShoppingCart />
                            </span>
                            단일메뉴
                        </Button>
                    </li>
                    {/**
                     * 단일 메뉴 끝
                     */}
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
