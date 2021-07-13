import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AlurakutStyles } from '../src/lib/AlurakutCommons'

const GlobalStyle = createGlobalStyle`
/* Reset CSS */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-image: url('https://s2.glbimg.com/onjPXT3i0gMaZa8d3wbUd4U8DOc=/0x600/s.glbimg.com/po/tt2/f/original/2014/09/11/c15083ba012d056f12313b075c91.png');
    background-size: 100%;
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ${AlurakutStyles}
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
