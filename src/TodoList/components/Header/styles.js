import { css } from "@emotion/react";

export const container = css`
    width: 100%;
    height: 40px;
    border: 1px solid #dbdbdb;
    box-sizing: border-box;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const searchInput = css`
    width: 100%;
    border: none;
    outline: none;
    padding: 5px 0px 5px 5px;
`;

export const searchButton = css`
    height: 38px;
    font-size: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: none;
    padding: 5px 0px;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background-color: #f2f2f2;
    }
`;

export const filterContainer = css`
    padding: 10px 0px;
`;
