/** @jsxImportSource @emotion/react */
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import * as s from "./styles";
import { useState } from "react";

/**
 * React Router Dom
 * SPA -> Sing Page Application
 */
function Router01() {
    const [count, setCount] = useState(0);
    const navigate = useNavigate();
    return (
        <div css={s.layout}>
            <div css={s.header}>
                <a href={"/"}>홈</a>
                <a href={"/color/red"}>RED</a>
                <a href={"/color/blue"}>BLUE</a>
                <a href={"/color/orange"}>ORANGE</a>

                <Link to={"/"}>홈</Link>
                <Link to={"/color/red"}>RED(RED)</Link>
                <Link to={"/color/blue"}>BLUE(BLUE)</Link>
                <Link to={"/color/orange"}>ORANGE(ORANGE)</Link>

                <button onClick={() => navigate("/")}>홈</button>
                <button onClick={() => navigate("/color/red")}>
                    RED(Navigae)
                </button>
                <button onClick={() => navigate("/color/blue")}>
                    BLUE(Navigae)
                </button>
                <button onClick={() => navigate("/color/orange")}>
                    ORANGE(Navigae)
                </button>
                <div css={s.countBox}>
                    <h1>{count}</h1>
                    <button
                        onClick={() => setCount((prev) => prev + 1)}></button>
                </div>
            </div>
            <Routes>
                <Route
                    path="/"
                    element={<div css={s.main("#dbdbdb")}>메인 홈 화면</div>}
                />
                <Route
                    path="/color/red"
                    element={<div css={s.main("red")}>메인 홈 화면</div>}
                />
                <Route
                    path="/color/blue"
                    element={<div css={s.main("blue")}>메인 홈 화면</div>}
                />
                <Route
                    path="/color/orange"
                    element={<div css={s.main("orange")}>메인 홈 화면</div>}
                />
            </Routes>
        </div>
    );
}
export default Router01;
