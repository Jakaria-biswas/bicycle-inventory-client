import React, { useEffect, useState } from 'react';
import Item from './Item';

const Items = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetch('http://localhost:5000/getItems')
            .then(res => res.json())
            .then(data => {
                setItems(data)
                setLoading(true)
            })
    }, [])
    return (
        <div>
            {
                loading ? <div>
                    <h2>Total items : {items.length}</h2>

                    <div class="row row-cols-1 row-cols-md-6 g-4">
                        {
                            items.map(item => <Item key={item._id} item={item}></Item>)
                        }
                    </div>
                </div> : <div className='text-center'>
                    <button class="btn btn-primary" type="button" disabled>
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>
                </div>
            }
        </div>
    );
};

export default Items;