import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import SideBarMenuList from './components/SideBarMenuList/SideBarMenuList';
import Dashboard from './pages/Dashboard/index';
import Login from './pages/Login/index';
import SignUp from './pages/SignUp/index';
import Dflex from './pages/Dflex/index';
import TimerContainer from './pages/TimerView/TimerContainer';

const MyContext = React.createContext();

function App() {
    // 사이드바 토글 상태 관리
    const [isToggleSideBar, setIsToggleSideBar] = React.useState(false);

    const [isLogin, setIsLogin] = React.useState(false);

    const [isHideSidebarAndHearder, setIsHideSidebarAndHearder] = React.useState(false);

    React.useEffect(() => {
        if (isToggleSideBar) {
            document.body.classList.remove('sidebar-collapsed');
        } else {
            document.body.classList.add('sidebar-collapsed');
        }

        // alert(isHideSidebarAndHearder);
    }, [isToggleSideBar]);

    const values = {
        isToggleSideBar,
        setIsToggleSideBar,
        isLogin,
        setIsLogin,
        isHideSidebarAndHearder,
        setIsHideSidebarAndHearder,
    };

    return (
        <BrowserRouter>
            <MyContext.Provider value={values}>
                {!isHideSidebarAndHearder && <Header />}

                <div className="main d-flex">
                    {!isHideSidebarAndHearder && (
                        <div className={`sidebarWrapper ${isToggleSideBar ? 'toggle' : ''}`}>
                            <SideBar />
                        </div>
                    )}

                    <div className={`content  ${isHideSidebarAndHearder && 'full'}  ${isToggleSideBar ? 'toggle' : ''}`}>
                        <Routes>
                            <Route path="/" exact={true} element={<Dashboard />} />

                            <Route path="/login" exact={true} element={<Login />} />

                            <Route path="/signUp" exact={true} element={<SignUp />} />

                            <Route path="/dflex" exact={true} element={<Dflex />} />

                            <Route path="/timerView" exact={true} element={<TimerContainer />} />

                            {SideBarMenuList.map(menu => {
                                return menu.submenu.map(sub => {
                                    return <Route path={sub.link} exact={true} element={sub.element} />;
                                });
                            })}
                        </Routes>
                    </div>
                </div>
            </MyContext.Provider>
        </BrowserRouter>
    );
}

export default App;
export { MyContext };
