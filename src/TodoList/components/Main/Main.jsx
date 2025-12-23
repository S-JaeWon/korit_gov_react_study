/** @jsxImportSource @emotion/react */
import { TiDeleteOutline } from "react-icons/ti";
import * as s from "./styles";
import { useState } from "react";

function Main({ todoList, setTodoList }) {
    const [inputValue, setInputValue] = useState("");

    const inputOnChangeHandler = (e) => {
        setInputValue(e.target.value);
    };

    const onKeyDownHandler = (e) => {
        if (e.keyCode !== 13) {
            // keycode 13 -> Enter
            return;
        }

        if (inputValue.trim().length === 0) {
            // 공백 제거 후 길이 0 -> 빈 값
            return;
        }

        setTodoList((prev) => {
            const newId = prev.length === 0 ? 1 : prev[prev.length - 1].id + 1;
            const newTodo = {
                id: newId,
                content: inputValue,
                isComplete: false,
            };

            return [...prev, newTodo];
        });

        setInputValue("");
    };

    const checkboxOnChangeHandler = (todoId) => {
        setTodoList((prev) =>
            prev.map((todo) => {
                if (todo.id === todoId) {
                    return {
                        ...todo,
                        isComplete: !todo.isComplete,
                    };
                }
                return todo;
            })
        );
    };

    const deleteOnClickHandler = (todoId) => {
        setTodoList((prev) => prev.filter((todo) => todo.id !== todoId));
    };

    return (
        <div css={s.container}>
            <div css={s.listcontainer}>
                <ul>
                    {todoList.map((todo, index) => (
                        <li key={index}>
                            <div>
                                <input
                                    type="checkbox"
                                    id={todo.id}
                                    checked={todo.isComplete}
                                    onChange={() =>
                                        checkboxOnChangeHandler(todo.id)
                                    }
                                />
                                <label htmlFor={todo.id}></label>
                                <label htmlFor={todo.id}>{todo.content}</label>
                            </div>
                            <div>
                                <div css={s.deleteButtonContainer}>
                                    <TiDeleteOutline
                                        onClick={() =>
                                            deleteOnClickHandler(todo.id)
                                        }
                                    />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div css={s.todoInputContainer}>
                <input
                    type="text"
                    placeholder="할 일 입력"
                    value={inputValue}
                    onChange={inputOnChangeHandler}
                    onKeyDown={onKeyDownHandler}
                />
            </div>
        </div>
    );
}
export default Main;
