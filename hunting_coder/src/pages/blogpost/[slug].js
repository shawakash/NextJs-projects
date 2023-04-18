import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'

// Find the correct post using slug
// Fill the page

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

            <div className={`blog tracking-wide leading-5 w-1/2 flex flex-col gap-y-10`}>
                <Link href='/blogpost/DosAndDont'>
                    <h3 className={`font-semibold text-4xl`}>Do's and Don't's before Switching between Frameworks</h3>
                </Link>
                <p className={`font-semibold w-fit text-slate-600 text-xl`}>Lorem ipsum dolor sit  quisquam odit iure, ullam veniam enim saepe sequi dolores voluptatibus quidem assumenda minus expedita corrupti quae beatae voluptatum eius delectus sed quis. Voluptatem sint et eveniet placeat. Nulla nobis nisi ab ullam quisquam sequi? Possimus totam perferendis autem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima asperiores architecto blanditiis, obcaecati dicta laboriosam corporis odio itaque perferendis nesciunt quia? At, sequi obcaecati porro atque nemo minima placeat? Harum, voluptate ducimus quidem tempora pariatur libero veniam beatae, fugiat totam quasi sed doloremque, asperiores similique explicabo quos est? Pariatur corrupti, eveniet illo totam vero minima eos! Aperiam itaque corporis fugiat repellendus. Exercitationem aperiam voluptatem ipsam qui numquam, corporis, dolorem aut cumque officiis non id est ipsa dolorum accusantium cum delectus? Velit facilis qui minus ratione, vitae non, reiciendis voluptas ea quis incidunt quasi officia nemo rem eum, cumque deserunt ullam!</p>
            </div>
        </>
    )
}

export default slug