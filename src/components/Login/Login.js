// src/components/Login.js
import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useAuth } from '../contexts/AuthContext';

const LoginTest = observer(() => {
    const [username, setUsername] = useState('');
    const authStore = useAuth(); // 커스텀 훅을 통해 MobX 스토어에 접근

    const handleSubmit = async e => {
        e.preventDefault();
        if (username) {
            await authStore.login(username, 'password'); // MobX 스토어의 action 호출
        }
    };

    if (authStore.isAuthenticated) {
        return <p>이미 로그인되었습니다!</p>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="사용자 이름" value={username} onChange={e => setUsername(e.target.value)} />
            <button type="submit">로그인</button>
        </form>
    );
});

export default LoginTest;
