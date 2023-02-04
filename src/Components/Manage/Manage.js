import React, { useEffect, useRef, useState } from 'react';
import Items from './Items';
import './Manage.css';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
const Manage = () => {
    const [loading, setLading] = useState(false)

    

    const handleAddItem = event => {
        event.preventDefault()


        //   useEffect(() => {
        //        const select = modalSelect.target;
        //        console.log(select)
        //   },[])
        const from = event.target;

        const name = from.name.value;
        const image = from.image.value;
        const quantity = from.quantity.value;
        const brand = from.brand.value;
        const price = from.price.value;
        const item = { name, image, quantity, brand, price }

        const closeModal = event.currentTarget;
        setLading(true)
        fetch(`http://localhost:5000/addItem`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                 closeModal.closest('.modal').remove()
                 
                 MySwal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Item add successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                   window.location.reload()

                }
            })
            .finally(() => {
                setLading(false)
            })


    }

    return (
        <div>
            <div className="row bg-light  g-2">
                <div className="col-md-3 ">
                    <div className='p-3 bg-primary  d-flex align-items-center justify-content-center'>
                        <h3 className='text-white'>Brand</h3>
                    </div>
                </div>
                <div className="col-md-3 ">
                    <div className='p-3 bg-info  d-flex align-items-center justify-content-center'>
                        <h3 className='text-white'>Stock</h3>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className='p-3  bg-danger  d-flex align-items-center justify-content-center'>
                        <h3 className='text-white'>Total price</h3>
                    </div>
                </div>
                <div className="col-md-3 ">
                    <div className='p-3 bg-success   d-flex align-items-center justify-content-center'>
                        <h3 className='text-white'>Seals</h3>
                    </div>
                </div>

            </div>


            {/* add  */}

            <div className='modal fade' id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Add New Item</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div>
                                <form onSubmit={handleAddItem}>
                                    <div className="modal-body">

                                        <div className="mb-3">
                                            <label for="exampleInputName" className="form-label">Bicycle Name</label>
                                            <input type="text" name="name" className="form-control" id="exampleInputName" aria-describedby="emailHelp" required />
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleInputImage" className="form-label">Bicycle Image</label>
                                            <input type="text" name="image" className="form-control" id="exampleInputImage" aria-describedby="emailHelp" required />
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleInputQuantity" className="form-label">Bicycle Quantity</label>
                                            <input type="text" name='quantity' className="form-control" id="exampleInputImage" aria-describedby="emailHelp" required />
                                        </div>
                                        <div className="input-group mb-3">
                                            <label className="input-group-text" for="inputGroupSelect01">Bicycle Brand</label>
                                            <select name="brand" className="form-select" id="inputGroupSelect01" required>
                                                <option selected>Choose...</option>
                                                <option value="Hero">Hero</option>
                                                <option value="Duranto">Duranto</option>
                                                <option value="Atlas">Atlas</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleInputImage" className="form-label">Bicycle price</label>
                                            <input type="text" name="price" className="form-control" id="exampleInputImage" aria-describedby="emailHelp" required />
                                        </div>



                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-primary" >{loading ? "Loading..." : "Add Item"}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            <div className="row add-btn-box my-2 ">
                <div className='my-3 d-flex justify-content-end '>
                    <div>
                        <button className='btn btn-sm btn-light add-btn ' data-bs-toggle="modal" data-bs-target="#exampleModal" >Add
                            New Item</button>
                    </div>
                </div>
            </div>

            {/* items list */}
            <Items></Items>
        </div>
    );
};

export default Manage;