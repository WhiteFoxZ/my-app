import React from 'react';
import Button from '@mui/material/Button';
import { FaAngleRight } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { AiFillProduct } from 'react-icons/ai';

import { FaReceipt } from 'react-icons/fa6';

import { FaShoppingCart } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaBell } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { BiFileBlank } from 'react-icons/bi';
import { PiNoteBlankFill } from 'react-icons/pi';

import { IoMdLogOut } from 'react-icons/io';

const SideBar = () => {
    const [activeTap, setActiveTap] = React.useState(0);

    const menuArray = [
        {
            id: 0,
            name: 'Dashboard',
            icon: <MdDashboard />,
            submenu: [
                { id: 1, name: 'Dashboard List', link: '/products' },
                { id: 2, name: 'Dashboard View', link: '/add-product' },
                { id: 3, name: 'Dashboard Upload', link: '/add-product' },
            ],
            isToggleSubmenu: false,
        },

        {
            id: 1,
            name: 'authentication',
            icon: <FaLock />,
            submenu: [
                { id: 1, name: 'authentication List', link: '/products' },
                { id: 2, name: 'authentication View', link: '/add-product' },
                { id: 3, name: 'authentication Upload', link: '/add-product' },
            ],
            isToggleSubmenu: false,
        },

        {
            id: 2,
            name: 'users',
            icon: <FaUserCircle />,
            submenu: [
                { id: 1, name: 'users List', link: '/products' },
                { id: 2, name: 'users View', link: '/add-product' },
                { id: 3, name: 'users Upload', link: '/add-product' },
            ],
            isToggleSubmenu: false,
        },

        {
            id: 3,
            name: 'Products',
            icon: <AiFillProduct />,
            submenu: [
                { id: 1, name: 'users List', link: '/products' },
                { id: 2, name: 'users View', link: '/add-product' },
                { id: 3, name: 'users Upload', link: '/add-product' },
            ],
            isToggleSubmenu: false,
        },

        {
            id: 4,
            name: 'invoices',
            icon: <FaReceipt />,
            submenu: [
                { id: 1, name: 'invoices List', link: '/products' },
                { id: 2, name: 'invoices View', link: '/add-product' },
                { id: 3, name: 'invoices Upload', link: '/add-product' },
            ],
            isToggleSubmenu: false,
        },

        {
            id: 5,
            name: 'Orders',
            icon: <FaShoppingCart />,
            submenu: [
                { id: 1, name: 'Orders List', link: '/products' },
                { id: 2, name: 'Orders View', link: '/add-product' },
                { id: 3, name: 'Orders Upload', link: '/add-product' },
            ],
            isToggleSubmenu: false,
        },

        {
            id: 6,
            name: 'emails',
            icon: <MdEmail />,
            submenu: [
                { id: 1, name: 'emails List', link: '/products' },
                { id: 2, name: 'emails View', link: '/add-product' },
                { id: 3, name: 'emails Upload', link: '/add-product' },
            ],
            isToggleSubmenu: false,
        },

        {
            id: 7,
            name: 'notifications',
            icon: <FaBell />,
            submenu: [
                { id: 1, name: 'notifications List', link: '/products' },
                { id: 2, name: 'notifications View', link: '/add-product' },
                { id: 3, name: 'notifications Upload', link: '/add-product' },
            ],
            isToggleSubmenu: false,
        },

        {
            id: 8,
            name: 'settings',
            icon: <FaGear />,
            submenu: [
                { id: 1, name: 'settings List', link: '/products' },
                { id: 2, name: 'settings View', link: '/add-product' },
                { id: 3, name: 'settings Upload', link: '/add-product' },
            ],
            isToggleSubmenu: false,
        },

        {
            id: 9,
            name: 'blank Page',
            icon: <PiNoteBlankFill />,
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
                                <span className="icon">{element.icon}</span>
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
