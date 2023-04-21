import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className={`flex justify-center items-center sm:py-10 pt-4 pb-4 `}>
            <ul className={`flex sm:flex-row sm:gap-x-10 text-xl font-semibold flex-col`}>
                <Link href='/' scroll={true} >
                    <li className={`cursor-pointer px-2 py-1 `}>Home</li>
                </Link>
                <Link href='/about' >
                    <li className={`cursor-pointer px-2 py-1 hidden sm:flex`}>About</li>
                </Link>

                <Link href='/blog'>
                    <li className={`cursor-pointer px-2 py-1 hidden sm:flex`}>Blogs</li>
                </Link>
                <Link href='/bloggers'>
                    <li className={`cursor-pointer px-2 py-1 hidden sm:flex`}>Bloggers</li>
                </Link>
                <Link href='/contact'>
                    <li className={`cursor-pointer px-2 py-1 hidden sm:flex`}>Contact</li>
                </Link>
            </ul>
            
        </nav>
    )
}

export default Navbar