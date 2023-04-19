import Head from 'next/head';
import Image from 'next/image';
import React from 'react'

const About = () => {
    return (
        <>
            <Head>
                <title>About Hunting Coder</title>
                <meta name="description" content="A blog post for the coder, by the coder, of the coder :)" />
                <meta name="keywords" content="huting coder, hunting, coder, nextJs, nextjs, About Hunting Coders" />
            </Head>
            <section className='flex flex-col items-center justify-center px-40 gap-y-10'>
                <div className="title text-black font-bold  text-5xl ">
                    Hunting Coder
                </div>
                <div className="flex flex-row gap-x-20 justify-center">
                    <div className="flex icon w-fit items-center">
                        <Image src='/heroImg.jpg' alt='img' width={250} height={100} className='rounded-xl'/>
                    </div>
                    <div className="decr tracking-wide text-lg leading-8 w-1/2 font-medium">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic quaerat similique voluptate quidem voluptatem amet quasi id corporis. Saepe expedita est atque beatae recusandae, cum porro esse rem voluptas! Similique placeat ab corporis accusantium, quisquam mollitia doloribus culpa incidunt hic eligendi, aliquam harum assumenda aperiam reprehenderit aut! Nisi exercitationem aut eveniet eum officia, molestias laborum dolorem obcaecati nesciunt natus recusandae saepe perferendis enim neque explicabo blanditiis cum fugiat voluptatem amet eius, labore libero similique placeat ab! Laboriosam blanditiis sit libero nihil rerum repudiandae placeat? Ratione ab, ea voluptatibus expedita consectetur eos ipsa provident, est ut dolorum optio facere dicta. Fugiat qui beatae, corporis voluptatem incidunt atque a quasi numquam. Magnam ratione, voluptate odio voluptatum, aliquid itaque nemo corporis temporibus ad autem dolore deserunt mollitia rem obcaecati accusantium quia repellat voluptatibus harum accusamus cumque fugiat? Ex eveniet doloremque dolorem nisi fuga quasi, dolor quibusdam necessitatibus in sint rerum autem accusantium quam aperiam dolorum est, quis at repudiandae vero ad quaerat quod inventore qui. Doloribus neque provident aspernatur dolore quis eveniet cum repudiandae magnam voluptate, exercitationem suscipit ea, illo repellendus qui, dolor amet ullam. Ea expedita dolorum impedit natus, quos inventore corporis hic vitae facere at. Incidunt vel laborum porro impedit exercitationem.
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;