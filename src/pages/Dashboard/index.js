import DashboardBox from './componts/dashboardBox';

import { FaCircleUser } from 'react-icons/fa6';
import { TiShoppingCart } from 'react-icons/ti';
import { FaShoppingBag } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';

const Dashboard = () => {
    return (
        <>
            <div className="right-content w-100">
                <div className="row dashboardBoxWrapperRow">
                    <div className="col-md-8">
                        <div className="dashboardBoxWrapper d-flex">
                            <DashboardBox
                                width={'48%'}
                                height={'200px'}
                                color={['#1da256', '#48d483']}
                                icon={<FaCircleUser />}
                                grow={true}
                            />
                            <DashboardBox
                                width={'48%'}
                                height={'200px'}
                                color={['#c012e2', '#eb64fe']}
                                icon={<TiShoppingCart />}
                                grow={true}
                            />
                            <DashboardBox
                                width={'48%'}
                                height={'200px'}
                                color={['#2c78e5', '#60aff5']}
                                icon={<FaShoppingBag />}
                                grow={true}
                            />
                            <DashboardBox
                                width={'48%'}
                                height={'200px'}
                                color={['#e1950e', '#f3cd29']}
                                icon={<BsStars />}
                                grow={false}
                            />
                        </div>
                    </div>
                    <div className="col-md-4 pl-0">
                        <div className="box dashboardBoxWrapper d-flex">
                            <DashboardBox
                                width={'100%'}
                                height={'100%'}
                                color={['#063b85ff', '#2f78b8ff']}
                                grow={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
