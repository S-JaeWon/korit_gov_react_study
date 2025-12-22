import { useState } from "react";

function Render() {
    console.log("Render 컴포넌트 렌더링");
    const [count, setCount] = useState(0);
    const onClickHandler = () => {
        setCount(count + 1);
    };
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onClickHandler}>숫자 + 1</button>
        </div>
    );
}
export default Render;
