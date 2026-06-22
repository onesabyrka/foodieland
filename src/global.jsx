import '@/styles'
import { Head } from 'minista'
import Header from '@/layouts/Header'
import Content from '@/layouts/Content'
import Footer from '@/layouts/Footer'
import appleTouchIcon from '@/assets/favicons/apple-touch-icon.png'
import favicon192 from '@/assets/favicons/web-app-manifest-192x192.png'
import favicon512 from '@/assets/favicons/web-app-manifest-512x512.png'
import manifest from '@/assets/favicons/site.webmanifest'

export default (props) => {
  const { children, title, url } = props

  return (
    <>
      <Head htmlAttributes={{ lang: 'en' }}>
        <title>Foodieland | {title}</title>
        <script src="/src/main.js" type="module" />
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
        <link rel="icon" type="image/png" sizes="192x192" href={favicon192} />
        <link rel="icon" type="image/png" sizes="512x512" href={favicon512} />
        <link rel="manifest" href={manifest} />
      </Head>
      <Header url={url} />
      <Content>{children}</Content>
      <Footer />
    </>
  )
}
