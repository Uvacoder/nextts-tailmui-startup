import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { StyledEngineProvider, ThemeProvider } from '@mui/material'
import theme from '../theme'
import FeedbackWrapper from '@wrapper/FeedbackWrapper'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <FeedbackWrapper>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </FeedbackWrapper>
    </StyledEngineProvider>
  )
}

export default MyApp
