import clientPromise from '../lib/mongodb'
import LandingHero from '../components/LandingHero/LandingHero'
import DatabaseStatus from '../components/DatabaseStatus/DatabaseStatus'
import TechStack from '../components/TechStack/TechStack'
import Project from '../components/Project/Project'

export default function Home({ isConnected, projects }) {
   return (
      <section>
         <LandingHero />

         <section id="intro-section">
            <div>
               <header style={{ textAlign: 'center' }}>
                  <h2 className="title">Modern Web Development</h2>
                  <DatabaseStatus isConnected={isConnected} />
               </header>

               <article className="container intro">
                  <div>
                     <p>
                        My name is Justin Cox, I'm a self-taught programmer from
                        Texarkana, Texas seeking my first job as a Junior level
                        web developer.
                     </p>
                     <p>
                        Technologies I use include HTML, CSS, JavaScript, React
                        and Vue for my front-end needs, and primarily NodeJS and
                        MongoDB for the back-end.
                     </p>
                     <TechStack />
                  </div>
               </article>

               <section id="projects">
                  {projects &&
                     projects.map((project, index) => (
                        <Project
                           key={index}
                           title={project.title}
                           category={project.category}
                           description={project.description}
                           url={project.url}
                           repo={project.repo}
                           techstack={project.tech}
                        />
                     ))}
               </section>
            </div>
         </section>

         <style jsx>{`
            #intro-section {
               padding: 6em 8em;
            }
            .container {
               text-align: center;
            }
            .container.intro {
               display: flex;
               justify-content: center;
               margin-bottom: 6em;
            }
            .container.intro p {
               max-width: 700px;
               font-size: 1.2rem;
            }
            .title {
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

            /* --- PROJECTS --- */

            #projects {
               display: flex;
               flex-wrap: wrap;
               justify-content: center;
               /* border: 2px solid blue; */
               padding: 10px;
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
      const res = await fetch('http://localhost:3000/api/projects')
      const projects = await res.json()

      if (projects) {
         return {
            props: {
               projects,
               isConnected: true,
            },
         }
      } else {
         return {
            props: { isConnected: true },
         }
      }
   } catch (e) {
      console.error(e)
      return {
         props: { isConnected: false },
      }
   }
}
