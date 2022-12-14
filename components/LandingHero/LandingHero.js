import Link from 'next/link'

const LandingHero = () => {
   return (
      <section className="hero">
         <div>
            <h1>Justin Cox</h1>
            <h2 style={{ fontStyle: 'italic' }}>Developer Portfolio</h2>
            <br />
            <h5>
               <Link href="https://github.com/Jnxvln">
                  <a className="hero-link">GitHub @Jnxvln</a>
               </Link>
            </h5>
         </div>

         <style jsx>{`
            .hero {
               position: relative;
               height: 30em;
               background-image: url('https://cdn.pixabay.com/photo/2016/11/18/18/37/programming-1836330_1280.png');
               background-size: cover;
               background-attachment: fixed;
               display: flex;
               justify-content: center;
               align-items: center;
               color: white;
               text-align: center;
               filter: contrast(80%);
            }

            .hero::after {
               content: '';
               position: absolute;
               top: 0;
               left: 0;
               width: 100%;
               height: 100%;

               background: rgb(190, 155, 21);
               background: -moz-linear-gradient(
                  140deg,
                  rgba(190, 155, 21, 1) 0%,
                  rgba(82, 6, 13, 1) 72%
               );
               background: -webkit-linear-gradient(
                  140deg,
                  rgba(190, 155, 21, 1) 0%,
                  rgba(82, 6, 13, 1) 72%
               );
               background: linear-gradient(
                  140deg,
                  rgba(190, 155, 21, 1) 0%,
                  rgba(82, 6, 13, 1) 72%
               );
               filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#be9b15",endColorstr="#52060d",GradientType=1);

               background-attachment: fixed;
               opacity: 0.7;

               @supports (mix-blend-mode: hue) {
                  opacity: 1;
                  mix-blend-mode: color;
                  mix-blend-mode: hue;
                  mix-blend-mode: hard-light;
               }
            }

            .hero > * {
               z-index: 100;
            }

            .hero-link {
               text-decoration: none;
               color: #f9c914;
            }

            .hero-link:hover {
               color: #ffe2a8;
            }

            .hero h1 {
               font-size: 3.5rem;
               margin: 0;
            }

            .hero h2 {
               font-size: 2.1rem;
               margin: 0;
            }

            .hero h5 {
               font-size: 1rem;
               margin: 0;
            }
         `}</style>
      </section>
   )
}

export default LandingHero
