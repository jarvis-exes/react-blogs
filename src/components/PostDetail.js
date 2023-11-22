import { useEffect, useState } from "react";
import {db} from '../firebase'
import { useParams } from "react-router-dom";
import { onSnapshot, doc } from 'firebase/firestore';

function PostDetail() {
  const[post, setPost] = useState({});
  const {postId} = useParams();

  useEffect(()=>{

    const unsub = onSnapshot(doc(db, "Posts", postId), (doc) => {
      setPost(doc.data());
    });

  },[])

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <h3>{post.subTitle}</h3>
      <p>{post.content}</p>
    </div>
  );
}
  
  export default PostDetail;