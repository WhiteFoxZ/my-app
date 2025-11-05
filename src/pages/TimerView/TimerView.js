// TimerView.jsx
import React from 'react';
import { observer } from 'mobx-react-lite';

// observer 함수로 컴포넌트를 래핑하여 MobX 상태 변화에 반응하게 합니다.
const TimerView = observer(props => {
    // props로 전달받은 timer 인스턴스를 사용합니다.
    const timer = props.timer;

    return (
        <div className="right-content w-100">
            <h2>
                {' '}
                <button onClick={() => timer.reset()}>Seconds passed: {timer.secondsPassed}</button>{' '}
            </h2>
            {/* 예시: 계산된 값 사용 */}
            <p>Doubled seconds: {timer.doubledSeconds}</p>
        </div>
    );
});

export default TimerView;
