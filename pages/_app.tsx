import '../styles/globals.scss'
import { AppProps } from 'next/app'

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
