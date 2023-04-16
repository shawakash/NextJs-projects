import Head from 'next/head';
import { useRouter } from 'next/router'
import React from 'react'

const slug = () => {
    const router = useRouter();
    const { slug } = router.query;
    { slug ? console.log(router) : '' }
    return (
        <>
            <Head>
                <title>{slug} | Hunting Coder</title>
                <meta name="description" content="A blog post for the coder, by the coder, of the coder :)" />
                <meta name="keywords" content="huting coder, hunting, coder, nextJs, nextjs, About Hunting Coders" />
            </Head>

            <main className="">
                <div className='font-bold text-3xl'>Accessed Sub-Pathname: {slug}</div>
            </main>
        </>
    )
}

export default slug