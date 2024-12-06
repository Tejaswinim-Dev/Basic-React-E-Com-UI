/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import './jewelryitem.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Jewelryitem({ item }) {
  let [addCart, setCart] = useState(false);
  let { image, title, category, price, rating, id } = item;

  // Check if the item is already in the cart when the component mounts
  useEffect(() => {
    axios
      .get(`http://localhost:3000/addToCart/${id}`)
      .then((res) => {
        if (res.data) {
          setCart(true); // Item is already in the cart
        }
      })
      .catch(() => {
        // Item not in cart or API call failed
      });
  }, [id]);

  const addToCart = () => {
    axios
      .post("http://localhost:3000/addToCart", item)
      .then(() => {
        alert("Product is added to Cart");
        setCart(true);
      })
      .catch(() => {
        alert("Failed to add product to cart");
      });
  };

  return (
    <div className="jewelry-main">
      <div className="jewelry-card">
        <img src={image} alt="" />
        <h6>{title}</h6>
        <span>
          <b>Category:</b> {category}
        </span>
        <br />
        <p>
          <b>Price:</b> ${price}
        </p>
        <p>
          <b>Rate:</b> {rating.rate} <b>Count:</b> {rating.count}
        </p>
        <Link to={`/productdetails/${id}`}>
          <button className="btn btn-primary m-1">Product Details</button>
        </Link>
        {addCart ? (
          <button
            className="btn btn-danger mx-1"
            onClick={() => setCart(false)} // Remove logic can be implemented here
          >
            Remove
          </button>
        ) : (
          <button className="btn btn-warning mx-1" onClick={addToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Jewelryitem;
