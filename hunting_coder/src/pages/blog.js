import Head from 'next/head';
import Link from 'next/link';
import React from 'react'

const Blog = () => {
    return (
        <>
            <Head>
                <title>Blog | Hunting Coder</title>
                <meta name="description" content="A blog post for the coder, by the coder, of the coder :)" />
                <meta name="keywords" content="huting coder, hunting, coder, nextJs, nextjs, About Hunting Coders" />
            </Head>

            <div className={`blogPosts flex flex-col gap-y-7 items-center justify-center`}>

                <Link href='/blog'>
                    <div className="">
                        <h2 className={`font-bold text-2xl tracking-wide border-b-2 w-fit px-2 border-dashed border-b-black py-2`}>Popular Blogs</h2>
                    </div>
                </Link>
                <div className={`blog tracking-wide leading-5 w-1/2 flex flex-col gap-y-2`}>
                    <Link href='/blogpost/DosAndDont'>
                        <h3 className={`font-semibold text-2xl`}>Do's and Don't's before Switching between Frameworks</h3>
                    </Link>
                    <p className={`font-normal w-fit text-slate-600 text-lg`}>Lorem ipsum dolor sit  quisquam odit iure, ullam veniam enim saepe sequi dolores voluptatibus quidem assumenda minus expedita corrupti quae beatae voluptatum eius delectus sed quis. Voluptatem sint et eveniet placeat. Nulla nobis nisi ab ullam quisquam sequi? Possimus totam perferendis autem.</p>
                </div>
                <div className={`blog tracking-wide leading-5 w-1/2 flex flex-col gap-y-2`}>
                    <Link href='/blogpost/DosAndDont'>
                        <h3 className={`font-semibold text-2xl`}>Do's and Don't's before Switching between Frameworks</h3>
                    </Link>
                    <p className={`font-normal w-fit text-slate-600 text-lg`}>Lorem ipsum dolor sit  quisquam odit iure, ullam veniam enim saepe sequi dolores voluptatibus quidem assumenda minus expedita corrupti quae beatae voluptatum eius delectus sed quis. Voluptatem sint et eveniet placeat. Nulla nobis nisi ab ullam quisquam sequi? Possimus totam perferendis autem.</p>
                </div>
                <div className={`blog tracking-wide leading-5 w-1/2 flex flex-col gap-y-2`}>
                    <Link href='/blogpost/DosAndDont'>
                        <h3 className={`font-semibold text-2xl`}>Do's and Don't's before Switching between Frameworks</h3>
                    </Link>
                    <p className={`font-normal w-fit text-slate-600 text-lg`}>Lorem ipsum dolor sit  quisquam odit iure, ullam veniam enim saepe sequi dolores voluptatibus quidem assumenda minus expedita corrupti quae beatae voluptatum eius delectus sed quis. Voluptatem sint et eveniet placeat. Nulla nobis nisi ab ullam quisquam sequi? Possimus totam perferendis autem.</p>
                </div>
            </div>
        </>
    );
}

export default Blog