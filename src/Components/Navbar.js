import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Login from "./Login";
import Signup from "./Signup";

function Navbar({ cartData }) {

    const navigate = useNavigate();
    const [issignin, setIsignin] = useState(false)
    const [issignup, setIsignup] = useState(false)
    
    const handleSignin=()=>{
        setIsignin(true)
        setIsignup(false)
    }
    const handleSignup=()=>{
        setIsignin(false)
        setIsignup(true)
    }

    return (
        <div>
            <div className="navbar px-5 d-flex align-items-center mb-5">
                <div className="icon mt-3">
                    <p>
                        <i class="fa fa-cutlery " aria-hidden="true"></i> Food Court
                    </p>
                </div>
                <div className="links d-flex">
                    <div className="btn btn-outline-dark mx-2" onClick={() => navigate("/")}>
                        <i className="fa fa-home"></i> Home
                    </div>
                    <div className="btn btn-outline-dark mx-2" onClick={() => handleSignin()}>
                        <i className="fa fa-user"></i> Sign in
                    </div>

                    <div className="btn btn-outline-dark mx-2" onClick={() => navigate("/cart")}>
                        <i className="fa fa-shopping-cart">
                            <sup>
                                <span className="fw-bold  fs-6"> {cartData.length}</span>
                            </sup>
                        </i>{" "}
                        Cart
                    </div>

                    <div className="btn btn-outline-dark mx-2" onClick={()=>navigate('/help')}>
                        <i className="fa fa-info"></i> Help
                    </div>
                </div>
            </div>
            <Modal isOpen={issignin} toggle={() => setIsignin(!issignin)} className="text-dark">
                <ModalHeader>Log in</ModalHeader>
                <ModalBody>
                    <Login handleSignup={handleSignup}/>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-danger" onClick={() => setIsignin(!issignin)}>Close</button>
                </ModalFooter>
            </Modal>
            <Modal isOpen={issignup} toggle={()=>setIsignup(!issignup)} className="text-dark">
                <ModalHeader>Create Account</ModalHeader>
                <ModalBody>
                    <Signup handleSignin={handleSignin}></Signup>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-danger" onClick={() => setIsignup(!issignup)}>Close</button>

                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Navbar;
