import {db} from '../firebase';
import {addDoc, collection} from 'firebase/firestore'
import { useFormInput } from '../hooks';
import { Link } from "react-router-dom";

function CreatePost() {
  
  const title = useFormInput('');
  const subTitle = useFormInput('');
  const content = useFormInput('');

  function  handleSubmit(e){
    e.preventDefault();

    const docRef = addDoc(collection(db, "Posts"), {
      title : title.value,
      subTitle : subTitle.value,
      content : content.value,
      createdAt : new Date()
    });

    console.log("Document written with ID: ", docRef.id);
  }

  return (
      <div className="create-post">
        <h1>Create Post</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Title</label>
            <input 
              {...title}
            />
          </div>
          <div className="form-field">
            <label>Sub Title</label>
            <input 
              {...subTitle}
            />
          </div>
          <div className="form-field">
            <label>Content</label>
            <textarea 
              {...content}
            />
          </div>
          <button className="create-post-btn">Create Post</button>
        </form>

      </div>
    );
  }
  
  export default CreatePost;