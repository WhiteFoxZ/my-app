// src/components/Dashboard.js
import React from 'react';
import { observer } from 'mobx-react-lite';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = observer(() => {
    const authStore = useAuth(); // 커스텀 훅을 통해 MobX 스토어에 접근

    if (authStore.loading) {
        return <p>로딩 중...</p>;
    }

    if (!authStore.isAuthenticated) {
        return <p>로그인이 필요합니다.</p>;
    }

    return (
        <div>
            <h1>환영합니다, {authStore.user.name}님!</h1>
            <button onClick={authStore.logout}>로그아웃</button>
        </div>
    );
});

export default Dashboard;
