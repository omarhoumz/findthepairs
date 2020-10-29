import { ThemeProvider } from 'styled-components'

import 'antd/dist/antd.css'

import { wrapper } from 'src/store'
import GlobalStyle from 'src/theme/global-styles'
import colors from 'src/theme/colors'

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{ colors }}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default wrapper.withRedux(App)
