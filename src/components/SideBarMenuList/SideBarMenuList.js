import { AiFillProduct } from 'react-icons/ai';
import { FaLock, FaUserCircle } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';

import { FaReceipt } from 'react-icons/fa6';

import { FaBell, FaShoppingCart } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { PiNoteBlankFill } from 'react-icons/pi';
import Dflex from '../../pages/Dflex';

export const SideBarMenuList = [
    {
        id: 0,
        name: 'Dashboard',
        icon: <MdDashboard />,
        submenu: [
            { id: 1, name: 'Dashboard List', link: '/dashboard' },
            { id: 2, name: 'Dashboard View', link: '/viewDashboard' },
            { id: 3, name: 'Dashboard Upload', link: '/addDashboard' },
        ],
        isToggleSubmenu: false,
    },

    {
        id: 1,
        name: 'authentication',
        icon: <FaLock />,
        submenu: [
            { id: 1, name: 'authentication List', link: '/authentication' },
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
            { id: 1, name: 'Products List', link: '/products' },
            { id: 2, name: 'Products View', link: '/add-product' },
            { id: 3, name: 'Products Upload', link: '/add-product' },
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

    {
        id: 10,
        name: 'dflex Page',
        icon: <FaGear />,
        submenu: [],
        isToggleSubmenu: false,
        link: '/dflex',
    },
];

export default SideBarMenuList;
