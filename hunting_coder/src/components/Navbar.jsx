import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className={`flex justify-center items-center py-10`}>
            <ul className={`flex flex-row gap-x-10 text-xl font-semibold`}>
                <Link href='/' scroll={true} >
                    <li className={`cursor-pointer px-2 py-1 `}>Home</li>
                </Link>
                <Link href='/about' >
                    <li className={`cursor-pointer px-2 py-1 `}>About</li>
                </Link>

                <Link href='/blog'>
                    <li className={`cursor-pointer px-2 py-1 `}>Blogs</li>
                </Link>
                <Link href='/bloggers'>
                    <li className={`cursor-pointer px-2 py-1 `}>Bloggers</li>
                </Link>
                <Link href='/contact'>
                    <li className={`cursor-pointer px-2 py-1 `}>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar