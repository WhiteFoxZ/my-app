// TimerStore.js
import { makeAutoObservable } from 'mobx';

// Model the application state. 관찰되는 상태(스토어)를 만듭니다.
export function createTimerStore() {
    return makeAutoObservable({
        secondsPassed: 0,
        increase() {
            this.secondsPassed += 1;
        },
        reset() {
            this.secondsPassed = 0;
        },
        // 계산된 값 (선택 사항)
        get doubledSeconds() {
            return this.secondsPassed * 2;
        },
    });
}
