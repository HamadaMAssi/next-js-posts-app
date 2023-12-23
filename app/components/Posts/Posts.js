import React from 'react';
import './post.css';
import Link from 'next/link';

async function Posts(props) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const postsData = await response.json();

  const jsxElements = () => {
    if (props.postsNumber === 10) {
      const randomPosts = [];
      for (let i = 0; i < props.postsNumber; i++) {
        const randomIndex = Math.floor(Math.random() * postsData.length);
        randomPosts.push(
          <div key={i} className='post'>
            <h1>{postsData[randomIndex].title}</h1>
            <p>{postsData[randomIndex].body}</p>
          </div>
        );
      }
      return randomPosts;
    } else {
      return postsData.map((p, index) => (
        <div key={index} className='post'>
          <h1>{p.title}</h1>
          <p>{p.body}</p>
        </div>
      ));
    }
  };

  return (
    <div style={{ background: 'linear-gradient(45deg, #ececec,#fff)' }}>
      <div className='posts-container'>{jsxElements()}</div>
      <Link href='/Posts' className={`more-posts ${props.btnClass}`} >
        More
      </Link>
    </div>
  );
}

export default Posts;
