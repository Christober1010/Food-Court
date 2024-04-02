import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import '../node_modules/owl.carousel/dist/assets/owl.carousel.css'
import '../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Help from './Components/Help';

function App() {

  const [cartData,setCartData]=useState([])

  const fetchCartdata=()=>{
    axios.get("https://660513e12ca9478ea17f38c6.mockapi.io/newcart").then((resp)=>{
      // console.log(resp.data)
      setCartData(resp.data)
    }).catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    fetchCartdata()
  },[cartData])


  return (
    <div>
      <BrowserRouter>
      <Navbar cartData={cartData}/>
        <Routes>
          <Route path='/' element={<Home cartData={cartData} setCartData={setCartData} fetchCartdata={fetchCartdata}/>}></Route>
          <Route path='/cart' element={<Cart cartData={cartData} fetchCartdata={fetchCartdata}/>}></Route>
          <Route path='/checkout' element={<Checkout cartData={cartData} fetchCartdata={fetchCartdata}/>}></Route>
          <Route path='/help' element={<Help></Help>}></Route>
        </Routes>
      <Toaster></Toaster>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
