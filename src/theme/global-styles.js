import { createGlobalStyle } from 'styled-components'
import colors from './colors'
import { getColorCssVariables } from './utils'

const GlobalStyle = createGlobalStyle`
  :root {
    ${getColorCssVariables(colors)}
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Nunito', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  body {
    background: linear-gradient(110.99deg, #fdfbfb 0%, #ebedee 98.71%);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
