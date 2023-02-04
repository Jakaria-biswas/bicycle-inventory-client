import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DetailsBlog = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/blog/${id}`)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])
    return (
        <div className='container'>
            <h1>{blog.title}</h1>
            <div className='text-center'>
                <img className='img-fluid my-4 ' src={blog.image} alt="" />
            </div>
            <div
                dangerouslySetInnerHTML={{ __html: blog.content }}
            />
        </div>
    );
};

export default DetailsBlog;