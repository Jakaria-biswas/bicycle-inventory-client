import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './AddBlog.css';
import { useRef } from 'react';
import { useState } from 'react';


const AddBlog = () => {


     const  [image, setImage] = useState('');
     const  [title, setTitle] = useState('');

    const editorRef = useRef(null);

    

    const handleContent = event => {
        event.preventDefault()
        const content = editorRef.current.getContent()
  
        const blogData = { image, title, content}

        fetch(`http://localhost:5000/postBlog`,{
             method:"POST",
             headers:{
                   'content-type':'application/json'                 
              },
              body: JSON.stringify(blogData)
        })
        .then(res => res.json())
        .then(data => {

                console.log(data);
              
        })




    }


    return (
        <div className='bg-light p-4'>

            <h2 className='text-center blog-header'>Create New Blog</h2>
            <form onSubmit={handleContent} className='m-5'>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Blog image</label>
                    <input type="text" onChange={(e) => setImage(e.target.value)} className="form-control" id="exampleFormControlInput1" required />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Blog title</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} className="form-control" id="exampleFormControlInput1" required />
                </div>
                <div className="mb-3" >
                <label for="exampleFormControlInput1" className="form-label">Blog content</label>
                    <Editor
                        
                        onInit={(evt, editor) => editorRef.current = editor}
                        init={{
                            height: 200,
                            menubar: false
                        }}
                    />

                </div>
                <button type="submit" className='post-button'>Post Blog</button>
                
            </form>
        </div>
    );
};

export default AddBlog;