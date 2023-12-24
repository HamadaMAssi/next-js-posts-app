import React from 'react';
import './post.css';
import Link from 'next/link';

async function Posts(props) {
  
  const response = await fetch('https://jsonplaceholder.typicode.com/posts',
  {
    next:{
      revalidate: 120,
    }
  });
  const postsData = await response.json();

  const jsxElements = () => {
    const myData = [];
    if (props.userId != -1){
      myData.push(postsData.filter((p)=>p.userId === props.userId).map((post,i)=>{
        return(
          <Link href={`/Posts/${post.id}`} className='post'>
            <div key={i}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          </Link>
        )
      }));
      return myData;
    } else {
      for (let i = 0; i < props.postsNumber; i++) {
        // const randomIndex = Math.floor(Math.random() * postsData.length);
        myData.push(
          <Link href={`/Posts/${postsData[i].id}`} className='post'>
            <div key={i}>
              <h1>{postsData[i].title}</h1>
              <p>{postsData[i].body}</p>
            </div>
          </Link>
        );
      }
      return myData;
    }
  };

  return (
    <div style={{ background: 'linear-gradient(45deg, #ececec,#fff)' }}>
      <h1 className='title-posts-sec'>{props.title}</h1>
      <div className='posts-container'>{jsxElements()}</div>
      <Link href='/Posts' className={`more-posts ${props.btnClass}`} >
        More
      </Link>
    </div>
  );
}

export default Posts;
