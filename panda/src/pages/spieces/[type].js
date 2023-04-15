import { useRouter } from 'next/router';
import React from 'react'

const type = () => {
    const router = useRouter();
    const { type } = router.query;

    return (
        <div>You have accesed the {type}</div>
    )
}

export default type;