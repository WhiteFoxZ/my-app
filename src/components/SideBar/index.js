import Button from '@mui/material/Button';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

import { NavLink } from 'react-router-dom';

import { IoMdLogOut } from 'react-icons/io';

import { SideBarMenuList } from '../SideBarMenuList/SideBarMenuList';
import { MyContext } from '../../App';

const SideBar = () => {
    const [activeTapId, setActiveIdTap] = React.useState(0);

    const menuArray = SideBarMenuList;

    const [menuList, setMenuList] = React.useState(menuArray);

    const isOpenSubmenu = index => {
        if (activeTapId === index && menuList[index].isToggleSubmenu === true) {
            //같은 메뉴 클릭시
            menuList[index].isToggleSubmenu = false;
            setMenuList([...menuList]); // 배열 상태 업데이트
            return;
        } else {
            setActiveIdTap(index);

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
        }

        console.log('activeTapId', activeTapId, 'isToggleSubmenu', menuList[index].isToggleSubmenu);
    };

    //사이드바 메뉴 토클링
    const context = React.useContext(MyContext);

    return (
        <>
            <div className="sidebar">
                <div className="title">main pages</div>

                <ul>
                    {menuList.map(element => (
                        <li key={element.id}>
                            {element.submenu.length > 0 ? (
                                <Button
                                    className={` w-100 ${activeTapId === element.id && element.isToggleSubmenu === true ? 'active' : ''} `}
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
                            ) : (
                                <Button
                                    className={` w-100 ${activeTapId === element.id && element.isToggleSubmenu === true ? 'active' : ''} `}
                                    onClick={() => isOpenSubmenu(element.id)}
                                >
                                    <span className="icon">{element.icon}</span>

                                    <NavLink to={element.link}>
                                        {element.id} {element.name}
                                    </NavLink>
                                </Button>
                            )}

                            {element.submenu.length > 0 ? (
                                <div
                                    className={` submenuWrapper ${
                                        activeTapId === element.id && element.isToggleSubmenu === true ? 'colapse' : 'colapsed'
                                    } `}
                                >
                                    <ul className="submenu">
                                        {element.submenu.map(sub => (
                                            <li key={sub.id}>
                                                <NavLink to={sub.link} className="text-decoration-none">
                                                    {sub.name}
                                                </NavLink>
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
