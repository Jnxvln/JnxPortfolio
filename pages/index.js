import clientPromise from '../lib/mongodb'
import { Button } from 'rsuite'
import LandingHero from '../components/LandingHero/LandingHero'
import 'rsuite/dist/rsuite.min.css'

export default function Home({ isConnected }) {
  return (
    <section>
      <LandingHero />

      <div>
        <Button>Rsuite Button</Button>
      </div>

      {isConnected ? (
        <span>Database CONNECTED</span>
      ) : (
        <span>
          Database NOT CONNECTED
        </span>
      )}
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
