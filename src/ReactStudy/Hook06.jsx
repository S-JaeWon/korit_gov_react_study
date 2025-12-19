import { useState } from 'react';

function Hook06() {
    const profiles = [
        { name: '철수', age: 12 },
        { name: '영희', age: 15 },
        { name: '민재', age: 18 },
    ];

    const [result, setResult] = useState('');
    const [nameValue, setNameValue] = useState('');

    const onChangeHandler = (e) => {
        const name = e.target.value;
        setNameValue(name); // 함수 호출 후 실행 후 끝나면 set -> 한번에 렌더링(아니라면 호출 할때마다 set 갯수 만큼 렌더링 -> 성능 저하)
        const profile = profiles.find((profile) => profile.name === name);

        if (profile) {
            console.log(profile);
            setResult(profile.age);
        } else {
            setResult('값 없음');
        }

        // const matched = profiles.filter((p) => p.name === name);

        // if (matched.length > 0) {
        //     setResult(String(matched[0].age));
        // } else {
        //     setResult('값 없음');
        // }

        /**-------------------------------------------------------- */
        // let foundAge = null;

        // profiles.forEach((p) => {
        //     if (p.name === name) {
        //         foundAge = p.age;
        //     }
        // });

        // setResult(foundAge !== null ? String(foundAge) : '값 없음');
    };

    return (
        <div>
            <h2>{result}</h2>
            <input type="text" value={nameValue} onChange={onChangeHandler} />
        </div>
    );
}
export default Hook06;
