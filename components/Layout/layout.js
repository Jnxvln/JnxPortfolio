import SiteNavbar from '../SiteNavbar/SiteNavbar'
import Head from 'next/head'

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

      <header>
        <SiteNavbar />
      </header>

      <main>
        <section>
          { children }
        </section>
      </main>
      <footer>
        <small>&copy; Copyright 2022 | Justin Cox <a href="https://github.com/Jnxvln" target="_blank" referrer="no-referrer">(GitHub @Jnxvln)</a></small>
      </footer>
    </>
  )
}

export default Layout