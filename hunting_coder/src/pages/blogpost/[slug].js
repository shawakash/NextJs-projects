import { useRouter } from 'next/router'
import React from 'react'

const slug = () => {
    const router = useRouter();
    const { slug } = router.query;
    {slug? console.log(router) : ''}
    return (
        <div className='font-bold text-3xl'>Accessed Sub-Pathname: {slug}</div>
    )
}

export default slug