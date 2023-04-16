import Head from 'next/head';
import React from 'react'

const Blog = () => {
    return (
        <>
            <Head>
                <title>Blog | Hunting Coder</title>
                <meta name="description" content="A blog post for the coder, by the coder, of the coder :)" />
                <meta name="keywords" content="huting coder, hunting, coder, nextJs, nextjs, About Hunting Coders" />
            </Head>
            <main className="">
                <div>This is the Blog Page</div>
            </main>
        </>
    );
}

export default Blog