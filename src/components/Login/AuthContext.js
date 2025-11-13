// src/contexts/AuthContext.js
import { createContext, useContext } from 'react';
import { authStore } from './AuthStore';

// 1. Auth Context 생성 및 MobX 스토어 할당
const AuthContext = createContext(authStore);

// 2. 커스텀 훅 useAuth 생성
export const useAuth = () => {
    return useContext(AuthContext);
};
