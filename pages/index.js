import LandingHero from '../components/LandingHero/LandingHero'
import DatabaseStatus from '../components/DatabaseStatus/DatabaseStatus'
import clientPromise from '../lib/mongodb'
import 'rsuite/dist/rsuite.min.css'

export default function Home({ isConnected }) {
  return (
    <section>
      <LandingHero />
      <DatabaseStatus isConnected={isConnected} />

      <header className="container">
        <h2 style={{ marginTop: '2em' }}>Modern Web Development</h2>
      </header>

      <div className="container" style={{ marginBottom: '4em' }}>
          <p className="larger-text">
            My name is Justin Cox, I am an aspiring web developer from Texas who enjoys creating modern websites for individuals and small businesses.
          </p>
          <p className="larger-text">
            Technologies I use include HTML, JavaScript, CSS, React and Vue for my front-end needs. For back-end, I mainly use NodeJS and MongoDB.
          </p>

          <div className="tech-stack">
            <img src="/logo_html.png" alt="HTML Logo" />
            <div className="js-icon">Js</div>
          </div>
      </div>
      

      <style jsx>{`
        .container {
          margin: 1em 5em;
        }

        .larger-text {
          font-size: 1.1rem;
          max-width: 50%;
          margin-bottom: 1em;
          text-align: justify;
        }

        .tech-stack {
          display: flex;
        }

        .tech-stack * {
          margin-right: 0.5em;
        }

        .tech-stack img {
          border-radius: 100%;
          max-width: 50px;
        }

        .js-icon {
          border-radius: 100%;
          width: 50px;
          font-weight: 900;
          color: black;
          background-color: #F3DB2F;
          font-size: 20pt;
          text-align: center;
          padding: 0.1em 0;
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