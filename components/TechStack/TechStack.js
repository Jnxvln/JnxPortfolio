const TechStack = () => {
   const allStacks = [
      html,
      css,
      javascript,
      react,
      vue,
      nextjs,
      nodejs,
      mongodb,
   ]

   return (
      <section>
         <div className="tech-stack">
            {allStacks.map((tech, index) => (
               <span key={index}>{tech}</span>
            ))}
         </div>
      </section>
   )
}

const iconStyle = {
   marginRight: '0.5em',
   borderRadius: '100%',
   width: '30px',
   height: '30px',
}

// #region TECH DEFINITIONS
const html = <img src="/logo_html.png" alt="HTML Logo" style={iconStyle} />
const css = <img src="/logo_css3.svg" alt="CSS Logo" style={iconStyle} />
const javascript = (
   <img src="/logo_javascript.svg" alt="JavaScript Logo" style={iconStyle} />
)
const react = <img src="/logo_react.svg" alt="React Logo" style={iconStyle} />
const vue = <img src="/logo_vue.svg" alt="Vue Logo" style={iconStyle} />
const nextjs = (
   <img src="/logo_nextjs.svg" alt="Next.js Logo" style={iconStyle} />
)
const nodejs = (
   <img src="/logo_nodejs.svg" alt="NodeJS Logo" style={iconStyle} />
)
const mongodb = (
   <img src="/logo_mongodb.svg" alt="MongoDB Logo" style={iconStyle} />
)
// #endregion

export const tech = {
   html,
   css,
   javascript,
   react,
   vue,
   nextjs,
   nodejs,
   mongodb,
}

export default TechStack
