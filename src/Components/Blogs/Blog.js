import React from 'react';
import { Link } from 'react-router-dom';

const Blog = (props) => {
    const {_id, title, image, content } = props.blog;
    return (
        <div class="col ">
            <div class="card h-100">
                <img src={image} class="card-img-top image-fluid" alt="..." />
                <Link to={`/detailsBlog/${_id}`}>
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Blog;