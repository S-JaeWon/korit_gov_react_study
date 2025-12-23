import { css } from "@emotion/react";

export const container = css`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const listcontainer = css`
    flex-grow: 1;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    overflow: hidden;

    & > ul {
        list-style: none;
        margin: 0;
        padding: 0;
        height: 422px;
        overflow: auto;

        & > li {
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 15px;
            border-bottom: 1px solid #dbdbdb;
            box-sizing: border-box;
            align-items: center;

            & > div {
                display: flex;
                align-items: center;
            }

            & > div > input[type="checkbox"] {
                margin: 0;
                padding: 0;
                display: none;

                & + label {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                    width: 15px;
                    height: 15px;
                    border: 1px solid #dbdbdb;
                    box-sizing: border-box;
                    margin-right: 10px;
                }

                &:checked + label::after {
                    content: "";
                    display: block;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    background-color: royalblue;
                }
            }
        }
    }
`;

export const todoInputContainer = css`
    margin-top: 10px;
    height: 40px;
    border: 1px solid #dbdbdb;
    box-sizing: border-box;
    border-radius: 8px;
    overflow: hidden;

    & > input {
        border: none;
        outline: none;
        box-sizing: border-box;
        padding: 5px 15px;
        width: 100%;
        height: 100%;
    }
`;

export const deleteButtonContainer = css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0;
    width: 30px;
    height: 45px;
    font-size: 28px;
    transition: all 0.2s ease;

    &:hover {
        background-color: #ea0808;
    }
`;
