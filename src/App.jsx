import './App.css';

import Hook06 from './ReactStudy/Hook06';

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
            <Hook06 />
        </>
    );
}

export default App;
