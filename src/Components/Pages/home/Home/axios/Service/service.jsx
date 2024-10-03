
import { useState, useEffect } from 'react';
import axios from 'axios';
import './service.css';

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get('https://dummyjson.com/product?limit=30');
            setProducts(response.data.products.slice(0,20));
        } catch (err) {
            setError(err.message);
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <h4 style={{marginLeft:"50px"}}>Products</h4>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <div className="main-products">
                {products.map((element, index) => (
                    <div className="product-item" key={index}>
                        <img src={element.thumbnail} alt={element.title} />
                        <h5>{element.title}</h5>
                        <span><b>Category:</b>{element.category}</span><br />
                        <span><b>Price:</b>${element.price}</span><br />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsList;

