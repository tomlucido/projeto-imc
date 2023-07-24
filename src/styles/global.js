import { createGlobalStyle } from "styled-components";

export const ResetCss = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 18px;
    }

    html,
    body {
        font-family: "Inter", sans-serif;
    }
`;