import React from 'react';
import { BsShieldCheck } from 'react-icons/bs';
import { BsPlus, BsDash } from "react-icons/bs";
import { BiTrash } from "react-icons/bi";
import { GrFormView } from 'react-icons/gr';
import './Item.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
const Item = (props) => {

    // only store quantity
    const [updateQuantity, setUpdateQuantity] = useState('')
    const { _id, image, name, brand, price, quantity } = props.item;
    const priceFormate = new Intl.NumberFormat().format(price);

    const handleDelete = (e, id) => {

        const goneDeleteItem = e.currentTarget

        Swal.fire({
            title: 'Are you sure?',
            text: "You wont delete this item !",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/deleteItem/${id}`, {
                    method: "DELETE"

                })
                    .then(res => res.json())
                    .then(data => {

                        if (data) {

                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                            goneDeleteItem.closest(".col").remove()
                        }
                    })

            }
        })



    }
    const handleQuantityDecrease = async (id) =>{
        const { value: number } = await Swal.fire({
            input: 'number',
            inputLabel: 'Quantity update Decrease',
            inputPlaceholder: 'Item quantity...',
            inputAttributes: {
                'aria-label': 'Type your message here'
            },
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to write quantity !'
                }
            }
        })

        if (number) {
            // Swal.fire(number)
            const data = { quantity: number }

            fetch(`http://localhost:5000/quantityUpdateDecrease/${id}`, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        MySwal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Decrease quantity',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        window.location.reload()
                    }
                })
        }


    }

    const handleQuantityIncrease = async (id) => {
       

        const { value: number } = await Swal.fire({
            input: 'number',
            inputLabel: 'Quantity update Increase',
            inputPlaceholder: 'Item quantity...',
            inputAttributes: {
                'aria-label': 'Type your message here'
            },
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to write quantity !'
                }
            }
        })

        if (number) {
            // Swal.fire(number)
            const data = { quantity: number }

            fetch(`http://localhost:5000/quantityUpdateIncrease/${id}`, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        MySwal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Increase quantity',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        window.location.reload()
                    }
                })
        }






    }

    return (


        <div class="col">
            <div class="card h-100">
                <div className='text-center'>
                    <img src={image} class="card-img-top w-50 " alt="..." />
                </div>
                <div class="card-body">
                    <p class="card-title"> <small>{name}</small></p>
                    <p class="card-text"> <BsShieldCheck /> {brand}</p>
                    <p><small> Price : {priceFormate}</small></p>
                    <p><small>Quantity : {quantity}</small></p>
                    <div>
                        <div className='d-flex justify-content-between my-3'>
                            <button className='item-btn' onClick={() => handleQuantityDecrease(_id)}><BsDash className='icon ' /></button>
                            <button onClick={() => handleQuantityIncrease(_id)} title="update quantity" className='item-btn'><BsPlus className='icon' /></button>

                        </div>
                    </div>
                     <hr/>
                    <div>
                        <div className='d-flex justify-content-between my-3'>
                            <button onClick={(e) => handleDelete(e, _id)} title="delete" className='delete-btn'><BiTrash className='delete-icon' /></button>
                            <Link to={`/itemView/${_id}`}><button title={`view the ${name}`} className='view-btn'><GrFormView className='view-icon' /></button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Item;