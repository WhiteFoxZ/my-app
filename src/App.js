import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import Header from './components/Header';
import SideBar from './components/SideBar';
import SideBarMenuList from './components/SideBarMenuList/SideBarMenuList';

const MyContext = React.createContext();

function App() {
    // 사이드바 토글 상태 관리
    const [isToggleSideBar, setIsToggleSideBar] = React.useState(false);

    React.useEffect(() => {
        if (isToggleSideBar) {
            document.body.classList.remove('sidebar-collapsed');
        } else {
            document.body.classList.add('sidebar-collapsed');
        }

        // alert(isToggleSideBar);
    }, [isToggleSideBar]);

    const values = {
        isToggleSideBar,
        setIsToggleSideBar,
    };

    return (
        <BrowserRouter>
            <MyContext.Provider value={values}>
                <Header />

                <div className="main d-flex">
                    <div className={`sidebarWrapper ${isToggleSideBar ? 'toggle' : ''}`}>
                        <SideBar />
                    </div>
                    <div className={`content ${isToggleSideBar ? 'toggle' : ''}`}>
                        <Routes>
                            <Route path="/" exact={true} element={<Dashboard />} />

                            {SideBarMenuList.map(menu => {
                                return menu.submenu.map(sub => {
                                    return <Route path={sub.link} exact={true} element={<Dashboard />} />;
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
