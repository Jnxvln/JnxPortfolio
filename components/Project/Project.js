import { Card } from 'primereact/card'
import { tech } from '../../components/TechStack/TechStack'
import { Button } from 'primereact/button'

const Project = ({ title, category, description, url, repo, techstack }) => {
   return (
      <section className="section" style={{ width: '500px' }}>
         <Card title={title} className="project-card">
            {/* Description */}
            <div
               style={{
                  width: '400px',
                  height: '70px',
                  overflowY: 'auto',
               }}
            >
               {description}
            </div>

            {/* Category */}
            <div style={{ marginBottom: '0.2em' }}>
               <strong>Category:</strong> {category}
            </div>

            {/* Tech Used */}
            <div style={{ marginBottom: '0.2em' }}>
               <strong>Tech Used:</strong>
            </div>
            <div
               style={{
                  width: '400px',
                  height: '70px',
                  overflowY: 'auto',
               }}
            >
               {techstack.map((techitem) => {
                  switch (techitem) {
                     case 'html':
                        return tech.html
                     case 'css':
                        return tech.css
                     case 'javascript':
                        return tech.javascript
                     case 'react':
                        return tech.react
                     case 'vue':
                        return tech.vue
                     case 'nextjs':
                        return tech.nextjs
                     case 'nodejs':
                        return tech.nodejs
                     case 'mongodb':
                        return tech.mongodb
                     default:
                        return null
                  }
               })}
            </div>

            {/* Links */}
            <div className="links">
               {url && (
                  <a href={url} target="_blank" className="projectlink">
                     <Button
                        label="Web"
                        icon="pi pi-globe"
                        className="p-button-outlined"
                     />
                  </a>
               )}

               {repo && (
                  <a href={repo} target="_blank" className="projectlink">
                     <Button
                        label="Repo"
                        className="p-button-outlined p-button-secondary"
                        icon="pi pi-github"
                     />
                  </a>
               )}
            </div>
         </Card>

         <style jsx>{`
            .section {
               margin: 5px;
            }
            .projectlink {
               text-decoration: none;
               margin: 0 1em;
            }
            .links {
               margin-top: 1em;
               text-align: center;
            }
         `}</style>
      </section>
   )
}

export default Project
