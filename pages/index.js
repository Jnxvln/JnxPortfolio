import Head from 'next/head'
import clientPromise from '../lib/mongodb'
import { Button } from 'rsuite'
import SiteNavbar from '../components/SiteNavbar'
import 'rsuite/dist/rsuite.min.css'

export default function Home({ isConnected }) {
  return (
    <div>
      <Head>
        <title>Jnxvln Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SiteNavbar />

      <main>
        <h1>
          Jnxvln Portfolio
        </h1>

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
      </main>

      <footer>
        <small>&copy; Copyright 2022 | Justin Cox <a href="https://github.com/Jnxvln" target="_blank" referrer="no-referrer">(GitHub @Jnxvln)</a></small>
      </footer>

      <style jsx>{`
          {/* CSS for index.js here */}
      `}</style>

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
      `}</style>
    </div>
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
