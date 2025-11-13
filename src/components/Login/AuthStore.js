// src/stores/AuthStore.js
import { makeAutoObservable } from 'mobx';

class AuthStore {
    user = null; // MobX observable state (사용자 정보)
    loading = true; // MobX observable state (로딩 상태)

    constructor() {
        makeAutoObservable(this); // 클래스의 모든 속성을 자동으로 observable로 만듭니다.
        this.checkStoredUser();
    }

    // computed: user의 존재 여부를 기반으로 파생 상태를 계산합니다.
    get isAuthenticated() {
        return !!this.user;
    }

    // action: 상태를 변경하는 함수
    checkStoredUser = () => {
        try {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                this.user = JSON.parse(storedUser);
            }
        } catch (e) {
            console.error('Failed to parse user from localStorage', e);
        } finally {
            this.loading = false;
        }
    };

    // action: 로그인 함수
    login = async (username, password) => {
        // 실제 API 호출 로직 (예시)
        // const response = await api.post('/login', { username, password });
        // const userData = response.data.user;

        // 예시 데이터
        const userData = { id: 1, name: username, token: 'fake-token' };

        this.user = userData;
        localStorage.setItem('user', JSON.stringify(userData));
    };

    // action: 로그아웃 함수
    logout = () => {
        this.user = null;
        localStorage.removeItem('user');
    };
}

export const authStore = new AuthStore();
