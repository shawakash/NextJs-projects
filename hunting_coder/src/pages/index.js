import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'
import { mainStyles } from '@/styles/taillwindCss'
// import mainStyles from '../styles/taillwindCss.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="A blog post for the coder, by the coder, of the coder :)" />
        <meta name="keywords" content="huting coder, hunting, coder, nextJs, nextjs" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      {/* <Script src='/api/hello.js' strategy='lazyOnload' onError={() => console.log('Hola')}>
        alert('Hola')
      </Script> */}
      <nav className={`${mainStyles.mainnav}`}>
        <ul className={`${mainStyles.navList}`}>
          <Link href='/' scroll={true} >
            <li className={`${mainStyles.navItem}`}>Home</li>
          </Link>
          <Link href='/about' >
            <li className={`${mainStyles.navItem}`}>About</li>
          </Link>
          <Link href='/me'>
            <li className={`${mainStyles.navItem}`}>Me</li>
          </Link>
          <Link href='/blog'>
            <li className={`${mainStyles.navItem}`}>Blogs</li>
          </Link>
          <Link href='/bloggers'>
            <li className={`${mainStyles.navItem}`}>Bloggers</li>
          </Link>
          <Link href='/contact'>
            <li className={`${mainStyles.navItem}`}>Contact</li>
          </Link>
        </ul>
      </nav>
      <main className={`${mainStyles.main}`}>

        <div className={`${mainStyles.mainBodyContainer}`}>

          <div className={`${mainStyles.heroContainer}`}>
            <h1 className={`${mainStyles.heroHeading}`}>Hunting Coder</h1>
            <p className={`${mainStyles.heroDescr}`}>A BlogPost For Hunting Coders, By Hunting Coders and Of Hunting Coders :)</p>
          </div>

          <div className={`${mainStyles.blogPostsContainer}`}>
            
            <Link href='/blog'>
              <div className="blogHeading ">
                <h2 className={`${mainStyles.blogTitle}`}>BlogPosts</h2>
              </div>
            </Link>

            <div className={`${mainStyles.blogContainer}`}>
              <Link href='/blogpost/DosAndDont'>
                <h3 className={`${mainStyles.blogHeading}`}>Do's and Don't's before Switching between Frameworks</h3>
              </Link>
              <p className={`${mainStyles.blogDescr}`}>Lorem ipsum dolor sit  quisquam odit iure, ullam veniam enim saepe sequi dolores voluptatibus quidem assumenda minus expedita corrupti quae beatae voluptatum eius delectus sed quis. Voluptatem sint et eveniet placeat. Nulla nobis nisi ab ullam quisquam sequi? Possimus totam perferendis autem.</p>
            </div>

            <div className={`${mainStyles.blogContainer}`}>
              <Link href='/blogpost/DosAndDont'>
                <h3 className={`${mainStyles.blogHeading}`}>Do's and Don't's before Switching between Frameworks</h3>
              </Link>
              <p className={`${mainStyles.blogDescr}`}>Lorem ipsum dolor sit  quisquam odit iure, ullam veniam enim saepe sequi dolores voluptatibus quidem assumenda minus expedita corrupti quae beatae voluptatum eius delectus sed quis. Voluptatem sint et eveniet placeat. Nulla nobis nisi ab ullam quisquam sequi? Possimus totam perferendis autem.</p>
            </div>

            <div className={`${mainStyles.blogContainer}`}>
              <Link href='/blogpost/DosAndDont'>
                <h3 className={`${mainStyles.blogHeading}`}>Do's and Don't's before Switching between Frameworks</h3>
              </Link>
              <p className={`${mainStyles.blogDescr}`}>Lorem ipsum dolor sit  quisquam odit iure, ullam veniam enim saepe sequi dolores voluptatibus quidem assumenda minus expedita corrupti quae beatae voluptatum eius delectus sed quis. Voluptatem sint et eveniet placeat. Nulla nobis nisi ab ullam quisquam sequi? Possimus totam perferendis autem.</p>
            </div>

          </div>
        </div>

        <Link href='/' scroll={true}>
          <button className={`${mainStyles.primaryButton}`}>
            Page Up
          </button>
        </Link>
      </main>
    </>
  )
}
