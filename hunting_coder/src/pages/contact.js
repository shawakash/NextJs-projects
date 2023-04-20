import Head from 'next/head'
import React, { useRef } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Contact = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const descRef = useRef(null);
    const numberRef = useRef(null);
    async function handleFormSubmit(e) {
        e.preventDefault();
        const body = {
            name: nameRef.current?.value,
            email: emailRef.current.value,
            desc: descRef.current.value,
            number: numberRef.current.value,
        };
        console.log(body)
        fetch(`http://localhost:3000/api/contact`, {
            body: JSON.stringify(body),
            method: "POST"
        })
        .then((response) => { 
            if(response.status == 200) {
                toast.success("Gracias for sharing your concern :)")
            }
            nameRef.current.value = '';
            emailRef.current.value = '';
            descRef.current.value = '';
            numberRef.current.value = '';
        })
        .catch(err => {
            console.error(err);
            toast.error(err.message);
        });
    }
    return (
        <>
            <Head>
                <title>Contact | Hunting Coder</title>
                <meta name="description" content="A blog post for the coder, by the coder, of the coder :)" />
                <meta name="keywords" content="huting coder, hunting, coder, nextJs, nextjs, About Hunting Coders" />
            </Head>
            <div className="Contact Form w-full flex justify-center">
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-y-10 border-2 rounded-lg border-slate-500 text-left text-clip text-lg tracking-wide font-semibold text-slate-600 p-10 w-1/2">
                    <div className="text-center text-3xl font-bold text-black cursor-pointer ">
                        Contact Me
                    </div>
                    <input ref={nameRef} type="text" className="border-b-[1px] p-2 outline-none hover:cursor-pointer  focus:cursor-text transition-all focus:border-b-[1px] focus:border-slate-600 " placeholder='Your name' />
                    <input ref={emailRef} type="text" className="border-b-[1px] p-2 outline-none hover:cursor-pointer  focus:cursor-text transition-all focus:border-b-[1px] focus:border-slate-600 " placeholder='Email' />
                    <textarea ref={descRef} name="" id="" cols="30" rows="0" placeholder='Your Message' className='border-b-[1px] p-2 outline-none hover:cursor-pointer  focus:cursor-text transition-all focus:border-b-[1px] focus:border-slate-600 ' />
                    <input ref={numberRef} type="text" className="border-b-[1px] p-2 outline-none hover:cursor-pointer  focus:cursor-text transition-all focus:border-b-[1px] focus:border-slate-600 " placeholder='Mobile Number' />
                    <button type='submit' onClick={handleFormSubmit} className={`bottom-2 border-black border rounded-lg p-2 w-fit`}>Submit</button>
                    <Toaster />
                </form>
            </div>
        </>
    )
}

export default Contact