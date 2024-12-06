/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import './Electitems.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Electronicitem({ item }) {
  let [addCart, setCart] = useState(false);
  const { image, title, price, category, rating, id } = item;

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

  // Function to add item to the cart
  const addToCart = () => {
    axios
      .post("http://localhost:3000/addToCart", item)
      .then(() => {
        alert("Product is added to cart");
        setCart(true); // Set state to true after adding
      })
      .catch(() => {
        alert("Failed to add product to cart");
      });
  };

  // Function to remove item from the cart
  const removeFromCart = () => {
    axios
      .delete(`http://localhost:3000/removeFromCart/${id}`)
      .then(() => {
        alert("Product is removed from cart");
        setCart(false); // Set state to false after removing
      })
      .catch(() => {
        alert("Failed to remove product from cart");
      });
  };

  return (
    <div className="electronics-main">
      <div className="electronics-card">
        <img src={image} alt="" />
        <h6>{title}</h6>
        <span>
          <b>Category:</b> {category}
        </span>
        <br />
        <span>
          <b>Price:</b> ${price}
        </span>
        <br />
        <p>
          <b>Rate:</b> {rating.rate} <b>Count:</b> {rating.count}
        </p>
        <Link to={`/productdetails/${id}`}>
          <button className="btn btn-primary m-1">Product Details</button>
        </Link>
        {addCart ? (
          <button className="btn btn-danger mx-1" onClick={removeFromCart}>
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

export default Electronicitem;
