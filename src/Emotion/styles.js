import { css } from "@emotion/react";

export const box1 = css`
    width: 100px;
    height: 100px;
    background-color: aquamarine;
`;

export const box2 = (color) => css`
    width: 100px;
    height: 100px;
    background-color: ${color};
`;

export const box3 = (isWide) => css`
    width: ${isWide ? "500px" : "100px"};
    height: 100px;
    background-color: green;
    transition: all 10s ease;
`;
