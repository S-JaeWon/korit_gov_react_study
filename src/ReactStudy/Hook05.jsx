import { useState } from 'react';

function Hook05() {
    const inputValueEmpty = {
        name: '',
        age: '',
        address: '',
    };

    const [inputValue, setInputValue] = useState(inputValueEmpty);

    const onChangeHandler = (e) => {
        const { name, value } = e.target;

        // 함수형 업데이트
        setInputValue((prev) => {
            // prev는 가장 최신 상태
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const resetOnClick = () => {
        setInputValue(inputValueEmpty);
    };

    return (
        <div>
            <h1>이름:{inputValue.name}</h1>
            <h1>나이:{inputValue.age}</h1>
            <h1>주소:{inputValue.address}</h1>
            <input
                type="text"
                value={inputValue.name}
                name="name"
                onChange={onChangeHandler}
            />
            <input
                type="text"
                value={inputValue.age}
                name="age"
                onChange={onChangeHandler}
            />
            <input
                type="text"
                value={inputValue.address}
                name="address"
                onChange={onChangeHandler}
            />
            <button onClick={resetOnClick}>리셋</button>
        </div>
    );
}
export default Hook05;
