import Layout from '../components/Layout/layout'
import 'primereact/resources/themes/lara-light-indigo/theme.css' //theme
import 'primereact/resources/primereact.min.css' //core css
import 'primeicons/primeicons.css' //icons

const MyApp = ({ Component, pageProps }) => {
   return (
      <Layout>
         <Component {...pageProps} />

         {/* GLOBAL CSS STYLES */}
         <style jsx global>{`
            @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

            html,
            body {
               padding: 0;
               margin: 0;
               font-family: 'Lato', -apple-system, BlinkMacSystemFont, Segoe UI,
                  Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
                  Helvetica Neue, sans-serif;
               letter-spacing: 0.04rem;
               font-size: 12pt;
               font-weight: 400;
               line-height: 1.6;
            }

            * {
               box-sizing: border-box;
            }

             {
               /* #region SITE NAVBAR */
            }
            #site-navbar {
               background-color: #303030;
               font-size: 1rem;
               position: fixed;
               width: 100%;
               z-index: 100;
               top: 0;
            }

            #site-navbar a {
               color: #f9c914;
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
             {
               /* #endregion */
            }
         `}</style>
      </Layout>
   )
}

export default MyApp
