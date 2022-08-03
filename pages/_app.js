import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { AmazonProvider } from '../context/AmazonContext'
import { ModalProvider } from 'react-simple-hook-modal'

function MyApp({ Component, pageProps }) {
  const serverUrl = `https://71pex6lhewav.usemoralis.com:2053/server`
  const appId = `5GmcRzW0wWoJHVNsaLxTdzzwgeZu3O38bSlxM2Z1`
  return (
    <MoralisProvider
      serverUrl={serverUrl}
      appId={appId}
    >
      <AmazonProvider>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </AmazonProvider>
    </MoralisProvider>
  )
}

export default MyApp