import clientPromise from '../lib/mongodb'
import LandingHero from '../components/LandingHero/LandingHero'
import DatabaseStatus from '../components/DatabaseStatus/DatabaseStatus'
import TechStack from '../components/TechStack/TechStack'

export default function Home({ isConnected }) {
   return (
      <section>
         <LandingHero />

         <section id="intro-section">
            <div id="intro-content">
               <header className="container">
                  <h2 className="title">Modern Web Development</h2>
                  <DatabaseStatus isConnected={isConnected} />
               </header>

               <div className="container">
                  <p>
                     My name is Justin Cox, I'm a self-taught programmer from
                     Texarkana, Texas seeking my first job as a Junior level web
                     developer.
                  </p>
                  <p>
                     Technologies I use include HTML, CSS, JavaScript, React and
                     Vue for my front-end needs, and primarily NodeJS and
                     MongoDB for the back-end.
                  </p>

                  <TechStack />
               </div>
            </div>
         </section>

         <style jsx>{`
            .container {
               margin: 1em 5em;
            }

            .container p {
               font-size: 1.2rem;
               width: 700px;
               letter-spacing: 1.1px;
            }

            .container .title {
               margin: 0;
               font-weight: 900;
               font-size: 2rem;
            }

            .js-icon {
               border-radius: 100%;
               width: 50px;
               font-weight: 900;
               color: black;
               background-color: #f3db2f;
               font-size: 20pt;
               text-align: center;
               padding: 0.1em 0;
            }

            #intro-section {
               display: flex;
               justify-content: center;
               align-items: center;
               padding: 5em 0;
            }

            #intro-content * {
               text-align: center;
            }
         `}</style>
      </section>
   )
}

export async function getServerSideProps(context) {
   try {
      await clientPromise
      // `await clientPromise` will use the default database passed in the MONGODB_URI
      // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
      //
      // `const client = await clientPromise`
      // `const db = client.db("myDatabase")`
      //
      // Then you can execute queries against your database like so:
      // db.find({}) or any of the MongoDB Node Driver commands

      return {
         props: { isConnected: true },
      }
   } catch (e) {
      console.error(e)
      return {
         props: { isConnected: false },
      }
   }
}
