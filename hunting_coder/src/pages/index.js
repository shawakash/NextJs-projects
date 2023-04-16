import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Script from 'next/script'
// import mainStyles from '../styles/taillwindCss'

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
      <Script src='/api/hello.js' strategy='lazyOnload' onError={() => console.log('Hola')}>
        alert('Hola')
      </Script>
      <nav className="flex justify-center items-center py-10">
        <ul className="flex flex-row gap-x-10 text-xl font-semibold">
          <li className="">Home</li>
          <li className="">About</li>
          <li className="">Me</li>
          <li className="">Bloggers</li>
          <li className="">Contact</li>
        </ul>
      </nav>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-10">
        <div className='flex flex-col gap-y-16 justify-center items-center'>
          <div className="flex flex-col leading-4 gap-y-5 text-center text-clip">
            <h1 className="text-black font-bold  text-5xl ">Hunting Coder</h1>
            <p className='tracking-wide text-xl'>A BlogPost For Hunting Coders, By Hunting Coders and Of Hunting Coders :)</p>
          </div>
          <div className="blogPosts flex flex-col gap-y-7 items-center ">
            <div className="blogHeading ">
              <h2 className="font-bold text-2xl tracking-wide border-b-2 w-fit px-2 border-dashed border-b-black py-2">BlogPosts</h2>
            </div>
            <div className="blog tracking-wide leading-5 w-1/2 flex flex-col gap-y-2">
              <h3 className="font-semibold text-2xl">Do's and Don't's before Switching between Frameworks</h3>
              <p className="font-normal w-fit text-slate-600 text-lg">Lorem ipsum dolor sit  quisquam odit iure, ullam veniam enim saepe sequi dolores voluptatibus quidem assumenda minus expedita corrupti quae beatae voluptatum eius delectus sed quis. Voluptatem sint et eveniet placeat. Nulla nobis nisi ab ullam quisquam sequi? Possimus totam perferendis autem.</p>
            </div>
            <div className="blog tracking-wide leading-5 w-1/2 flex flex-col gap-y-2">
              <h3 className="font-semibold text-2xl">Do's and Don't's before Switching between Frameworks</h3>
              <p className="font-normal w-fit text-slate-600 text-lg">Lorem ipsum dolor sit  quisquam odit iure, ullam veniam enim saepe sequi dolores voluptatibus quidem assumenda minus expedita corrupti quae beatae voluptatum eius delectus sed quis. Voluptatem sint et eveniet placeat. Nulla nobis nisi ab ullam quisquam sequi? Possimus totam perferendis autem.</p>
            </div>
            <div className="blog tracking-wide leading-5 w-1/2 flex flex-col gap-y-2">
              <h3 className="font-semibold text-2xl">Do's and Don't's before Switching between Frameworks</h3>
              <p className="font-normal w-fit text-slate-600 text-lg">Lorem ipsum dolor sit  quisquam odit iure, ullam veniam enim saepe sequi dolores voluptatibus quidem assumenda minus expedita corrupti quae beatae voluptatum eius delectus sed quis. Voluptatem sint et eveniet placeat. Nulla nobis nisi ab ullam quisquam sequi? Possimus totam perferendis autem.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
