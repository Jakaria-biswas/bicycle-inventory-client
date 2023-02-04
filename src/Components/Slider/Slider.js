import React from 'react';
import bicycle1 from '../../images/bicycle1.jpg'
import bicycle2 from '../../images/bicycle2.jpg'
import bicycle3 from '../../images/bicycle3.jpg'
const Slider = () => {
    return (
        <div>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner ">
                    <div className="carousel-item active">
                        <img className='fixed-height img-fluid d-block w-100'  src={bicycle1}  alt="..."/>
                    </div>
                    <div className="carousel-item  ">
                        <img className='fixed-height d-block w-100' src={bicycle2}  alt="..."/>
                    </div>
                    <div className="carousel-item  ">
                        <img className='fixed-height d-block w-100' src={bicycle3}  alt="..."/>
                    </div>
                  
                </div>
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>
        </div>
    );
};

export default Slider;