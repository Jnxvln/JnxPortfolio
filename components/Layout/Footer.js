const Footer = () => {
   return (
      <footer>
         <div>
            <small>
               &copy; Copyright 2022 | Justin Cox{' '}
               <a
                  href="https://github.com/Jnxvln"
                  target="_blank"
                  referrer="no-referrer"
               >
                  (GitHub @Jnxvln)
               </a>
            </small>
         </div>

         <style jsx>{`
            footer {
               background-color: #303030;
               color: white;
               padding: 2em;
               width: 100%;
               text-align: center;
            }

            footer a {
               color: #f9c914;
            }

            small {
               color: #cbcbcb;
            }
         `}</style>
      </footer>
   )
}

export default Footer
