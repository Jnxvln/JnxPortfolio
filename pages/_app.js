import Layout from '../components/Layout/layout'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        {/* #region SITE NAVBAR */}
        #site-navbar {
          background-color: #303030;
        }

        #site-navbar a {
          color: #F9C914;

        }
        #site-navbar a:hover {
          background-color: #464646;
        }

        .rs-dropdown-menu {
          background-color: #464646;
        }

        a.rs-dropdown-item:hover {
          background-color: #353535 !important;
        }
        {/* #endregion */}
      `}</style>
    </Layout>
  )
}

export default MyApp