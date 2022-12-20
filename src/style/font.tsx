import NanumGothicRegular from 'asset/font/NanumGothic-Regular.ttf';
import NanumGothicBold from 'asset/font/NanumGothic-Bold.ttf';
import NanumGothicExtraBold from 'asset/font/NanumGothic-ExtraBold.ttf';
import { createGlobalStyle } from 'styled-components';

export const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'NanumGothic';
        src: url(${NanumGothicRegular}) format('ttf');
        font-weight: 400;
    }
    @font-face {
        font-family: 'NanumGothic';
        src: url(${NanumGothicBold}) format('ttf');
        font-weight: 700;
    }
    @font-face {
        font-family: 'NanumGothic';
        src: url(${NanumGothicExtraBold}) format('ttf');
        font-weight: 900;
    }
`;

export default FontStyles;
