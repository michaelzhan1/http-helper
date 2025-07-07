import { createGlobalStyle } from 'styled-components';

import RobotoFont from '@/assets/fonts/Roboto-Regular.ttf';
import SourceCodeProFont from '@/assets/fonts/SourceCodePro-Regular.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Source Code Pro';
    src: url(${SourceCodeProFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
