import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import Header from './components/Header';
import SideBar from './components/SideBar';
import SideBarMenuList from './components/SideBarMenuList/SideBarMenuList';

function App() {
    return (
        <BrowserRouter>
            <Header />

            <div className="main d-flex">
                <div className="sidebarWrapper">
                    <SideBar />
                </div>
                <div className="content">
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
        </BrowserRouter>
    );
}

export default App;
