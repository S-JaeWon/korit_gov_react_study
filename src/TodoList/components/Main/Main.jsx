/** @jsxImportSource @emotion/react */
import { TiDeleteOutline } from "react-icons/ti";
import * as s from "./styles";

function Main() {
    return (
        <div css={s.container}>
            <div css={s.listcontainer}>
                <ul>
                    <li>
                        <input type="checkbox" id="1" />
                        <label htmlFor="1"></label>
                        <label htmlFor="1">할일</label>
                        <div>
                            <div>
                                <TiDeleteOutline />
                            </div>
                        </div>
                    </li>
                    <li>
                        <input type="checkbox" id="2" />
                        <label htmlFor="2"></label>
                        <label htmlFor="2">할일</label>
                        <div>
                            <div>
                                <TiDeleteOutline />
                            </div>
                        </div>
                    </li>
                    <li>
                        <input type="checkbox" id="3" />
                        <label htmlFor="3"></label>
                        <label htmlFor="3">할일</label>
                        <div>
                            <div>
                                <TiDeleteOutline />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div css={s.todoInputContainer}>
                <input type="text" placeholder="할 일 입력" />
            </div>
        </div>
    );
}
export default Main;
