/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { useState } from "react";

function Emotion1() {
    const [color, setColor] = useState("");
    const [isWide, setIswide] = useState(false);

    return (
        <div>
            <div css={s.box1}></div>
            <div css={s.box2("blue")}></div>
            <input type="color" onChange={(e) => setColor(e.target.value)} />
            <div css={s.box3(isWide)}></div>
            <button onClick={() => setIswide((prev) => !prev)}>
                {isWide ? "줄이기" : "펼치기"}
            </button>
        </div>
    );
}
export default Emotion1;
