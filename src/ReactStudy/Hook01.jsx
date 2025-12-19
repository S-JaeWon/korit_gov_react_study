import React, { useState } from 'react';
/**
 * state란 컴포넌트가 가질 수 있는 상태,
 * state를 이용해 부분 렌더링 가능
 */
function Hook01() {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    };
    const decreaseCount = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={increaseCount}>+1</button>
            <button onClick={decreaseCount}>-1</button>
        </div>
    );
}

export default Hook01;
