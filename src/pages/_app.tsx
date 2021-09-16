import { ThemeProvider } from '@mui/material'
import { AppProps } from 'next/app'
import { useGa } from '@mira/hooks'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '@mira/createEmotionCache'
import theme from '@mira/theme'
import '../styles/global.css'

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

const App = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  useGa()

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
