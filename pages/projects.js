// import clientPromise from '../lib/mongodb'

const projects = ({ projects }) => {
  return (
    <div>
      <h1>Projects</h1>
      { projects.map((project, index) => (
        <div key={index}>
          <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{project.name}</div>
          <ul style={{ margin: 0 }}>
            <li>Website: {project.url}</li>
            <li>Repo: {project.repo}</li>
            <li>Tech Used:
              <ul>
                { project.tech.map(t => (
                  <li>{t}</li>
                )) }
              </ul>
            </li>
          </ul>
        </div>
      )) }
    </div>
  )
}

export async function getStaticProps () {

  try {    
    const res = await fetch('http://localhost:3000/api/projects') 
    const projects = await res.json()
  
    if (projects) {
      return {
        props: {
          projects
        }
      }
    } else {
      return {
        props: {
          projects: []
        }
      }
    }
  } catch (error) {
   console.error(error.message) 
   return {
    props: {
      projects: []
    }
   }
  }

  
}

export default projects