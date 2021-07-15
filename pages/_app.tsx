import '../styles/globals.css'
import type { AppProps } from 'next/app'

import AppHead from './common/appHead'
import AppFooter from './common/appFooter'

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <AppHead />
    <Component {...pageProps} />
    <AppFooter />
  </>)
}
export default MyApp
