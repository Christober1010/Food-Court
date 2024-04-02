import axios from "axios";
import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "./Home.css";
import toast from "react-hot-toast";
import Loading from "./Loading";

function Home({ cartData, setCartData, fetchCartdata }) {
  const [slideData, setSlideData] = useState([]);
  const [isloading, setIsloading] = useState(true);

  const fetchSlide = () => {
    axios
      .get("https://660a4a470f324a9a2884838b.mockapi.io/food-items")
      .then((resp) => {
        setSlideData(resp.data);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchSlide();
  }, []);

  const handleAddtocart = (data) => {
    console.log(data);
    axios
      .post("https://660513e12ca9478ea17f38c6.mockapi.io/newcart", data)
      .then((resp) => {
        fetchCartdata();
        toast.success("Added to cart");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="home container">
      {isloading ? (
        <Loading></Loading>
      ) : (
        <div className="">
          <div className="fw-bold fs-2 mb-2">Best sellers</div>
          <OwlCarousel className="owl-theme">
            {slideData.map((item) => {
              return (
                <div class="card bg-dark" style={{ width: "20rem" }}>
                  <img src={item.image} class="card-img-top" alt="..." />
                  <div class="card-body p-2">
                    <h5 class="card-title">{item.name}</h5>
                    <p class="card-text text-light">
                      {item.description.substring(0, 50)}...
                      <span className="text-primary">more</span>
                    </p>
                    <div className="d-flex justify-content-center mb-2">
                      <button
                        className="btn btn-outline-warning mx-2"
                        onClick={() => handleAddtocart(item)}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </OwlCarousel>

          <div className="products">
            <div className="fw-bold fs-2"> Dishes</div>
            <div className="row">
              {slideData.map((item) => {
                return (
                  <div className="col-3 p-3 product-card">
                    <div class="card" style={{ width: "18rem" }}>
                      <img
                        src={item.image}
                        class="card-img-top"
                        alt="..."
                        height={"200px"}
                      />
                      <div class="card-body">
                        <h5 class="card-title">{item.name}</h5>
                        <p class="card-text">{item.description.substring(0,50)}</p>
                        <p class="card-text">
                          <span className={item.rating>3 ?"badge bg-success":"badge bg-warning"}>
                            <i className="fa fa-star"></i> {item.rating}
                          </span>
                          <span className="fw-bold"> $ {item.price}</span>
                        </p>
                        <a class="btn btn-primary" onClick={()=>handleAddtocart(item)}>
                         Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
