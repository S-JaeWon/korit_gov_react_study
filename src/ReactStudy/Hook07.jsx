import { useEffect, useState } from "react";

function Hook07() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [h1Name, setH1Name] = useState("");
    const [h1Age, setH1Age] = useState("");

    const nameOnChangeHandler = (e) => {
        setName(e.target.value);
    };

    const ageOnChangeHandler = (e) => {
        setAge(e.target.value);
    };

    const nameOnClickHandler = () => {
        setH1Name(name);
    };

    const ageOnClickHandler = () => {
        setH1Age(age);
    };

    useEffect(() => {
        console.log("마운트 됨", name, age);

        return () => {
            console.log("언마운트됨", name, age);
        };
    }, [name, age]);

    return (
        <div>
            <h1>{h1Name}</h1>
            <h1>{h1Age}</h1>
            <input type="text" onChange={nameOnChangeHandler} />
            <button onClick={nameOnClickHandler}>이름 확인</button>
            <input type="text" onChange={ageOnChangeHandler} />
            <button onClick={ageOnClickHandler}>나이 확인</button>
        </div>
    );
}
export default Hook07;
