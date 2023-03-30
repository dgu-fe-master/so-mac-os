import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const style = css`
    ${emotionReset}

    html, body {
        margin: 0;
        padding: 0;
        * {
            font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        }
    }
`;

const GlobalStyle = () => {
    return <Global styles={style} />;
};

export default GlobalStyle;
