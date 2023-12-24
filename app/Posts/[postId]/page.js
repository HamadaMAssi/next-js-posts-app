import Hero from '@/app/components/Hero/Hero'
import React from 'react'
import '../[postId]/page.css'
import Posts from '../../components/Posts/Posts'

async function page({ params }) {
    const postId = params.postId;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
            next: {
                revalidate: 120,
            }
        }
    );
    const postData = await response.json();

    return (
        <>
            <Hero cName="hero-mid" heroImg='/4.jpg' title="Post Details" text="" url="" btnClass="hide" buttonText="" />
            <div key={postId} className='post'>
                <h1>{postData.title}</h1>
                <p>{postData.body}</p>
            </div>
            <Posts title="Posts by the same person" userId={postData.userId} postsNumber={100} btnClass="hide" />
        </>
    )
}

export default page
