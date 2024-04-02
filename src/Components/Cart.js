import React from 'react'
import './cart.css'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function Cart({ cartData,fetchCartdata }) {
    const navigate=useNavigate()

    const handleDeletecart=(id)=>{
        axios.delete(`https://660513e12ca9478ea17f38c6.mockapi.io/newcart/${id}`).then((resp)=>{
            toast.success("Item removed")
            fetchCartdata()
        }).catch((err)=>{
            console.log(err)
        })
    }

    const totalAmount=cartData.reduce((prev,curr)=>prev+Number(curr.price),0)
    return (
        <div>
            <div className='container mb-5'>
                <div className='row'>
                    <div className='col-7 cart-left mx-2'>
                        {
                            cartData.map((list) => {
                                return <div className='product p-2'>
                                    <div className='row'>
                                        <div className='col-4 text-center mt-5'>
                                            <img src={list.image} height={'150px'}/>
                                        </div>
                                        <div className='col-7'>
                                            <p className='fw-bold text-info mt-3'>{list.name}</p>
                                            <p>Price $ {list.price}</p>
                                            <p><span className='badge bg-success'><i className='fa fa-star'></i> {list.rating}</span></p>
                                            <p>{list.description}</p>


                                            <div>
                                                <button className='btn btn-outline-danger'onClick={()=>handleDeletecart(list.id)}>Delete</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            })
                        }

                    </div>
                    <div className='col-4 mx-2 p-0'>
                        <ul class="list-group m-0">
                            <li class="list-group-item">
                                <div className='d-flex justify-content-between'>
                                    <div>Item</div>
                                    <div>{cartData.length}</div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div className='d-flex justify-content-between'>
                                    <div>Price</div>
                                    <div>$ {totalAmount}</div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div className='d-flex justify-content-between'>
                                    <div>Discount</div>
                                    <div>-$10</div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div className='d-flex justify-content-between'>
                                    <div>Final price</div>
                                    <div>$ {totalAmount-10}</div>
                                </div>
                            </li>
                            <button className='btn btn-success mt-4' onClick={()=>navigate('/checkout')}>Pay $ {totalAmount}</button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart