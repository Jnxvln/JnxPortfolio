import SiteNavbar from '../SiteNavbar/SiteNavbar'
import Head from 'next/head'
import Footer from './Footer'

const Layout = ({ children }) => {
  // styles for main html tag
  const styles = {
    // display: "flex",
    // flexDirection: "row"
  }

  return (
    <>
      <Head>
        <title>Jnxvln Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>{/* <SiteNavbar /> */}</header>

      <main>
        <section>{children}</section>
      </main>
      <Footer />
    </>
  )
}

export default Layout
