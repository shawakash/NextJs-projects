import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/api/blogs').then((a) => a.json()).then((parsed) => {
            console.log(parsed)
            setBlogs(parsed)
        });

    }, [])
    return (
        <>
            <Head>
                <title>Blog | Hunting Coder</title>
                <meta name="description" content="A blog post for the coder, by the coder, of the coder :)" />
                <meta name="keywords" content="huting coder, hunting, coder, nextJs, nextjs, About Hunting Coders" />
            </Head>

            <div className={`blogPosts flex flex-col gap-y-10 items-center justify-center`}>

                <Link href='/blog'>
                    <div className="">
                        <h2 className={`font-bold text-2xl tracking-wide border-b-2 w-fit px-2 border-dashed border-b-black py-2`}>Popular Blogs</h2>
                    </div>
                </Link>
                {blogs?.map((blog) => {
                    {/* console.log(blog.slug) */}
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
        </>
    );
}

export default Blog