import { createGlobalStyle } from "styled-components";
import ButtonFont from "./04B_30/04B_30__.woff";

export default createGlobalStyle`
    @font-face {
        font-family: '04b 30';
        font-style: normal;
        font-weight: normal;
        src: local('04b 30'), url('04B_30__.woff') format('woff');
    }
`;
