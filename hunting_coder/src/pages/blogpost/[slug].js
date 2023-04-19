import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

// Find the correct post using slug
// Fill the page

const slug = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [blog, setBlog] = useState({});
    // console.log(slug)
    useEffect(() => {
        slug && fetch(`http://localhost:3000/api/blogPost?slug=${slug}`)
        .then(a => a.json())
        .then(parsed => setBlog(parsed));
    },[])

    return (
        <>
            <Head>
                <title>{slug?.substring(0,1).toLocaleUpperCase() + slug?.substring(1)} | Hunting Coder</title>
                <meta name="description" content="A blog post for the coder, by the coder, of the coder :)" />
                <meta name="keywords" content="huting coder, hunting, coder, nextJs, nextjs, About Hunting Coders" />
            </Head>

            <div className={`blog tracking-wide leading-5 w-1/2 flex flex-col gap-y-10`}>
                <Link href='/blogpost/DosAndDont'>
                    <h3 className={`font-semibold text-4xl`}>{blog?.title}</h3>
                </Link>
                <p className={`font-semibold w-fit text-slate-600 text-xl`}>{blog?.content}</p>
            </div>
        </>
    )
}

export default slug