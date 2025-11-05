// App.jsx (또는 index.js 등 최상위 파일)
import React from 'react';
import TimerView from './TimerView';
import { createTimerStore } from './TimerStore';

// 앱 전체에서 사용할 타이머 인스턴스를 생성합니다.
const myTimer = createTimerStore();

// 1초마다 increase 함수를 호출하여 상태를 변경합니다.
setInterval(() => {
    myTimer.increase();
}, 1000);

function TimerContainer() {
    return (
        <div>
            <h1>MobX Timer Example</h1>
            {/* TimerView에 myTimer 인스턴스를 props로 전달합니다. */}
            <TimerView timer={myTimer} />
        </div>
    );
}

export default TimerContainer;
