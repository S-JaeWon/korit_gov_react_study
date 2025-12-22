import "./App.css";
import Emotion1 from "./Emotion/Emotion1";
import Hook08 from "./ReactStudy/Hook08";
import Hook09 from "./ReactStudy/Hook09";

function App() {
    const name = "철수";
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
            {/* <Render /> */}
            <Hook09 />
        </>
    );
}

export default App;
