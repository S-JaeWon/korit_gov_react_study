import { useState } from 'react';
import Count from './Count';
import CountButton from './CountButton';

function CountState() {
    console.log('CountState 렌더링됨');
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    };
    const decreaseCount = () => {
        setCount(count - 1);
    };
    return (
        <div>
            <Count count={count} />
            <CountButton onClickHandler={increaseCount} text={'+1'} />
            <CountButton onClickHandler={decreaseCount} text={'-1'} />
        </div>
    );
}
export default CountState;
