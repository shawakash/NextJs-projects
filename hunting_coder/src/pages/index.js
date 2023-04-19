import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'
import { mainStyles } from '../styles'
import { useEffect, useState } from 'react'
// import mainStyles from '../styles/taillwindCss.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/blogs').then((a) => a.json()).then((parsed) => {
      // console.log(parsed)
      setBlogs(parsed);
    });
  }, [])

  return (
    <>
      {/* <style jsx>
        {
          `
          .myBad{
            background-color: red;
          }
          `
        }
      </style> */}

      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="A blog post for the coder, by the coder, of the coder :)" />
        <meta name="keywords" content="huting coder, hunting, coder, nextJs, nextjs" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      {/* <Script src='/api/hello.js' strategy='lazyOnload' onError={() => console.log('Hola')}>
        alert('Hola')
      </Script> */}



      <div className={`flex flex-col gap-y-16 justify-center items-center`}>

        <div className={`flex flex-col leading-4 gap-y-7 text-center text-clip`}>
          <h1 className={`text-black font-bold  text-5xl `}>Hunting Coder</h1>
          <p className={`tracking-wide text-xl`}>A BlogPost For Hunting Coders, By Hunting Coders and Of Hunting Coders :)</p>
          <div className="flex justify-center">
            <Image className='rounded-lg' src='/heroImg.jpg' alt='' width={150} height={50} />
          </div>
        </div>

        <div className={`blogPosts flex flex-col gap-y-7 items-center justify-center`}>

          <Link href='/blog'>
            <div className="">
              <h2 className={`font-bold text-2xl tracking-wide border-b-2 w-fit px-2 border-dashed border-b-black py-2`}>BlogPosts</h2>
            </div>
          </Link>

          {blogs?.map((blog) => {
            {/* console.log(blog.slug) */ }
            return (
              <div key={blog.title} className={`blog tracking-wide leading-5 w-1/2 flex flex-col gap-y-2`}>
                <Link href={`/blogpost/${blog.slug}`}>
                  <h3 className={`font-semibold text-2xl`}>{blog?.title}</h3>
                </Link>
                <p className={`font-normal w-fit text-slate-600 text-lg`}>{(blog?.content).slice(0, 250)} ...</p>
              </div>
            );
          })}

        </div>
      </div>

      <Link href='/' scroll={true}>
        <button className={`bottom-2 border-black border rounded-lg p-2`}>
          Page Up
        </button>
      </Link>

    </>
  )
}
