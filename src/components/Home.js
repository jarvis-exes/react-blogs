import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { onSnapshot, collection, query } from 'firebase/firestore';
import {db} from '../firebase'

function Home() {
  const [posts, setPosts] = useState([]);
  
  useEffect(()=>{
    
    const q = query(collection(db,"Posts"));

    const unsubscribe = onSnapshot(q, (querySnapshot)=>{
      const posts = querySnapshot.docs.map((doc)=>{
        return {
          id : doc.id,
          ...doc.data(),
        };
      });
      setPosts(posts);
      console.log(posts);
    });

    
  },[])

  return (
      <div className="home">
        <h1>Home</h1>

        {posts.map((post, index)=>(
          <div className='post' key={`post-${index}`}>
            <Link to={`/post/${post.id}`}>
              <h3>{post.title}</h3>
              <p>{post.subTitle}</p>
            </Link>
          </div>
        ))}

      </div>
    );
  }
  
  export default Home;