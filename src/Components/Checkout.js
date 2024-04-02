import React from "react";
import "./checkout.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
function Checkout({ cartData, fetchCartdata }) {
  
  const navigate = useNavigate()
  
  const totalAmount = cartData.reduce((prev, curr) => prev + Number(curr.price), 0)
  
  const handleCheckout = () => {
    cartData.map(async (item) => {
      await axios.delete(`https://660513e12ca9478ea17f38c6.mockapi.io/newcart/${item.id}`).then((resp) => {
      }).catch((err) => {
        console.log(err)
      })
    })
    fetchCartdata()
    toast.success("Order placed")
    navigate('/')
  }

  return (
    <div className="text-dark container">
      <div className="row">
        <div className="col-7 check-left mx-2 bg-light rounded p-2">
          <div className="row p-4">
            <h5>Enter Your Card Details</h5>
            <div className="col-12">
              <div className="mb-3">
                <label className="form-label">Card Number</label>
                <input
                  className="form-control"
                  type="number"
                  maxLength={16}
                  placeholder="1234 5678 9012 3456"
                />
              </div>
            </div>
            <div className="col-12">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name as in card"
                />
              </div>
            </div>

            <div className="col-6">
              <div className="mb-3">
                <label className="form-label">CCV Number</label>
                <input
                  className="form-control"
                  type="number"
                  maxLength={3}
                  placeholder="123"
                />
              </div>
            </div>

            <div className="col-6">
              <div className="mb-3">
                <label className="form-label">Expiry Date</label>
                <input
                  className="form-control"
                  type="date"
                  placeholder="MM/YYYY"
                />
              </div>
            </div>
            <button className='btn btn-success mt-4 w-75 m-auto' onClick={() => handleCheckout()}>Pay $ {totalAmount}</button>

          </div>
        </div>
        <div className="col-3 check-right mx-2 bg-warning  rounded">
          <div className="p-4">
            <h5>Your Bill</h5>
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
                  <div>${totalAmount}</div>
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
                  <div>${totalAmount - 10}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
