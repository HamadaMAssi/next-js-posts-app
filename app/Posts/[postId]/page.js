import Hero from '@/app/components/Hero/Hero'
import React from 'react'
import '../[postId]/page.css'

async function page({params}) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const postsData = await response.json();

    return (
        <>
            <Hero cName="hero-mid" heroImg='' title="Post Details" text="" url="" btnClass="hide" buttonText="" />
            <div key={params.postId} className='post'>
                <h1>{postsData[params.postId].title}</h1>
                <p>{postsData[params.postId].body}</p>
            </div>
        </>
    )
}

export default page
