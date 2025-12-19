import './App.css';

import Hook03 from './ReactStudy/Hook03';

function App() {
    const name = '철수';
    const age = 13;

    return (
        <>
            {/* <React01 />
            <React02 /> */}
            {/* <React03 name={name} age={age} address={'부산'} /> */}
            {/* <React04>
                <h1>자식 요소</h1>
            </React04> */}
            {/* <Hook01 /> */}
            {/* <CountState /> */}
            <Hook03 />
        </>
    );
}

export default App;
