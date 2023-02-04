import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Item from './Item';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)


const ItemView = () => {
    const { id } = useParams();
    const [singleItem, setSingleItem] = useState({});

    // the hook for update from button en-sure update call
    const [update, setUpdate] = useState(false)


    /// navigate

    const navigate = useNavigate()




    useEffect(() => {
        fetch(`http://localhost:5000/getSingleItem/${id}`)
            .then(res => res.json())
            .then(data => {
                setSingleItem(data)
            })
    }, [])

    const price = new Intl.NumberFormat().format(singleItem.price);


    // item update work from here


    const handleName = e => {
        const nameUpdate = { name: e.target.value, image: singleItem.image, quantity: singleItem.quantity, brand: singleItem.brand, price: singleItem.price }
        setSingleItem(nameUpdate)
    }
    const handleImage = e => {
        const updateImage = { name: singleItem.name, image: e.target.value, quantity: singleItem.quantity, brand: singleItem.brand, price: singleItem.price }
        setSingleItem(updateImage)
    }
    const handleQuantity = e => {
        const updateQuantity = { name: singleItem.name, image: singleItem.image, quantity: e.target.value, brand: singleItem.brand, price: singleItem.price }
        setSingleItem(updateQuantity)
    }
    const handleBrand = e => {
        const updateBrand = { name: singleItem.name, image: singleItem.image, quantity: singleItem.quantity, brand: e.target.value, price: singleItem.price }
        setSingleItem(updateBrand)
    }
    const handlePrice = e => {
        const updatePrice = { name: singleItem.name, image: singleItem.image, quantity: singleItem.quantity, brand: singleItem.brand, price: e.target.value }
        setSingleItem(updatePrice)
    }

    const handleItemUpdate = event => {
        event.preventDefault();

        
        setUpdate(true)
        fetch(`http://localhost:5000/updateItem/${id}`,{
              method:"PUT",
              headers:{
                 "content-type":"application/json"
              },
              body:JSON.stringify(singleItem)
        })
        .then(res => res.json())
        .then(data => {
             if(data){
                MySwal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Item update successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                   
                 navigate('/manage')
                 window.location.reload()
             }
        })
        .finally(() => setUpdate(false))

    }
    return (
        <div className='view-item-page p-4'>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Update</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={handleItemUpdate}>
                            <div class="modal-body">
                                <div className="mb-3">
                                    <label for="exampleInputName" className="form-label">Bicycle Name</label>
                                    <input type="text" onChange={handleName} value={singleItem.name || ''} className="form-control" id="exampleInputName" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputImage" className="form-label">Bicycle Image</label>
                                    <input type="text" onChange={handleImage} placeholder='image url' className="form-control" id="exampleInputImage" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputQuantity" className="form-label">Bicycle Quantity</label>
                                    <input type="text" onChange={handleQuantity} value={singleItem.quantity || ''} className="form-control" id="exampleInputImage" aria-describedby="emailHelp" />
                                </div>
                                <div className="input-group mb-3">
                                    <label className="input-group-text" for="inputGroupSelect01">Bicycle Brand</label>
                                    <select onChange={handleBrand} value={singleItem.brand} className="form-select" id="inputGroupSelect01">
                                        <option selected>Choose...</option>
                                        <option value="Hero">Hero</option>
                                        <option value="Duranto">Duranto</option>
                                        <option value="Atlas">Atlas</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputImage" className="form-label">Bicycle price</label>
                                    <input type="text" onChange={handlePrice} value={singleItem.price || ''} className="form-control" id="exampleInputImage" aria-describedby="emailHelp" />
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary">{update ? "updating...": "Update"}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Link to="/manage"><button className='btn btn-info btn-sm'>Back</button></Link>
            <div className='d-flex justify-content-center  '>

                <div>
                    <img className='img-fluid w-50' src={singleItem.image} alt="" />
                    <h3>{singleItem.name}</h3>
                    <p>Brand : {singleItem.brand}</p>
                    <p>Quantity : {singleItem.quantity}</p>
                    <p>Price : {price} taka</p>
                    <button className='btn btn-primary btn-sm' data-bs-toggle="modal" data-bs-target="#exampleModal">update the bicycle info</button>
                </div>
            </div>

        </div>
    );
};

export default ItemView;