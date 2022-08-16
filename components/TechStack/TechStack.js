const TechStack = () => {
   return (
      <section>
         <div className="tech-stack">
            <img src="/logo_html.png" alt="HTML Logo" />
            <img src="/logo_css3.svg" alt="CSS Logo" />
            <img src="/logo_javascript.svg" alt="JavaScript Logo" />
            <img src="/logo_react.svg" alt="React Logo" />
            <img src="/logo_vue.svg" alt="Vue Logo" />
            <img src="/logo_nodejs.svg" alt="NodeJS Logo" />
            <img src="/logo_mongodb.svg" alt="MongoDB Logo" />
         </div>
         <style jsx>{`
            .tech-stack {
               display: flex;
               justify-content: center;
            }

            .tech-stack * {
               margin-right: 0.5em;
            }

            .tech-stack img {
               border-radius: 100%;
               width: 50px;
               height: 50px;
            }
         `}</style>
      </section>
   )
}

export default TechStack
