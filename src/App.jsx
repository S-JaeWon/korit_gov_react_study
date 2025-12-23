import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router01 from "./RouterStudy/Router01/Router01";
import Router02 from "./RouterStudy/Router02/Router02";
import Router03 from "./RouterStudy/Router03/Router03";
import Router04 from "./RouterStudy/Router04/Router04";

function App() {
    return (
        <>
            <BrowserRouter>
                <Router04 />
            </BrowserRouter>
        </>
    );
}

export default App;
