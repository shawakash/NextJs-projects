import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
// import * as fs from 'fs'

const Blog = ({ blogs }) => {
    const [count, setCount] = useState(3);
    // const [blogs, setBlogs] = useState(initalBlogs);

    // const fetchData =  async (_) => {
    //     const scrollBlogs = await fetch(`http://localhost:3000/api/blogs/?count=${count + 3}`)
    //     setCount(count + 3);
    //     const fetchData = await scrollBlogs.json();
    //     setBlogs(fetchData);
    // }

    

    return (
        <>
            <Head>
                <title>Blogs | Hunting Coder</title>
                <meta name="description" content="A blog post for the coder, by the coder, of the coder :)" />
                <meta name="keywords" content="huting coder, hunting, coder, nextJs, nextjs, About Hunting Coders" />
            </Head>

            <div className={`blogPosts w-full flex flex-col gap-y-10 items-center justify-center`}>

                <Link href='/blog'>
                    <div className="">
                        <h2 className={`font-bold text-2xl tracking-wide border-b-2 w-fit px-2 border-dashed border-b-black py-2`}>Popular Blogs</h2>
                    </div>
                </Link>
                {/* <InfiniteScroll
                    dataLength={blogs.length} //This is important field to render the next data
                    next={fetchData}
                    hasMore={true}  
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                    // below props only if you need pull down functionality
                    // refreshFunction={this.refresh}
                    // pullDownToRefresh
                    pullDownToRefreshThreshold={50}
                    pullDownToRefreshContent={
                        <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
                    }
                    releaseToRefreshContent={
                        <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
                    }
                    className='flex w-screen flex-col gap-y-10 items-center justify-center'
                > */}
                {/* </InfiniteScroll> */}

                    {blogs?.map((blog) => {
                        {/* console.log(blog.slug) */ }
                        return (
                            <div key={Math.floor(Math.random()*10000 + 1)} className={`blog tracking-wide leading-5 w-1/2 flex flex-col gap-y-2`}>
                                <Link href={`/blogpost/${blog.slug}`}>
                                    <h3 className={`font-semibold text-2xl`}>{blog?.title}</h3>
                                </Link>
                                <p className={`font-normal w-fit text-slate-600 text-lg`}>{(blog?.content).slice(0, 250)} <span className='font-extrabold'><Link href={`/blogpost/${blog.slug}`}>...</Link></span></p>
                            </div>
                        );
                    })}

            </div>
        </>
    );
}

// export async function getStaticProps(context) {
//     let blogs = [];
//     let data = await fs.promises.readdir('blogPost')
//     for (let file of data) {
//         let fileData = await fs.promises.readFile(`blogPost/${file}`, 'utf-8')
//         const jsonParse = JSON.parse(fileData)
//         blogs.push(jsonParse);
//     }
//     return {
//         props: { blogs }      // will be passed as an props
//     }
// }
export async function getServerSideProps(context) {
    let response = await fetch(`http://localhost:3000/api/blogs`);
    let blogs = await response.json();

    return {
        props: { blogs }      // will be passed as an props
    }
}

export default Blog